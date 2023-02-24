import { ThunkAction } from "redux-thunk";
import { AnyAction, EnhancedStore } from "@reduxjs/toolkit";
import type {} from "redux-thunk/extend-redux";
import { PersistPartial } from "redux-persist/es/persistReducer";

type address = string;

export enum FetchStatus {
  NOT_FETCHED = "not-fetched",
  SUCCESS = "success",
  FAILED = "failed",
  PENDING = "pending",
  DATA_END = "dataEnd",
  REFRESH = "refresh",
}


export enum NftMarketOrderStatus {
  PAY_PENDING = 1, // 支付中
  PAY_OVERTIME = 2, // 支超时
  COMPLETE = 3, // 完成
  CANCEL = 4, // 取消
}

export interface UserState {
  uid: number;
  SSID: string;
}


export interface SymbolInfo {
  symbol: string,
  price: number,
  brlPrice: number,
  change: number,
  rate: number,
}

export interface TrikerUpdateData {
  baseAssetVolume: 4873872.956,
  closeQuantity: 0.006,
  closeTime: 1675842490425,
  currentClose: 1676.02,
  eventTime: number,
  firstTradeId: 2681199800,
  high: 1699,
  lastTradeId: 2684098402,
  low: 1623.72,
  open: 1631.66,
  openTime: 1675756080000,
  priceChange: 44.36,
  priceChangePercent: 2.719,
  quoteAssetVolume: 8071700332.71,
  symbol: string,
  trades: 2898587,
  weightedAveragePrice: 1656.12,
  wsKey: "usdm_ticker_ethusdt_",
  wsMarket: "usdm",
}

export interface PriceUpdateData {
  symbol: string,
  eventTime: number,
  eventType: string,
  fundingRate: 0.0001,
  indexPrice: 23206.99471411,
  markPrice: 23199.10286095,
  nextFundingTime: 1675872000000,
  settlePriceEstimate: 23217.92273832,
}

export type PriceUpdate = PriceUpdateData & TrikerUpdateData;

export interface SymbolState {
  marketMap: {
    [symbol: string]: PriceUpdateData;
  },
  marketMapTriker: {
    [symbol: string]: TrikerUpdateData;
  },
  usdDate: string,
  rates: {
    BRL: number;
  }
}

export interface State {
  user: UserState;
  symbol: SymbolState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AnyAction
>;

export type Store = EnhancedStore<{
  user: UserState & PersistPartial;
}, AnyAction, any>

