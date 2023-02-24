import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { AppThunk, UserState } from "../types";
import { userResetInfo, userSetSSID } from "./action";

const initialState: UserState = {
  uid: 0,
  SSID: '',

};

// 获取用户信息 action
export const fetchUserInfoAsync =
  (): AppThunk => async (dispatch, getState) => {
    // const res = await fetchUserInfo();
    // if (Api.isSuccess(res)) {
    //   dispatch(setUserInfo(res.data));
    // }
  };


export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 设置用户信息 reducer
    setUserInfo: (state, { payload }) => {
      if (payload) {
        state.uid = payload.id;
        // state.userInfo = {
        //   ...payload,
        // };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userResetInfo, (state) => {
      // state.uid = initialState.uid;
      // state.userInfo = {
      //   ...initialState.userInfo,
      // };
      // state.SSID = '';
    })
    .addCase(userSetSSID, (state, { payload }) => {
      state.SSID = payload;
    })
  }
});

export const {
  setUserInfo,
} = userStore.actions;

export default userStore.reducer;

const persistConfig = {
  key: "user",
  storage: AsyncStorage,
  version: 1,
};

export const userPersistedReducer = persistReducer(
  persistConfig,
  userStore.reducer
);
