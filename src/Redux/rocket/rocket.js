import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRocketData } from '../../services/api.service';

export const getRockets = createAsyncThunk('job/getRockets', getRocketData);

const initialState = {
  rockets: [],
  isLoading: true,
};
export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    updateReserved: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.rockets = action.payload;
      return state;
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;// eslint-disable-line
      const item = action.payload;
      state.rockets = item; // eslint-disable-line
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
  },
});
export const { updateReserved } = rocketSlice.actions;
export default rocketSlice.reducer;
