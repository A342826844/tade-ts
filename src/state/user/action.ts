import { createAction } from "@reduxjs/toolkit";

export const userResetInfo = createAction("user/resetInfo");

export const userSetSSID = createAction<string>("user/setSsId");
