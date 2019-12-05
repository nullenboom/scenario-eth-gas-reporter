### Gas reporter JSON output

A sample of the data written to file:

```json
{
	"creation": "5-12-2019 19:39:38",
	"analyzedScenarios": 2,
	"scenarios": [
		{
			"scenarioName": "Parity Numbers Scenario",
			"analyzedVariants": 4,
			"minTotalGasUsed": 142902,
			"maxTotalGasUsed": 144862,
			"variants": [
				{
					"variantName": "Contract: Parity_Binary",
					"totalGasUsed": 142902,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 42091,
							"totalGasUsed": 42091,
							"percentageOfScenario": 0.2945445130229108,
							"gasUsed": [
								42091
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityBinary",
							"key": "ParityBinary_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 100811,
							"totalGasUsed": 100811,
							"percentageOfScenario": 0.7054554869770892,
							"gasUsed": [
								100811
							]
						}
					]
				},
				{
					"variantName": "Contract: Parity_Binary_Two",
					"totalGasUsed": 143779,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 42100,
							"totalGasUsed": 42100,
							"percentageOfScenario": 0.2928104938829732,
							"gasUsed": [
								42100
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityBinaryTwo",
							"key": "ParityBinaryTwo_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 101679,
							"totalGasUsed": 101679,
							"percentageOfScenario": 0.7071895061170268,
							"gasUsed": [
								101679
							]
						}
					]
				},
				{
					"variantName": "Contract: Parity_Modulo",
					"totalGasUsed": 144862,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 42111,
							"totalGasUsed": 42111,
							"percentageOfScenario": 0.2906973533431818,
							"gasUsed": [
								42111
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityModulo",
							"key": "ParityModulo_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 102751,
							"totalGasUsed": 102751,
							"percentageOfScenario": 0.7093026466568182,
							"gasUsed": [
								102751
							]
						}
					]
				},
				{
					"variantName": "Contract: Parity_Modulo_Two",
					"totalGasUsed": 144321,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 42106,
							"totalGasUsed": 42106,
							"percentageOfScenario": 0.29175241302374566,
							"gasUsed": [
								42106
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityModuloTwo",
							"key": "ParityModuloTwo_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 102215,
							"totalGasUsed": 102215,
							"percentageOfScenario": 0.7082475869762543,
							"gasUsed": [
								102215
							]
						}
					]
				}
			]
		},
		{
			"scenarioName": "Non-Parity Numbers Scenario",
			"analyzedVariants": 4,
			"minTotalGasUsed": 127902,
			"maxTotalGasUsed": 129862,
			"variants": [
				{
					"variantName": "Contract: Parity_Binary",
					"totalGasUsed": 127902,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 27091,
							"totalGasUsed": 27091,
							"percentageOfScenario": 0.21181060499444887,
							"gasUsed": [
								27091
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityBinary",
							"key": "ParityBinary_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 100811,
							"totalGasUsed": 100811,
							"percentageOfScenario": 0.7881893950055511,
							"gasUsed": [
								100811
							]
						}
					]
				},
				{
					"variantName": "Contract: Parity_Binary_Two",
					"totalGasUsed": 128779,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 27100,
							"totalGasUsed": 27100,
							"percentageOfScenario": 0.2104380372576274,
							"gasUsed": [
								27100
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityBinaryTwo",
							"key": "ParityBinaryTwo_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 101679,
							"totalGasUsed": 101679,
							"percentageOfScenario": 0.7895619627423726,
							"gasUsed": [
								101679
							]
						}
					]
				},
				{
					"variantName": "Contract: Parity_Modulo",
					"totalGasUsed": 129862,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 27111,
							"totalGasUsed": 27111,
							"percentageOfScenario": 0.20876776886233078,
							"gasUsed": [
								27111
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityModulo",
							"key": "ParityModulo_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 102751,
							"totalGasUsed": 102751,
							"percentageOfScenario": 0.7912322311376693,
							"gasUsed": [
								102751
							]
						}
					]
				},
				{
					"variantName": "Contract: Parity_Modulo_Two",
					"totalGasUsed": 129321,
					"methods": [
						{
							"contractName": "ParityBinary",
							"methodName": "checkParity",
							"numberOfCalls": 1,
							"averageGasUsed": 27106,
							"totalGasUsed": 27106,
							"percentageOfScenario": 0.20960246209045708,
							"gasUsed": [
								27106
							]
						}
					],
					"deployments": [
						{
							"contractName": "ParityModuloTwo",
							"key": "ParityModuloTwo_60806040",
							"numberOfDeployments": 1,
							"averageGasUsed": 102215,
							"totalGasUsed": 102215,
							"percentageOfScenario": 0.7903975379095429,
							"gasUsed": [
								102215
							]
						}
					]
				}
			]
		}
	],
	"metaData": {
		"blockLimit": 8000000,
		"methods": {
			"AvgOnDemand_87db03b7": {
				"key": "87db03b7",
				"contract": "AvgOnDemand",
				"method": "add",
				"inputs": [
					{
						"name": "n",
						"type": "int256"
					}
				]
			},
			"AvgOnDemand_96f1b6be": {
				"key": "96f1b6be",
				"contract": "AvgOnDemand",
				"method": "calc",
				"inputs": []
			},
			"AvgOnDemandTwo_87db03b7": {
				"key": "87db03b7",
				"contract": "AvgOnDemandTwo",
				"method": "add",
				"inputs": [
					{
						"name": "n",
						"type": "int256"
					}
				]
			},
			"AvgOnDemandTwo_96f1b6be": {
				"key": "96f1b6be",
				"contract": "AvgOnDemandTwo",
				"method": "calc",
				"inputs": []
			},
			"ParityBinary_9c6514cf": {
				"key": "9c6514cf",
				"contract": "ParityBinary",
				"method": "checkParity",
				"inputs": [
					{
						"name": "n",
						"type": "int256"
					},
					{
						"name": "m",
						"type": "int256"
					}
				]
			},
			"ParityBinaryTwo_9c6514cf": {
				"key": "9c6514cf",
				"contract": "ParityBinaryTwo",
				"method": "checkParity",
				"inputs": [
					{
						"name": "n",
						"type": "int256"
					},
					{
						"name": "m",
						"type": "int256"
					}
				]
			},
			"ParityModulo_9c6514cf": {
				"key": "9c6514cf",
				"contract": "ParityModulo",
				"method": "checkParity",
				"inputs": [
					{
						"name": "n",
						"type": "int256"
					},
					{
						"name": "m",
						"type": "int256"
					}
				]
			},
			"ParityModuloTwo_9c6514cf": {
				"key": "9c6514cf",
				"contract": "ParityModuloTwo",
				"method": "checkParity",
				"inputs": [
					{
						"name": "n",
						"type": "int256"
					},
					{
						"name": "m",
						"type": "int256"
					}
				]
			}
		},
		"deployments": [
			{
				"name": "AvgOnDemand",
				"key": "AvgOnDemand_60806040",
				"bytecode": "0x608060405234801561001057600080fd5b5060ee8061001f6000396000f3fe60806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166387db03b78114604d57806396f1b6be146075575b600080fd5b348015605857600080fd5b50607360048036036020811015606d57600080fd5b50356099565b005b348015608057600080fd5b50608760ac565b60408051918252519081900360200190f35b6000805490910190556001805481019055565b600060015460005481151560bc57fe5b0590509056fea165627a7a72305820249c554835f98f69ed6e1f7f5ba0497c549e91539e46c2f54ba26656a487e1490029",
				"deployedBytecode": "0x60806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166387db03b78114604d57806396f1b6be146075575b600080fd5b348015605857600080fd5b50607360048036036020811015606d57600080fd5b50356099565b005b348015608057600080fd5b50608760ac565b60408051918252519081900360200190f35b6000805490910190556001805481019055565b600060015460005481151560bc57fe5b0590509056fea165627a7a72305820249c554835f98f69ed6e1f7f5ba0497c549e91539e46c2f54ba26656a487e1490029"
			},
			{
				"name": "AvgOnDemandTwo",
				"key": "AvgOnDemandTwo_60806040",
				"bytecode": "0x608060405234801561001057600080fd5b5060ef8061001f6000396000f3fe60806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166387db03b78114604d57806396f1b6be146075575b600080fd5b348015605857600080fd5b50607360048036036020811015606d57600080fd5b50356099565b005b348015608057600080fd5b50608760bd565b60408051918252519081900360200190f35b60008054820190819055600180548101908190559081151560b657fe5b0560025550565b6002549056fea165627a7a72305820d01d3885e30bf01818fb186486338a3dae713fa20c6b6c6af344d735ad97a8740029",
				"deployedBytecode": "0x60806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166387db03b78114604d57806396f1b6be146075575b600080fd5b348015605857600080fd5b50607360048036036020811015606d57600080fd5b50356099565b005b348015608057600080fd5b50608760bd565b60408051918252519081900360200190f35b60008054820190819055600180548101908190559081151560b657fe5b0560025550565b6002549056fea165627a7a72305820d01d3885e30bf01818fb186486338a3dae713fa20c6b6c6af344d735ad97a8740029"
			},
			{
				"name": "ParityBinary",
				"key": "ParityBinary_60806040",
				"bytecode": "0x608060405234801561001057600080fd5b5060b48061001f6000396000f3fe608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b60008054919092186001161560ff1990911617905556fea165627a7a72305820d80285e3120883edc96fcf00d6a487ebfcf8643b5626e7f7ecbf68f0e6b404370029",
				"deployedBytecode": "0x608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b60008054919092186001161560ff1990911617905556fea165627a7a72305820d80285e3120883edc96fcf00d6a487ebfcf8643b5626e7f7ecbf68f0e6b404370029"
			},
			{
				"name": "ParityBinaryTwo",
				"key": "ParityBinaryTwo_60806040",
				"bytecode": "0x608060405234801561001057600080fd5b5060b78061001f6000396000f3fe608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b6000805460ff19166001938416939092169290921417905556fea165627a7a72305820749fc8f7f4d9c1082ed5e71852529de56621d72625c0e8fbd4de9a992ed1e3650029",
				"deployedBytecode": "0x608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b6000805460ff19166001938416939092169290921417905556fea165627a7a72305820749fc8f7f4d9c1082ed5e71852529de56621d72625c0e8fbd4de9a992ed1e3650029"
			},
			{
				"name": "ParityModulo",
				"key": "ParityModulo_60806040",
				"bytecode": "0x608060405234801561001057600080fd5b5060bb8061001f6000396000f3fe608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b600281076002836000805460ff19169290910792909214179055505056fea165627a7a7230582096e9d69014d7c1ef2f70395b8f6a1eecdc2fcc5d81c026cf0fb59b51a52209820029",
				"deployedBytecode": "0x608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b600281076002836000805460ff19169290910792909214179055505056fea165627a7a7230582096e9d69014d7c1ef2f70395b8f6a1eecdc2fcc5d81c026cf0fb59b51a52209820029"
			},
			{
				"name": "ParityModuloTwo",
				"key": "ParityModuloTwo_60806040",
				"bytecode": "0x608060405234801561001057600080fd5b5060b98061001f6000396000f3fe608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b60028282016000805460ff19169290910715919091179055505056fea165627a7a7230582046c38748dc7c02b96a2d1eff85d986277e179e5c1ee1d99d6fc44d76f12b680a0029",
				"deployedBytecode": "0x608060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639c6514cf81146043575b600080fd5b348015604e57600080fd5b50606f60048036036040811015606357600080fd5b50803590602001356071565b005b60028282016000805460ff19169290910715919091179055505056fea165627a7a7230582046c38748dc7c02b96a2d1eff85d986277e179e5c1ee1d99d6fc44d76f12b680a0029"
			}
		],
		"solcInfo": {
			"version": "----",
			"optimizer": "----",
			"runs": "----"
		}
	}
}
```
