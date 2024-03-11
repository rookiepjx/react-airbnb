import { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/home-banner";
import HomeSection from "./components/home-section";

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
        {/* 高性价比源板块 */}
        <HomeSection infoData={goodPriceInfo} />
        {/* 高分房源板块 */}
        <HomeSection infoData={highScoreInfo} />
        {/* 折扣房源板块 */}
        <HomeSection infoData={discountInfo} />
        {/* 推荐房源板块 */}
        <HomeSection infoData={recommendInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
