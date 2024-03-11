import { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./home-banner";
import { HomeWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

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
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
        <div className="good-price">
          <SectionHeader title={highScoreInfo.title} />
          <SectionRooms roomList={highScoreInfo.list} />
        </div>
        <div className="good-price">
          <SectionHeader title={discountInfo.title} />
          <SectionRooms roomList={discountInfo.list} />
        </div>
        <div className="good-price">
          <SectionHeader title={recommendInfo.title} />
          <SectionRooms roomList={recommendInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
