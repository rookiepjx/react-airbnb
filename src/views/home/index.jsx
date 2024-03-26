import { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/home-banner";
import HomeSection from "./components/home-section";
import HomeLongFor from "./components/home-longfor";
import { isEmptyObject } from "@/utils";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  /** 从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true })); // 设置header固定、透明
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣房源板块 */}
        {!isEmptyObject(discountInfo) && (
          <HomeSection infoData={discountInfo} col={3} hasTabs />
        )}
        {/* 推荐房源板块 */}
        {!isEmptyObject(recommendInfo) && (
          <HomeSection infoData={recommendInfo} col={3} hasTabs />
        )}
        {!isEmptyObject(longforInfo) && <HomeLongFor infoData={longforInfo} />}
        {/* 高性价比源板块 */}
        {!isEmptyObject(goodPriceInfo) && (
          <HomeSection infoData={goodPriceInfo} col={4} />
        )}
        {/* 高分房源板块 */}
        {!isEmptyObject(highScoreInfo) && (
          <HomeSection infoData={highScoreInfo} col={4} />
        )}
        {/* plus房源板块 */}
        {!isEmptyObject(plusInfo) && (
          <HomeSection infoData={plusInfo} footerName="plus" scroll />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
