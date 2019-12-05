# scenario-eth-gas-reporter

**A Mocha reporter for Ethereum test suites:**
Gas usage per implement variant for a usage scenario. Average gas usage per method. A mocha reporter based on eth-gas-reporter.


- Detailled information about metrics for method calls and deployments within one test case
- Test case represents a implement variant of a given scenario
- Implement variants will be grouped within a scenario
- Possible to analayze and compare mutliple implement variant over multiple scenarios
- Simple installation for Truffle 

### Example output
![Example Output](docs/exampleoutput.png "Optional Title")

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
    reporter: 'eth-gas-reporter',
    reporterOptions : { ... } // See options below
  }
};
```


**Other**

This reporter should work with any build platform that uses Mocha and
connects to an Ethereum client running as a separate process. There's more on advanced use cases
[here](https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/advanced.md).

### Options

| Option            | Type                   | Default                     | Description                                                                                                                                                                               |
| ----------------- | ---------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |                                                                                                                            |
| noColors          | _Boolean_              | false                       | Suppress report color. Useful if you are printing to file b/c terminal colorization corrupts the text.                                                                                    |                                                                                                                    |
| excludeContracts  | _String[]_             | []                          | Contract names to exclude from report. Ex: `['Migrations']`                                                                                                                               |
| src               | _String_               | "contracts"                 | Folder in root directory to begin search for `.sol` files. This can also be a path to a subfolder relative to the root, e.g. "planets/annares/contracts"                                  |
| url               | _String_               | `web3.currentProvider.host` | RPC client url (ex: "http://localhost:8545")                                                                                                                                              |
| proxyResolver     | _Function_             | none                        | Custom method to resolve identity of methods managed by a proxy contract.                                                                                                                 |
| artifactType      | _Function_ or _String_ | "truffle-v5"                | Compilation artifact format to consume. (See [advanced use](https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/advanced.md).)                                                   

### Usage Notes

- Requires Node >= 8.
- You cannot use `ganache-core` as an in-process provider for your test suite. The reporter makes sync RPC calls
  while collecting data and your tests will hang unless the client is launched as a separate process.
- Method calls that throw are filtered from the stats.
- Contracts that are only ever created by other contracts within Solidity are not shown in the deployments table.

### Gas Reporter JSON output

The gas reporter writes the data it collects to a JSON file at `./scenario-gas-reports/dateofcreation.json`. An example of this output is [here](https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/gasReporterOutput.md).
You may find it useful as an input to more complex / long running gas analyses, etc.. Feel free to open an Issue if critical information for your analyses are missing from the json.

### Credits

All the ideas in this utility have been borrowed from elsewhere. Many thanks to:

- [@cgewecke](https://github.com/cgewecke) - Publisher of eth-gas-reporter, which is used within the core of this tool
- [@all] Contributors and Creditors of eth-gas-reporter

