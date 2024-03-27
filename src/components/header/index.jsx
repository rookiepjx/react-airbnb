import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./components/header-left";
import HeaderCenter from "./components/header-center";
import HeaderRight from "./components/header-right";

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
  const { isFixed } = headerConfig;

  return (
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
  );
});

export default Header;
