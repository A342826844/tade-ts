import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStore } from "../util";
import {
  fetchUserInfoAsync,
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
