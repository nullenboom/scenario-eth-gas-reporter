const utils = require("./utils");
const ScenarioData = require("./scenarioData");
const SyncRequest = require("./syncRequest");
const ProxyResolver = require("./proxyResolver");

/**
 * Tracks blocks and cycles across them, extracting gas usage data and
 * associating it with the relevant contracts, methods.
 */
class ScenarioWatcher {
  constructor(config) {
    this.itStartBlock = 0; // Tracks within `it` block transactions (gas usage per test)
    this.beforeStartBlock = 0; // Tracks from `before/beforeEach` transactions (methods & deploys)
    this.data = new ScenarioData();
    this.sync = new SyncRequest(config.url);
    this.resolver = new ProxyResolver(this.data, config);
    this.scenarioName = "";
    this.variantName = "";
  }

  /**
   * Cycles across a range of blocks, from beforeStartBlock set in the reporter's
   * `test` hook to current block when it's called. Collect deployments and methods
   * gas usage data.
   * @return {Number} Total gas usage for the `it` block
   */
  blocks(scenarioName, variantName) {
    let gasUsed = 0;

    this.scenarioName = scenarioName;
    this.variantName = variantName;

    const variantMatch = this.data.getVariantInfoByNames(
      this.scenarioName,
      this.variantName
    );

    const endBlock = this.sync.blockNumber();

    while (this.beforeStartBlock <= endBlock) {
      let block = this.sync.getBlockByNumber(this.beforeStartBlock);

      if (block) {
        // Track gas used within `it` blocks
        if (this.itStartBlock <= this.beforeStartBlock) {
          gasUsed += utils.gas(block.gasUsed);
        }

        // Collect methods and deployments data
        block.transactions.forEach(transaction => {
          const receipt = this.sync.getTransactionReceipt(transaction.hash);

          // Omit transactions that throw
          if (parseInt(receipt.status) === 0) return;

          receipt.contractAddress
            ? this._collectDeploymentsData(transaction, receipt)
            : this._collectMethodsData(transaction, receipt);
        });
      }
      this.beforeStartBlock++;
    }
    variantMatch.totalGasUsed = gasUsed;
    return gasUsed;
  }

  /**
   * Extracts and stores deployments gas usage data for a tx
   * @param  {Object} transaction return value of `getTransactionByHash`
   * @param  {Object} receipt
   */
  _collectDeploymentsData(transaction, receipt) {
    const variantMatch = this.data.getVariantInfoByNames(
      this.scenarioName,
      this.variantName
    );

    if (variantMatch) {
      const match = this.data.getContractByDeploymentInput(transaction.input);

      const deploymentID = utils.getDeploymentID(match.name, match.bytecode);
      if (match) {
        if (variantMatch.deployments[deploymentID]) {
          variantMatch.deployments[deploymentID].gasData.push(
            utils.gas(receipt.gasUsed)
          );
          variantMatch.deployments[deploymentID].numberOfDeployments++;
        } else {
          variantMatch.deployments[deploymentID] = {
            contract: match.name,
            key: deploymentID,
            gasData: [utils.gas(receipt.gasUsed)],
            numberOfDeployments: 1
          };
        }
      }
    }
  }

  /**
   * Extracts and stores methods gas usage data for a tx
   * @param  {Object} transaction return value of `getTransactionByHash`
   * @param  {Object} receipt
   */
  _collectMethodsData(transaction, receipt) {
    const variantMatch = this.data.getVariantInfoByNames(
      this.scenarioName,
      this.variantName
    );
    if (variantMatch) {
      let contractName = this.data.getNameByAddress(transaction.to);

      // Case: proxied call
      if (this._isProxied(contractName, transaction.input)) {
        contractName = this.resolver.resolve(transaction);

        // Case: hidden contract factory deployment
      } else if (!contractName) {
        contractName = this.resolver.resolveByDeployedBytecode(transaction.to);
      }

      // Case: all else fails, use first match strategy
      if (!contractName) {
        contractName = this.resolver.resolveByMethodSignature(transaction);
      }

      const id = utils.getMethodID(contractName, transaction.input);

      if (variantMatch.methods[id]) {
        variantMatch.methods[id].gasData.push(utils.gas(receipt.gasUsed));
        variantMatch.methods[id].numberOfCalls++;
      } else {
        //if method is in decoded methods
        if (this.data.methods[id]) {
          // init variant match methods with given id (name plus uuid), set first entry in gasData and numberOfCalls to 1
          variantMatch.methods[id] = {
            contract: contractName,
            method: this.data.methods[id].method,
            gasData: [utils.gas(receipt.gasUsed)],
            numberOfCalls: 1
          };
        } else {
          this.resolver.unresolvedCalls++;
        }
      }
    }
  }

  /**
   * Returns true if there is a contract name associated with an address
   * but method can't be matched to it
   * @param  {String}  name  contract name
   * @param  {String}  input code
   * @return {Boolean}
   */
  _isProxied(name, input) {
    return name && !this.data.methods[utils.getMethodID(name, input)];
  }
}

module.exports = ScenarioWatcher;
