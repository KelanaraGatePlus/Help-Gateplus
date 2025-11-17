"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { faqArticleAPI } from "../api/faqArticleAPI";

const rootReducer = combineReducers({
  [faqArticleAPI.reducerPath]: faqArticleAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      faqArticleAPI.middleware,
    ),
});

setupListeners(store.dispatch);
export default store;
