import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game/game';

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
