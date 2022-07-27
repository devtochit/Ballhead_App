import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/api.service';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
