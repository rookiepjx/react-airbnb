import React, { memo, useState } from "react";
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
              isSearch={isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isSearch} />
        </div>

        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default Header;
