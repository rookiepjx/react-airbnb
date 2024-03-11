import { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/home-banner";
import HomeSection from "./components/home-section";
import { isEmptyObject } from "@/utils";

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
      }),
      shallowEqual
    );

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣房源板块 */}
        {!isEmptyObject(discountInfo) && (
          <HomeSection infoData={discountInfo} type="discount" col={3} />
        )}
        {/* 推荐房源板块 */}
        {!isEmptyObject(recommendInfo) && (
          <HomeSection infoData={recommendInfo} type="recommend" col={3} />
        )}
        {/* 高性价比源板块 */}
        {!isEmptyObject(goodPriceInfo) && (
          <HomeSection infoData={goodPriceInfo} type="goodPrice" col={4} />
        )}
        {/* 高分房源板块 */}
        {!isEmptyObject(highScoreInfo) && (
          <HomeSection infoData={highScoreInfo} type="highScore" col={4} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
