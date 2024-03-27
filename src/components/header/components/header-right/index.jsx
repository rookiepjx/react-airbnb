import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  const [panelVisible, setPanelVisible] = useState(false);

  //   点击profile图标时显示，点击窗口时隐藏
  const showPanel = (e) => {
    // 由于添加了window点击事件监听器，此处需要
    // 方案1：阻止事件冒泡
    // 方案2：不阻止事件冒泡，window点击事件监听器设置第三个参数为true，即默认事件冒泡改为事件捕获
    e.stopPropagation();
    setPanelVisible(true);
  };

  useEffect(() => {
    const hidePanel = () => {
      setPanelVisible(false);
    };

    // 点击window时隐藏panel
    window.addEventListener("click", hidePanel);

    // 移除监听器
    return () => {
      window.removeEventListener("click", hidePanel);
    };
  }, []);

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={showPanel}>
        <IconMenu />
        <IconAvatar />

        {panelVisible && (
          <div className="panel">
            <div className="panel-top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="panel-bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
