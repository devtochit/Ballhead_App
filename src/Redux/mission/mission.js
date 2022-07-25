import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMissionData } from '../../services/api.service';

export const getMission = createAsyncThunk('job/getMission', getMissionData);

const initialState = {
  missions: [],
  isLoading: true,
};
export const MissionSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    missionUpdate: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.missions = action.payload;
    },
  },
  extraReducers: {
    [getMission.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [getMission.fulfilled]: (state, action) => {
      state.isLoading = false;// eslint-disable-line
      const item = action.payload;
      state.missions = item; // eslint-disable-line
    },
    [getMission.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
  },
});
export const { missionUpdate } = MissionSlice.actions;
export default MissionSlice.reducer;
