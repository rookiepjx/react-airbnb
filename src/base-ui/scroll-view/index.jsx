import PropTypes from "prop-types";
import React, { memo, useRef, useState, useEffect } from "react";

import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  // 定义组件内状态
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const scrollContentRef = useRef();
  const [posIndex, setPosIndex] = useState(0); // 当前下标
  const distanceRef = useRef(0); // 滚动区域比元素超出的宽度

  // 组件渲染完成，判断是否显示右侧的按钮
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 滚动内容可滚动区域占据的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 滚动内容占据的宽度
    const distance = scrollWidth - clientWidth; // 滚动区域比元素超出的宽度
    distanceRef.current = distance;
    setShowRight(distance > 0);
  }, [props.children]);

  // 处理按钮点击事件
  const handleScroll = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newOffsetLeft =
      scrollContentRef.current.children[newIndex].offsetLeft; // 当前元素左上角相对于父级定位元素的偏移量
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`; // transform实现位移
    setPosIndex(newIndex);
    setShowLeft(newOffsetLeft > 0); // 偏移量大于0，说明当前不是第一个元素
    setShowRight(distanceRef.current > newOffsetLeft); // distance超出偏移量，说明滚动到最后一个元素了
  };

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => handleScroll(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => handleScroll(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
