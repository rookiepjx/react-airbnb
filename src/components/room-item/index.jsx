import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { Rating } from "@mui/material";
import { Carousel } from "antd";

import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const RoomItem = memo((props) => {
  const { itemData, col, itemClick } = props;
  const sliderRef = useRef();

  // 定义事件处理函数
  const itemClickHandle = () => {
    if (itemClick) itemClick(itemData);
  };

  const controlClickHandle = (e, isRight) => {
    // 调用轮播图组件方法切换上一张、下一张
    e.stopPropagation();
    const slider = sliderRef.current;
    isRight ? slider.next() : slider.prev();
  };

  // 根据返回数据结构决定展示单个图片还是图片轮播图
  // 1、图片元素
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  // 2、轮播图元素
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(e, false)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(e, true)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      $col={col}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureElement : sliderElement}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
