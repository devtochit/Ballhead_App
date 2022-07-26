import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGameData } from '../../services/api.service';


export const getGame = createAsyncThunk('job/getGame', getGameData)

const initialState = {
  games: [],
  isLoading: true,
}
export const gameSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [getGame.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [getGame.fulfilled]: (state, action) => {
      state.isLoading = false;// eslint-disable-line
      const item = action.payload;
      state.games = item; // eslint-disable-line
    },
    [getGame.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
  }
})
export default gameSlice.reducer;


