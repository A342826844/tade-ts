import { createAction } from "@reduxjs/toolkit";
import { PriceUpdateData, TrikerUpdateData } from "../types";

export const userResetInfo = createAction("user/resetInfo");

export const symbolSetMarket = createAction<PriceUpdateData>("symbol/setMarket");

export const symbolSetMarketTriker = createAction<TrikerUpdateData>("symbol/setMarketTriker");

export const symbolSetRatesUSD = createAction<{
    rates: {BRL: number},
    date: string
}>("symbol/setRatesUSD");

export const userSetSSID = createAction<string>("user/setSsId");

