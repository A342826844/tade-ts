import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
export { useStore } from "./util";
import { userPersistedReducer } from "./user/reducer";
import { symbolPersistedReducer } from "./symbol/reducer";
// const persistConfig = {
//   key: 'user',
//   storage: AsyncStorage,
//   version: 1,
// }

// const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: {
    user: userPersistedReducer,
    symbol: symbolPersistedReducer,
  },
  middleware: (
    getDefaultMiddleware: (arg0: {
      serializableCheck: {
        ignoredActions: (
          | "persist/FLUSH"
          | "persist/REHYDRATE"
          | "persist/PAUSE"
          | "persist/PERSIST"
          | "persist/PURGE"
          | "persist/REGISTER"
        )[];
      };
    }) => any
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const storeAction = {};

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
