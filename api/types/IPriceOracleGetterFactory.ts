/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPriceOracleGetter } from "./IPriceOracleGetter";

export class IPriceOracleGetterFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceOracleGetter {
    return new Contract(address, _abi, signerOrProvider) as IPriceOracleGetter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getAssetPrice",
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
];
