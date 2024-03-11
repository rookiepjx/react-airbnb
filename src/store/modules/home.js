import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
} from "@/services";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    // 高性价比房源
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    // 高分房源
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    // // 折扣房源
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    // 推荐房源
    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });
  }
);

// createSlice的返回值中包含自动生成切片reducer和相应的actions
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
  },
  reducers: {
    // RTK的reducers为对象,相当于redux的reducer函数
    // 每一个函数类似于redux的reducer函数中的一个case语句
    changeGoodPriceInfoAction: (state, { payload }) => {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
  },
  // RTK 2.0 中删除了 createReducer 和 createSlice.extraReducers 的 "object" 形式，而是采用回调函数形式
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchHomeDataAction.pending, (state) => {
  //       state.error = null;
  //     })
  //     .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //       state.goodPriceInfo = payload;
  //     })
  //     .addCase(fetchHomeDataAction.rejected, (state, { error }) => {
  //       state.error = error;
  //     });
  // },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
