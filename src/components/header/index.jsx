import React, { memo, useState, useRef, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";

import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./components/header-left";
import HeaderCenter from "./components/header-center";
import HeaderRight from "./components/header-right";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = memo(() => {
  // 定义内部状态
  const [isSearch, setIsSearch] = useState(false);
  // 从redux获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动的监听
  const { scrollY } = useScrollPosition();

  const prevScrollY = useRef(0);
  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevScrollY.current = scrollY;
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离30
  if (isSearch && Math.abs(scrollY - prevScrollY.current) > 30)
    setIsSearch(false);

  // header设置为透明并且处于顶部
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            {/* isSearch用于切换组件及动画 */}
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>

        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default Header;
