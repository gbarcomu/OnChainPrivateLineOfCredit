/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027843803806200278483398181016040528101906200003791906200019f565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f90620002b9565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200024d565b62000224565b90508281526020810184848401111562000157576200015662000388565b5b6200016484828562000283565b509392505050565b600082601f83011262000184576200018362000383565b5b81516200019684826020860162000121565b91505092915050565b60008060408385031215620001b957620001b862000392565b5b600083015167ffffffffffffffff811115620001da57620001d96200038d565b5b620001e8858286016200016c565b925050602083015167ffffffffffffffff8111156200020c576200020b6200038d565b5b6200021a858286016200016c565b9150509250929050565b60006200023062000243565b90506200023e8282620002ef565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026b576200026a62000354565b5b620002768262000397565b9050602081019050919050565b60005b83811015620002a357808201518184015260208101905062000286565b83811115620002b3576000848401525b50505050565b60006002820490506001821680620002d257607f821691505b60208210811415620002e957620002e862000325565b5b50919050565b620002fa8262000397565b810181811067ffffffffffffffff821117156200031c576200031b62000354565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6123cc80620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e99190611657565b6102bc565b6040516100fb91906119dd565b60405180910390f35b61010c61039e565b60405161011991906119f8565b60405180910390f35b61013c600480360381019061013791906116b1565b610430565b6040516101499190611976565b60405180910390f35b61016c60048036038101906101679190611617565b6104b5565b005b61018860048036038101906101839190611501565b6105cd565b005b6101a4600480360381019061019f9190611501565b61062d565b005b6101c060048036038101906101bb91906116b1565b61064d565b6040516101cd9190611976565b60405180910390f35b6101f060048036038101906101eb9190611494565b6106ff565b6040516101fd9190611b9a565b60405180910390f35b61020e6107b7565b60405161021b91906119f8565b60405180910390f35b61023e600480360381019061023991906115d7565b610849565b005b61025a60048036038101906102559190611554565b6109ca565b005b610276600480360381019061027191906116b1565b610a2c565b60405161028391906119f8565b60405180910390f35b6102a660048036038101906102a191906114c1565b610ad3565b6040516102b391906119dd565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610397575061039682610b67565b5b9050919050565b6060600080546103ad90611dbf565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611dbf565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610bd1565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611afa565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611b5a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610c3d565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610c3d565b610ad3565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611a9a565b60405180910390fd5b6105c88383610c45565b505050565b6105de6105d8610c3d565b82610cfe565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611b7a565b60405180910390fd5b610628838383610ddc565b505050565b610648838383604051806020016040528060008152506109ca565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611ada565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611aba565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c690611dbf565b80601f01602080910402602001604051908101604052809291908181526020018280546107f290611dbf565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b610851610c3d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b690611a5a565b60405180910390fd5b80600560006108cc610c3d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610979610c3d565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109be91906119dd565b60405180910390a35050565b6109db6109d5610c3d565b83610cfe565b610a1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1190611b7a565b60405180910390fd5b610a2684848484611038565b50505050565b6060610a3782610bd1565b610a76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6d90611b3a565b60405180910390fd5b6000610a80611094565b90506000815111610aa05760405180602001604052806000815250610acb565b80610aaa846110ab565b604051602001610abb929190611952565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cb88361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d0982610bd1565b610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3f90611a7a565b60405180910390fd5b6000610d538361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dc257508373ffffffffffffffffffffffffffffffffffffffff16610daa84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dd35750610dd28185610ad3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dfc8261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610e52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4990611b1a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb990611a3a565b60405180910390fd5b610ecd83838361120c565b610ed8600082610c45565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f289190611cd5565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7f9190611c4e565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611043848484610ddc565b61104f84848484611211565b61108e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108590611a1a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156110f3576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611207565b600082905060005b6000821461112557808061110e90611e22565b915050600a8261111e9190611ca4565b91506110fb565b60008167ffffffffffffffff81111561114157611140611f58565b5b6040519080825280601f01601f1916602001820160405280156111735781602001600182028036833780820191505090505b5090505b600085146112005760018261118c9190611cd5565b9150600a8561119b9190611e6b565b60306111a79190611c4e565b60f81b8183815181106111bd576111bc611f29565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856111f99190611ca4565b9450611177565b8093505050505b919050565b505050565b60006112328473ffffffffffffffffffffffffffffffffffffffff166113a8565b1561139b578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261125b610c3d565b8786866040518563ffffffff1660e01b815260040161127d9493929190611991565b602060405180830381600087803b15801561129757600080fd5b505af19250505080156112c857506040513d601f19601f820116820180604052508101906112c59190611684565b60015b61134b573d80600081146112f8576040519150601f19603f3d011682016040523d82523d6000602084013e6112fd565b606091505b50600081511415611343576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133a90611a1a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113a0565b600190505b949350505050565b600080823b905060008111915050919050565b60006113ce6113c984611bda565b611bb5565b9050828152602081018484840111156113ea576113e9611f8c565b5b6113f5848285611d7d565b509392505050565b60008135905061140c8161233a565b92915050565b60008135905061142181612351565b92915050565b60008135905061143681612368565b92915050565b60008151905061144b81612368565b92915050565b600082601f83011261146657611465611f87565b5b81356114768482602086016113bb565b91505092915050565b60008135905061148e8161237f565b92915050565b6000602082840312156114aa576114a9611f96565b5b60006114b8848285016113fd565b91505092915050565b600080604083850312156114d8576114d7611f96565b5b60006114e6858286016113fd565b92505060206114f7858286016113fd565b9150509250929050565b60008060006060848603121561151a57611519611f96565b5b6000611528868287016113fd565b9350506020611539868287016113fd565b925050604061154a8682870161147f565b9150509250925092565b6000806000806080858703121561156e5761156d611f96565b5b600061157c878288016113fd565b945050602061158d878288016113fd565b935050604061159e8782880161147f565b925050606085013567ffffffffffffffff8111156115bf576115be611f91565b5b6115cb87828801611451565b91505092959194509250565b600080604083850312156115ee576115ed611f96565b5b60006115fc858286016113fd565b925050602061160d85828601611412565b9150509250929050565b6000806040838503121561162e5761162d611f96565b5b600061163c858286016113fd565b925050602061164d8582860161147f565b9150509250929050565b60006020828403121561166d5761166c611f96565b5b600061167b84828501611427565b91505092915050565b60006020828403121561169a57611699611f96565b5b60006116a88482850161143c565b91505092915050565b6000602082840312156116c7576116c6611f96565b5b60006116d58482850161147f565b91505092915050565b6116e781611d09565b82525050565b6116f681611d1b565b82525050565b600061170782611c0b565b6117118185611c21565b9350611721818560208601611d8c565b61172a81611f9b565b840191505092915050565b600061174082611c16565b61174a8185611c32565b935061175a818560208601611d8c565b61176381611f9b565b840191505092915050565b600061177982611c16565b6117838185611c43565b9350611793818560208601611d8c565b80840191505092915050565b60006117ac603283611c32565b91506117b782611fac565b604082019050919050565b60006117cf602483611c32565b91506117da82611ffb565b604082019050919050565b60006117f2601983611c32565b91506117fd8261204a565b602082019050919050565b6000611815602c83611c32565b915061182082612073565b604082019050919050565b6000611838603883611c32565b9150611843826120c2565b604082019050919050565b600061185b602a83611c32565b915061186682612111565b604082019050919050565b600061187e602983611c32565b915061188982612160565b604082019050919050565b60006118a1602c83611c32565b91506118ac826121af565b604082019050919050565b60006118c4602983611c32565b91506118cf826121fe565b604082019050919050565b60006118e7602f83611c32565b91506118f28261224d565b604082019050919050565b600061190a602183611c32565b91506119158261229c565b604082019050919050565b600061192d603183611c32565b9150611938826122eb565b604082019050919050565b61194c81611d73565b82525050565b600061195e828561176e565b915061196a828461176e565b91508190509392505050565b600060208201905061198b60008301846116de565b92915050565b60006080820190506119a660008301876116de565b6119b360208301866116de565b6119c06040830185611943565b81810360608301526119d281846116fc565b905095945050505050565b60006020820190506119f260008301846116ed565b92915050565b60006020820190508181036000830152611a128184611735565b905092915050565b60006020820190508181036000830152611a338161179f565b9050919050565b60006020820190508181036000830152611a53816117c2565b9050919050565b60006020820190508181036000830152611a73816117e5565b9050919050565b60006020820190508181036000830152611a9381611808565b9050919050565b60006020820190508181036000830152611ab38161182b565b9050919050565b60006020820190508181036000830152611ad38161184e565b9050919050565b60006020820190508181036000830152611af381611871565b9050919050565b60006020820190508181036000830152611b1381611894565b9050919050565b60006020820190508181036000830152611b33816118b7565b9050919050565b60006020820190508181036000830152611b53816118da565b9050919050565b60006020820190508181036000830152611b73816118fd565b9050919050565b60006020820190508181036000830152611b9381611920565b9050919050565b6000602082019050611baf6000830184611943565b92915050565b6000611bbf611bd0565b9050611bcb8282611df1565b919050565b6000604051905090565b600067ffffffffffffffff821115611bf557611bf4611f58565b5b611bfe82611f9b565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611c5982611d73565b9150611c6483611d73565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c9957611c98611e9c565b5b828201905092915050565b6000611caf82611d73565b9150611cba83611d73565b925082611cca57611cc9611ecb565b5b828204905092915050565b6000611ce082611d73565b9150611ceb83611d73565b925082821015611cfe57611cfd611e9c565b5b828203905092915050565b6000611d1482611d53565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611daa578082015181840152602081019050611d8f565b83811115611db9576000848401525b50505050565b60006002820490506001821680611dd757607f821691505b60208210811415611deb57611dea611efa565b5b50919050565b611dfa82611f9b565b810181811067ffffffffffffffff82111715611e1957611e18611f58565b5b80604052505050565b6000611e2d82611d73565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e6057611e5f611e9c565b5b600182019050919050565b6000611e7682611d73565b9150611e8183611d73565b925082611e9157611e90611ecb565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61234381611d09565b811461234e57600080fd5b50565b61235a81611d1b565b811461236557600080fd5b50565b61237181611d27565b811461237c57600080fd5b50565b61238881611d73565b811461239357600080fd5b5056fea26469706673582212209b07f272bfa38e4b62a49aa2ca196269170750bf419d1202abda13966d975c9264736f6c63430008070033";
