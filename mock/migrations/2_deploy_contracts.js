var AvgOnDemand = artifacts.require("./AvgOnDemand.sol");
var AvgOnDemandTwo = artifacts.require("./AvgOnDemandTwo.sol");
var Binary = artifacts.require("./ParityBinary.sol");
var Modulo = artifacts.require("./ParityModulo.sol");
var BinaryTwo = artifacts.require("./ParityBinaryTwo.sol");
var ModuloTwo = artifacts.require("./ParityModuloTwo.sol");

module.exports = function(deployer) {
  deployer.deploy(AvgOnDemand);
  deployer.deploy(AvgOnDemandTwo);
  deployer.deploy(Binary);
  deployer.deploy(Modulo);
  deployer.deploy(BinaryTwo);
  deployer.deploy(ModuloTwo);
};
