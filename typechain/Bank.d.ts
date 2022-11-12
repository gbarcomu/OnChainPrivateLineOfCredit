/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BankInterface extends ethers.utils.Interface {
  functions: {
    "openLineOfCredit(uint256,bytes32,bytes32,bytes32,bytes32)": FunctionFragment;
    "verifyProof(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "openLineOfCredit",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "openLineOfCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {
    "lineSuccessfullyCreated(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "lineSuccessfullyCreated"): EventFragment;
}

export class Bank extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BankInterface;

  functions: {
    openLineOfCredit(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "openLineOfCredit(uint256,bytes32,bytes32,bytes32,bytes32)"(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyProof(
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyProof(bytes)"(
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  openLineOfCredit(
    userId: BigNumberish,
    _maximumAllowanceHash: BytesLike,
    _disposedAmountHash: BytesLike,
    _interestRateHash: BytesLike,
    _accruedInterestsHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "openLineOfCredit(uint256,bytes32,bytes32,bytes32,bytes32)"(
    userId: BigNumberish,
    _maximumAllowanceHash: BytesLike,
    _disposedAmountHash: BytesLike,
    _interestRateHash: BytesLike,
    _accruedInterestsHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyProof(proof: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "verifyProof(bytes)"(
    proof: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    openLineOfCredit(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "openLineOfCredit(uint256,bytes32,bytes32,bytes32,bytes32)"(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyProof(proof: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "verifyProof(bytes)"(
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    lineSuccessfullyCreated(
      undefined: null
    ): TypedEventFilter<[boolean], { arg0: boolean }>;
  };

  estimateGas: {
    openLineOfCredit(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "openLineOfCredit(uint256,bytes32,bytes32,bytes32,bytes32)"(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyProof(
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyProof(bytes)"(
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    openLineOfCredit(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "openLineOfCredit(uint256,bytes32,bytes32,bytes32,bytes32)"(
      userId: BigNumberish,
      _maximumAllowanceHash: BytesLike,
      _disposedAmountHash: BytesLike,
      _interestRateHash: BytesLike,
      _accruedInterestsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyProof(
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyProof(bytes)"(
      proof: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
