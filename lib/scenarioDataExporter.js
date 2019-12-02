const _ = require("lodash");
const fs = require("fs");
const utils = require("./utils");

class ScenarioDataExporter {
  constructor(config) {
    this.config = config;
  }
  /**
   * Formats and prints a gas statistics table. Optionally writes to a file.
   * Based on https://github.com/nullenboom/eth-gas-reporter definition
   * @param  {Object} data   scenarioData instance with usageScenarios data
   */
  export(data) {
    // ---------------------------------------------------------------------------------------------
    // Assemble section: usageScenarios
    // ---------------------------------------------------------------------------------------------
    var jsonString = {};
    var dateStrings = this._createDateStrings();
    var fileName = dateStrings.fileName;
    jsonString.creation = dateStrings.creationString;

    var scenariosData = this._createExportScenariosData(data);
    jsonString.analyzedScenarios = scenariosData.analyzedScenarios;
    jsonString.scenarios = scenariosData.scenarios;
    jsonString.metaData = this._createMetaData(data);
    //this.writeIntoJsonFile(jsonString, fileName);
    let jsonAndFileName = {
      json: jsonString,
      fileName: fileName
    };
    return jsonAndFileName;
  }

  writeJsonIntoReportDirWithFilename(json, fileName) {
    var dir = "./scenario-gas-reports";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(dir + "/" + fileName + ".json", JSON.stringify(json));
  }

  _createMetaData(info) {
    const metaDataJson = {
      blockLimit: info.blockLimit,
      methods: info.methods,
      deployments: info.deployments,
      solcInfo: utils.getSolcInfo(this.config.metadata)
    };

    return metaDataJson;
  }

  _createExportScenariosData(info) {
    const jsonString = {
      analyzedScenarios: 0,
      scenarios: []
    };

    _.forEach(info.usageScenarios, (data, methodId) => {
      if (!data) return;
      jsonString.analyzedScenarios++;
      //getMinAndMaxTotalGasUsed values for scenario
      let minAndMaxTotalGasUsed = this._getMinAndMaxTotalGasUsed(data.variants);
      //used to determine how many rows the scenario is long, starts with 1 for scenario title row
      const scenarioData = {
        scenarioName: data.name,
        analyzedVariants: 0,
        minTotalGasUsed: minAndMaxTotalGasUsed.minTotalGasUsed,
        maxTotalGasUsed: minAndMaxTotalGasUsed.maxTotalGasUsed,
        variants: []
      };

      //one iteration to check for min and max Gas values
      data.variants.forEach(variant => {
        scenarioData.analyzedVariants++;
        const variantData = {
          variantName: variant.name,
          totalGasUsed: variant.totalGasUsed,
          methods: this._createMethodData(variant),
          deployments: this._createDeploymentData(variant)
        };
        scenarioData.variants.push(variantData);
      });
      jsonString.scenarios.push(scenarioData);
    });

    return jsonString;
  }

  /**
   * Generates method rows for one variant
   * @param  {Object} variant variant Object with methods and deployment data
   */
  _createMethodData(variant) {
    const methodData = [];

    _.forEach(variant.methods, (data, methodId) => {
      let stats = {};
      stats.contractName = data.contract;
      stats.methodName = data.method;
      stats.numberOfCalls = data.numberOfCalls;

      const total = data.gasData.reduce((acc, datum) => acc + datum, 0);

      stats.averageGasUsed = Math.round(total / data.gasData.length);
      stats.totalGasUsed = total;
      stats.percentageOfScenario = total / variant.totalGasUsed;
      stats.gasUsed = data.gasData;

      methodData.push(stats);
    });
    return methodData;
  }

  _createDeploymentData(variant) {
    const deploymentData = [];

    _.forEach(variant.deployments, (data, methodId) => {
      let stats = {};
      stats.contractName = data.contract;
      stats.key = data.key;
      stats.numberOfDeployments = data.numberOfDeployments;
      const total = data.gasData.reduce((acc, datum) => acc + datum, 0);
      stats.averageGasUsed = Math.round(total / data.gasData.length);
      stats.totalGasUsed = total;
      stats.percentageOfScenario = total / variant.totalGasUsed;
      stats.gasUsed = data.gasData;
      deploymentData.push(stats);
    });
    return deploymentData;
  }

  _getMinAndMaxTotalGasUsed(variants) {
    var min = variants[0].totalGasUsed;
    var max = variants[0].totalGasUsed;

    variants.forEach(variant => {
      if (min > variant.totalGasUsed) {
        min = variant.totalGasUsed;
      }
      if (max < variant.totalGasUsed) {
        max = variant.totalGasUsed;
      }
    });

    let minMaxGasUsed = {
      minTotalGasUsed: min,
      maxTotalGasUsed: max
    };

    return minMaxGasUsed;
  }

  _createDateStrings() {
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var dateStrings = {};
    var fileName =
      date +
      "-" +
      (month + 1) +
      "-" +
      year +
      "_" +
      hours +
      "-" +
      minutes +
      "-" +
      seconds;
    var creationString =
      date +
      "-" +
      (month + 1) +
      "-" +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    dateStrings.creationString = creationString;
    dateStrings.fileName = fileName;

    return dateStrings;
  }
}

module.exports = ScenarioDataExporter;
