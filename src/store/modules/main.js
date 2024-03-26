import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false, // appHeader是否固定
      topAlpha: false, // appHeader是否透明
    },
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});

export const { changeHeaderConfigAction } = mainSlice.actions;

export default mainSlice.reducer;
