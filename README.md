# scenario-eth-gas-reporter

This project was done as master thesis at the University of Duisburg-Essen Germany with the title "Engineering an Analysis Tool for Comparing Transaction Costs in Ethereum Smart Contracts"

**A Mocha reporter for Ethereum test suites:**
Detailed information of gas usage per test case. One test case represent a implement variant of a given scenario. See more Information [here](https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/advanced.md). A mocha reporter based on eth-gas-reporter.

- Detailed information about metrics for method calls and deployments within one test case
- Test case represents a implement variant of a given scenario
- Implement variants will be grouped within a scenario
- Possible to analyze and compare gas cost of multiple smarct contracts
- Simple installation for Truffle 



### Example output
![Example Output](https://github.com/nullenboom/scenario-eth-gas-reporter/blob/master/docs/exampleoutput.png)

### Installation and Config

**[Truffle](https://www.trufflesuite.com/docs)**

```
npm install --save-dev scenario-eth-gas-reporter
```

```javascript
/* truffle-config.js */
module.exports = {
  networks: { ... },
  mocha: {
    reporter: 'scenario-eth-gas-reporter',
    reporterOptions : { ... } // See options below
  }
};
```


**Other**

This reporter should work with any build platform that uses Mocha and
connects to an Ethereum client running as a separate process. There's more on advanced use cases
[here](https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/advanced.md).

### Options

| Option           | Type                   | Default      | Description                                                                                                                                                |
|------------------|------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| noColors         | _Boolean               | false        |                                                                                                                                                            |
| excludeContracts | _String[]_             | [migrations] | Contract names to exclude from report. Ex: ['Migrations']                                                                                                  |
| src              | _String_               | "contracts"  | Folder in root directory to begin search for `.sol` files.  This can also be a path to a subfolder relative to the root,  e.g. "planets/annares/contracts" |
| proxyResolver    | _Function_             | none         | Custom method to resolve identity of methods managed by a proxy contract                                                                                   |
| artifactType     | _Function_ or _String_ | "truffle-v5" | Compilation artifact format to consume. (See [advanced use](https://github.com/nullenboom/scenario-eth-gas-reporter/blob/master/docs/advanced.md).)        |
### Usage Notes

- Requires Node >= 8.
- You cannot use `ganache-core` as an in-process provider for your test suite. The reporter makes sync RPC calls
  while collecting data and your tests will hang unless the client is launched as a separate process.
- Method calls that throw are filtered from the stats.
- Contracts that are only ever created by other contracts within Solidity are not shown in the deployments table.

### Usage Details
- Name of contract-block represents a implement variant, which will be mapped to the name of the it-block (name of it-block represent a scenario):
-In the given example we got two scenarios (Parity Numbers Scenario and Non-parity Number Scenario) with two implement variants each (Parity Binary and Parity Modulo)
 
```javascript
/* example test.js */
contract("Parity_Binary", async accounts => {
  it("Parity Numbers Scenario", async () => {
    const binary = await Binary.new();
    const parity = await binary.checkParity(10, 20);
  });
});

contract("Parity_Modulo", async accounts => {
  it("Parity Numbers Scenario", async () => {
    const modulo = await Modulo.new();
    const parity = await modulo.checkParity(10, 20);
  });
});

contract("Parity_Binary", async accounts => {
  it("Non-Parity Numbers Scenario", async () => {
    const binary = await Binary.new();
    const parity = await binary.checkParity(10, 5);
  });
});

contract("Parity_Modulo", async accounts => {
  it("Non-Parity Numbers Scenario", async () => {
    const modulo = await Modulo.new();
    const parity = await modulo.checkParity(10, 5);
  });
});


```

### Gas Reporter JSON output

The gas reporter writes the data it collects to a JSON file at `./scenario-gas-reports/dateofcreation.json`. An example of this output is [here](https://github.com/nullenboom/scenario-eth-gas-reporter/blob/master/docs/gasReporterOutput.md).
You may find it useful as an input to more complex / long running gas analyses, etc.. Feel free to open an Issue if critical information for your analyses are missing from the json.

### Credits

All the ideas in this utility have been borrowed from elsewhere. Many thanks to:

- [@coldDevil] supervisor of master thesis
- [@cgewecke](https://github.com/cgewecke) - Publisher of eth-gas-reporter, which is used within the core of this tool
- All further Contributors and Creditors of eth-gas-reporter


