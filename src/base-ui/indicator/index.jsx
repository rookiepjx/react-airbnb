import React, { memo, useRef, useEffect } from "react";

import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  // 处理指示器滚动逻辑
  useEffect(() => {
    // 1、获取当前选中的元素的元素偏移量、元素自身宽度
    const selectItem = contentRef.current.children[selectIndex];
    const itemOffset = selectItem.offsetLeft;
    const itemWidth = selectItem.clientWidth;
    // 2、获取滚动容器的占据的宽度、可滚动宽度
    const contentWidth = contentRef.current.clientWidth;
    const scrollWidth = contentRef.current.scrollWidth;
    // 3、计算滚动距离 公式：(元素偏移量+元素自身宽度*0.5)-容器宽度*0.5
    // console.log(itemOffset, itemWidth, contentWidth);
    let distance = itemOffset + itemWidth * 0.5 - contentWidth * 0.5;
    // console.log(distance);
    // 4、元素边界情况特殊处理（如果居中的话首尾宽度不足，则元素对其容器边界）
    if (distance < 0) distance = 0;
    const maxDistance = scrollWidth - contentWidth;
    if (distance > maxDistance) distance = maxDistance;
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="indicator-content" ref={contentRef}>
        {/* 指示器中展示什么内容由外部决定 */}
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {};

export default Indicator;
