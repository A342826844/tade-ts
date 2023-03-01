import dayjs from 'dayjs';
import { PriceUpdate } from '@/state/types';
import { closeMarkPrice, closeMarkTriker, startMarkPrice, wsClient } from "@/api/balance";
import useDebounce from "@/hooks/useDebounce";
import React from "react";
import { useCallback, useEffect } from "react";
import throttle from 'lodash/throttle'
import { useDispatch } from "react-redux";
import { useStore } from "../util";
import { symbolSetMarket, symbolSetMarketTriker, symbolSetRatesUSD } from "./action";
import {
  fetchUserInfoAsync, initSymbolMap,
} from "./reducer";

// 获取用户信息 hook
export const useFetchUserInfo = () => {
  const dispatch = useDispatch();
  const { uid } = useStore((p) => p.user);

  const fetch = useCallback(() => {
    return dispatch(fetchUserInfoAsync());
  }, [uid]);

  useEffect(() => {
    fetch();
  }, [fetch]);
  return fetch;
};

export const useSubscribeMarkPrice = () => {
  const dispatch = useDispatch();
    
  const onMarkChange = React.useCallback((data: any) => {

    if (data.eventType === '24hrTicker') {
      dispatch(symbolSetMarketTriker(data));
    }
  }, [])

  const onThrottleMarkChange = React.useMemo(() => throttle(onMarkChange, 1000), [onMarkChange])

  React.useEffect(() => {
    startMarkPrice();
    wsClient.on('formattedMessage', onThrottleMarkChange);
    return () => {
      wsClient.off('formattedMessage', onThrottleMarkChange);
      closeMarkPrice();
      closeMarkTriker()
    }
  }, [])
}

export const useMarketList = () => {
  const marketMap = useStore((p) => p.symbol.marketMap);
  const marketMapTriker = useStore((p) => p.symbol.marketMapTriker);

  // const markDebounce = useDebounce(marketMap, 500);
  // const trikerDebounce = useDebounce(marketMapTriker, 500);

  return React.useMemo(() => {

    const price: any = initSymbolMap();
    Object.keys(price).forEach(key => {
      price[key] = {
        ...marketMapTriker[key],
        ...price[key],
      }
    })
    return Object.values(price) as PriceUpdate[];
  }, [marketMap, marketMapTriker])
}

const date = dayjs().format('YYYY-MM-DD');

export const useFetchUSD = () => {

  const dispatch = useDispatch();

  const usdDate = useStore((p) => p.symbol.usdDate);

  const fetchLatestUSD = React.useCallback(async () => {
    const jsonRes = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const res = await jsonRes.json();
    if (res && res.rates && res.rates.BRL) {
      dispatch(symbolSetRatesUSD({
        date,
        rates: res.rates,
      }));
    }
  }, [])

  React.useEffect(() => {
    if (date !== usdDate) {
      fetchLatestUSD();
    }
  }, [])
}