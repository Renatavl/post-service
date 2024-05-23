import { configureStore } from '@reduxjs/toolkit';

import type { EnhancedStore } from '@reduxjs/toolkit';
import { appReducer } from './app';

const createStore = () =>
  configureStore({
    reducer: {
      app: appReducer,
    },
  });

const store: EnhancedStore = createStore();

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export default store;
