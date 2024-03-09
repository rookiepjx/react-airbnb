import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchGoodPrice",
  async () => {
    const res = await getHomeGoodPriceData();
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo: (state, { payload }) => {
      state.goodPriceInfo = payload;
    },
  },
  // RTK 2.0 中删除了 createReducer 和 createSlice.extraReducers 的 "object" 形式，而是采用回调函数形式
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAction.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        state.goodPriceInfo = payload;
      })
      .addCase(fetchHomeDataAction.rejected, (state, { error }) => {
        state.error = error;
      });
  },
});

export default homeSlice.reducer;
