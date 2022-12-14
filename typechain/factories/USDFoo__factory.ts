/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { USDFoo } from "../USDFoo";

export class USDFoo__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<USDFoo> {
    return super.deploy(overrides || {}) as Promise<USDFoo>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): USDFoo {
    return super.attach(address) as USDFoo;
  }
  connect(signer: Signer): USDFoo__factory {
    return super.connect(signer) as USDFoo__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USDFoo {
    return new Contract(address, _abi, signerOrProvider) as USDFoo;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040805180820182526006815265555344466f6f60d01b6020808301918252835180850190945260048452632aa9a22360e11b90840152815191929161005991600391610075565b50805161006d906004906020840190610075565b505050610149565b8280546100819061010e565b90600052602060002090601f0160209004810192826100a357600085556100e9565b82601f106100bc57805160ff19168380011785556100e9565b828001600101855582156100e9579182015b828111156100e95782518255916020019190600101906100ce565b506100f59291506100f9565b5090565b5b808211156100f557600081556001016100fa565b600181811c9082168061012257607f821691505b6020821081141561014357634e487b7160e01b600052602260045260246000fd5b50919050565b610b8f80620001596000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806370a0823111610081578063a457c2d71161005b578063a457c2d7146101b4578063a9059cbb146101c7578063dd62ed3e146101da57600080fd5b806370a082311461016157806395d89b4114610197578063a0712d681461019f57600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f578063395093511461014e57600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610220565b6040516100ee9190610956565b60405180910390f35b61010a6101053660046109f2565b6102b2565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a366004610a1c565b6102ca565b604051600281526020016100ee565b61010a61015c3660046109f2565b6102ee565b61011e61016f366004610a58565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100e161033a565b6101b26101ad366004610a7a565b610349565b005b61010a6101c23660046109f2565b610356565b61010a6101d53660046109f2565b610412565b61011e6101e8366004610a93565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461022f90610ac6565b80601f016020809104026020016040519081016040528092919081815260200182805461025b90610ac6565b80156102a85780601f1061027d576101008083540402835291602001916102a8565b820191906000526020600020905b81548152906001019060200180831161028b57829003601f168201915b5050505050905090565b6000336102c0818585610420565b5060019392505050565b6000336102d885828561059f565b6102e385858561065c565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102c09082908690610335908790610b1a565b610420565b60606004805461022f90610ac6565b610353338261087d565b50565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156104055760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102e38286868403610420565b6000336102c081858561065c565b73ffffffffffffffffffffffffffffffffffffffff83166104a85760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103fc565b73ffffffffffffffffffffffffffffffffffffffff82166105315760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103fc565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461065657818110156106495760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103fc565b6106568484848403610420565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166106e55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103fc565b73ffffffffffffffffffffffffffffffffffffffff821661076e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103fc565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020548181101561080a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103fc565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610656565b73ffffffffffffffffffffffffffffffffffffffff82166108e05760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fc565b80600260008282546108f29190610b1a565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b8181101561098357858101830151858201604001528201610967565b81811115610995576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146109ed57600080fd5b919050565b60008060408385031215610a0557600080fd5b610a0e836109c9565b946020939093013593505050565b600080600060608486031215610a3157600080fd5b610a3a846109c9565b9250610a48602085016109c9565b9150604084013590509250925092565b600060208284031215610a6a57600080fd5b610a73826109c9565b9392505050565b600060208284031215610a8c57600080fd5b5035919050565b60008060408385031215610aa657600080fd5b610aaf836109c9565b9150610abd602084016109c9565b90509250929050565b600181811c90821680610ada57607f821691505b60208210811415610b14577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115610b54577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea264697066735822122079ae91e073063051c5012d012e423d9c8f5d1803454407541fd4b6ff6aba206064736f6c634300080a0033";
