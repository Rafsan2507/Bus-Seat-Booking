import { configureStore } from "@reduxjs/toolkit";
import { SeatSlice } from "./SeatSlice/SeatSlice";





export const store = configureStore({
  reducer: {
    seat : SeatSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;