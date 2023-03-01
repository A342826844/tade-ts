import { markets } from "@/constants/Symbol";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { AppThunk, SymbolState } from "../types";
import { symbolSetMarket, symbolSetMarketTriker, symbolSetRatesUSD, userSetSSID } from "./action";

export const initSymbolMap = () => {
  const symbolMap: any = {};
  markets.forEach(symbol => {
    symbolMap[symbol] = {
      symbol,
      price: 0,
      brlPrice: 0,
      change: 0,
      rate: 0
    }
  })

  return symbolMap;
}

const initialState: SymbolState = {
  marketMap: {},
  marketMapTriker: {},
  usdDate: '',
  rates: {
    BRL: 5.16,
  }
};

// 获取用户信息 action
export const fetchUserInfoAsync =
  (): AppThunk => async (dispatch, getState) => {
    // const res = await fetchUserInfo();
    // if (Api.isSuccess(res)) {
    //   dispatch(setUserInfo(res.data));
    // }
  };


export const symbolStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 设置用户信息 reducer
    setUserInfo: (state, { payload }) => {
      if (payload) {
        // state.uid = payload.id;
        // state.userInfo = {
        //   ...payload,
        // };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(symbolSetMarket, (state, { payload }) => {
      const symbol = payload.symbol.split('USDT')[0];
      state.marketMap[symbol] = {
        ...payload,
        symbol: symbol,
      }
    })
    .addCase(symbolSetMarketTriker, (state, { payload }) => {
      const symbol = payload.symbol.split('USDT')[0];
      state.marketMapTriker[symbol] = {
        ...payload,
        symbol: symbol,
      }
    })
    .addCase(symbolSetRatesUSD, (state, { payload }) => {
      state.rates = {
        ...payload.rates,
      }
      state.usdDate = payload.date;
    })
  }
});

export const {
  setUserInfo,
} = symbolStore.actions;

export default symbolStore.reducer;

const persistConfig = {
  key: "user",
  storage: AsyncStorage,
  version: 1,
};

export const symbolPersistedReducer = persistReducer(
  persistConfig,
  symbolStore.reducer
);
