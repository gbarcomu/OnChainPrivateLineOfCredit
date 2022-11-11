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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DungeonInterface extends ethers.utils.Interface {
  functions: {
    "createQuest(bytes32)": FunctionFragment;
    "getNonce()": FunctionFragment;
    "getQuestStage()": FunctionFragment;
    "getRemainingTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "playQuest(uint8,uint8,uint8)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resolveQuest(bytes4,bytes32)": FunctionFragment;
    "terminateQuestForInactivity()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createQuest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getQuestStage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRemainingTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playQuest",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveQuest",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "terminateQuestForInactivity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createQuest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getQuestStage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemainingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "playQuest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveQuest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminateQuestForInactivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BattleWinners(bool,bool,bool)": EventFragment;
    "IsPlayerWinner(bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PseudoRandomNumbers(uint8,uint8,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BattleWinners"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IsPlayerWinner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PseudoRandomNumbers"): EventFragment;
}

export class Dungeon extends Contract {
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

  interface: DungeonInterface;

  functions: {
    createQuest(
      newDungeonSquadCommitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createQuest(bytes32)"(
      newDungeonSquadCommitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNonce(overrides?: CallOverrides): Promise<[number]>;

    "getNonce()"(overrides?: CallOverrides): Promise<[number]>;

    getQuestStage(overrides?: CallOverrides): Promise<[number]>;

    "getQuestStage()"(overrides?: CallOverrides): Promise<[number]>;

    getRemainingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getRemainingTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    playQuest(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "playQuest(uint8,uint8,uint8)"(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resolveQuest(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "resolveQuest(bytes4,bytes32)"(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terminateQuestForInactivity(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "terminateQuestForInactivity()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createQuest(
    newDungeonSquadCommitment: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createQuest(bytes32)"(
    newDungeonSquadCommitment: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNonce(overrides?: CallOverrides): Promise<number>;

  "getNonce()"(overrides?: CallOverrides): Promise<number>;

  getQuestStage(overrides?: CallOverrides): Promise<number>;

  "getQuestStage()"(overrides?: CallOverrides): Promise<number>;

  getRemainingTime(overrides?: CallOverrides): Promise<BigNumber>;

  "getRemainingTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  playQuest(
    squadUnit1: BigNumberish,
    squadUnit2: BigNumberish,
    squadUnit3: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "playQuest(uint8,uint8,uint8)"(
    squadUnit1: BigNumberish,
    squadUnit2: BigNumberish,
    squadUnit3: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resolveQuest(
    dungeonSquad: BytesLike,
    blindingFactor: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "resolveQuest(bytes4,bytes32)"(
    dungeonSquad: BytesLike,
    blindingFactor: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terminateQuestForInactivity(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "terminateQuestForInactivity()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createQuest(
      newDungeonSquadCommitment: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "createQuest(bytes32)"(
      newDungeonSquadCommitment: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getNonce(overrides?: CallOverrides): Promise<number>;

    "getNonce()"(overrides?: CallOverrides): Promise<number>;

    getQuestStage(overrides?: CallOverrides): Promise<number>;

    "getQuestStage()"(overrides?: CallOverrides): Promise<number>;

    getRemainingTime(overrides?: CallOverrides): Promise<BigNumber>;

    "getRemainingTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    playQuest(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "playQuest(uint8,uint8,uint8)"(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    resolveQuest(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "resolveQuest(bytes4,bytes32)"(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    terminateQuestForInactivity(overrides?: CallOverrides): Promise<void>;

    "terminateQuestForInactivity()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    BattleWinners(
      undefined: null,
      undefined: null,
      undefined: null
    ): TypedEventFilter<
      [boolean, boolean, boolean],
      { arg0: boolean; arg1: boolean; arg2: boolean }
    >;

    IsPlayerWinner(
      undefined: null
    ): TypedEventFilter<[boolean], { arg0: boolean }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    PseudoRandomNumbers(
      undefined: null,
      undefined: null,
      undefined: null
    ): TypedEventFilter<
      [number, number, number],
      { arg0: number; arg1: number; arg2: number }
    >;
  };

  estimateGas: {
    createQuest(
      newDungeonSquadCommitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createQuest(bytes32)"(
      newDungeonSquadCommitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    getQuestStage(overrides?: CallOverrides): Promise<BigNumber>;

    "getQuestStage()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRemainingTime(overrides?: CallOverrides): Promise<BigNumber>;

    "getRemainingTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    playQuest(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "playQuest(uint8,uint8,uint8)"(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resolveQuest(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "resolveQuest(bytes4,bytes32)"(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terminateQuestForInactivity(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "terminateQuestForInactivity()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createQuest(
      newDungeonSquadCommitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createQuest(bytes32)"(
      newDungeonSquadCommitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getQuestStage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getQuestStage()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRemainingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRemainingTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playQuest(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "playQuest(uint8,uint8,uint8)"(
      squadUnit1: BigNumberish,
      squadUnit2: BigNumberish,
      squadUnit3: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resolveQuest(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "resolveQuest(bytes4,bytes32)"(
      dungeonSquad: BytesLike,
      blindingFactor: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terminateQuestForInactivity(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "terminateQuestForInactivity()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
