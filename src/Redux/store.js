import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rocketReducer from './rocket/rocket';
import missionReducer from './mission/mission';

const rootReducer = combineReducers({
  rocket: rocketReducer,
  mission: missionReducer,

});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});
export const persistor = persistStore(store);
