/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IInitializableUToken } from "./IInitializableUToken";

export class IInitializableUTokenFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInitializableUToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IInitializableUToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "treasury",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "incentivesController",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "uTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uTokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "contract IUmeeIncentivesController",
        name: "incentivesController",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "uTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "uTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "uTokenSymbol",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
