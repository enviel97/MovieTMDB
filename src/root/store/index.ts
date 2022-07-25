import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./reducer";
import rootApiMiddleware from "./api_middleware";

export const setUpStore = () => {
  const store = configureStore({
    reducer: rootReducer(),
    middleware: (gDM) => gDM().concat(...rootApiMiddleware()),
  });

  setupListeners(store.dispatch);
  return store;
};

const store = setUpStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
