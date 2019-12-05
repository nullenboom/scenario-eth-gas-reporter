const Binary = artifacts.require("./ParityBinary.sol");
const Modulo = artifacts.require("./ParityModulo.sol");

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
