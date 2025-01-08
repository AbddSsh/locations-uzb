// import { userSlice } from "@entities/user";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  // [userSlice.reducerPath]: userSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
