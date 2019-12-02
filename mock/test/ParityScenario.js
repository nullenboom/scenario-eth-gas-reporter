const Binary = artifacts.require("./ParityBinary.sol");
const BinaryTwo = artifacts.require("./ParityBinaryTwo.sol");
const Modulo = artifacts.require("./ParityModulo.sol");
const ModuloTwo = artifacts.require("./ParityModuloTwo.sol");

const callsTwo = Math.floor(Math.random() * 20);

contract("Parity_Binary", async accounts => {
  it("Parity Numbers Scenario", async () => {
    const binary = await Binary.new();
    const parity = await binary.checkParity(10, 20);
  });
});

contract("Parity_Binary_Two", async accounts => {
  it("Parity Numbers Scenario", async () => {
    const binary = await BinaryTwo.new();
    const parity = await binary.checkParity(10, 20);
  });
});

contract("Parity_Modulo", async accounts => {
  it("Parity Numbers Scenario", async () => {
    const modulo = await Modulo.new();
    const parity = await modulo.checkParity(10, 20);
  });
});

contract("Parity_Modulo_Two", async accounts => {
  it("Parity Numbers Scenario", async () => {
    const modulo = await ModuloTwo.new();
    const parity = await modulo.checkParity(10, 20);
  });
});

contract("Parity_Binary", async accounts => {
  it("Non-Parity Numbers Scenario", async () => {
    const binary = await Binary.new();
    const parity = await binary.checkParity(10, 5);
  });
});

contract("Parity_Binary_Two", async accounts => {
  it("Non-Parity Numbers Scenario", async () => {
    const binary = await BinaryTwo.new();
    const parity = await binary.checkParity(10, 5);
  });
});

contract("Parity_Modulo", async accounts => {
  it("Non-Parity Numbers Scenario", async () => {
    const modulo = await Modulo.new();
    const parity = await modulo.checkParity(10, 5);
  });
});

contract("Parity_Modulo_Two", async accounts => {
  it("Non-Parity Numbers Scenario", async () => {
    const modulo = await ModuloTwo.new();
    const parity = await modulo.checkParity(10, 5);
  });
});

/*contract("Parity_Modulo", async accounts => {
  it("UsageScenarioTwo", async () => {
     const modulo = await Modulo.new();
	for(i = 0; i < callsTwo; i++){
		 await modulo.checkParity(10, 20);
	}
  });
});

*/
/*contract("Parity_Binary", async accounts => {
  it("UsageScenarioTwo", async () => {
    const binary = await Binary.new();
	for(i = 0; i < callsTwo; i++){
		 await binary.checkParity(10 , 20);
	}
  });
});*/
