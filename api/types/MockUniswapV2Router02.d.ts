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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockUniswapV2Router02Interface extends ethers.utils.Interface {
  functions: {
    "getAmountsIn(uint256,address[])": FunctionFragment;
    "getAmountsOut(uint256,address[])": FunctionFragment;
    "setAmountIn(uint256,address,address,uint256)": FunctionFragment;
    "setAmountOut(uint256,address,address,uint256)": FunctionFragment;
    "setAmountToReturn(address,uint256)": FunctionFragment;
    "setAmountToSwap(address,uint256)": FunctionFragment;
    "setDefaultMockValue(uint256)": FunctionFragment;
    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmountsIn",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountIn",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountOut",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountToReturn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAmountToSwap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultMockValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmountsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountToReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmountToSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultMockValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockUniswapV2Router02 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockUniswapV2Router02Interface;

  functions: {
    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    setAmountIn(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAmountIn(uint256,address,address,uint256)"(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAmountOut(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAmountOut(uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAmountToReturn(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAmountToReturn(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAmountToSwap(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAmountToSwap(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setDefaultMockValue(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDefaultMockValue(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getAmountsIn(
    amountOut: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getAmountsIn(uint256,address[])"(
    amountOut: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAmountsOut(
    amountIn: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getAmountsOut(uint256,address[])"(
    amountIn: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  setAmountIn(
    amountOut: BigNumberish,
    reserveIn: string,
    reserveOut: string,
    amountIn: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAmountIn(uint256,address,address,uint256)"(
    amountOut: BigNumberish,
    reserveIn: string,
    reserveOut: string,
    amountIn: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAmountOut(
    amountIn: BigNumberish,
    reserveIn: string,
    reserveOut: string,
    amountOut: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAmountOut(uint256,address,address,uint256)"(
    amountIn: BigNumberish,
    reserveIn: string,
    reserveOut: string,
    amountOut: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAmountToReturn(
    reserve: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAmountToReturn(address,uint256)"(
    reserve: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAmountToSwap(
    reserve: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAmountToSwap(address,uint256)"(
    reserve: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setDefaultMockValue(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDefaultMockValue(uint256)"(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    amountIn: BigNumberish,
    arg1: BigNumberish,
    path: string[],
    to: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
    amountIn: BigNumberish,
    arg1: BigNumberish,
    path: string[],
    to: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapTokensForExactTokens(
    amountOut: BigNumberish,
    arg1: BigNumberish,
    path: string[],
    to: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
    amountOut: BigNumberish,
    arg1: BigNumberish,
    path: string[],
    to: string,
    arg4: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    setAmountIn(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAmountIn(uint256,address,address,uint256)"(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAmountOut(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAmountOut(uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAmountToReturn(
      reserve: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAmountToReturn(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAmountToSwap(
      reserve: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAmountToSwap(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultMockValue(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDefaultMockValue(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAmountIn(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAmountIn(uint256,address,address,uint256)"(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAmountOut(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAmountOut(uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAmountToReturn(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAmountToReturn(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAmountToSwap(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAmountToSwap(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setDefaultMockValue(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDefaultMockValue(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountsIn(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmountsIn(uint256,address[])"(
      amountOut: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAmountIn(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAmountIn(uint256,address,address,uint256)"(
      amountOut: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountIn: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAmountOut(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAmountOut(uint256,address,address,uint256)"(
      amountIn: BigNumberish,
      reserveIn: string,
      reserveOut: string,
      amountOut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAmountToReturn(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAmountToReturn(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAmountToSwap(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAmountToSwap(address,uint256)"(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setDefaultMockValue(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDefaultMockValue(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
      amountOut: BigNumberish,
      arg1: BigNumberish,
      path: string[],
      to: string,
      arg4: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
