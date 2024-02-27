import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPreloaderActive: true
}

const preloaderStateSlice = createSlice({
  name: 'preloaderState',
  initialState,
  reducers: {
    preloaderStateSetted: (state, { payload: isPreloaderActive }: { payload: boolean }) => ({
      ...state, isPreloaderActive
    })
  }
})

export const { preloaderStateSetted } = preloaderStateSlice.actions;

export default preloaderStateSlice.reducer;
