import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import SectionTabs from "@/components/section-tabs";
import { SectionWrapper } from "./style";
import { useState, useCallback } from "react";

const HomeSection = memo((props) => {
  const { infoData, type, col = 4 } = props;

  /** 定义内部的state */
  const initialName = Object.keys(infoData.dest_list || {})[0];
  const [name, setName] = useState(initialName);
  const hasTabs = ["discount", "recommend"].includes(type);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  /** 事件处理函数 */
  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);

  return (
    <SectionWrapper>
      {/* 房源板块标题 */}
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      {/* 房源板块房间列表 */}
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms
        roomList={hasTabs ? infoData.dest_list?.[name] : infoData.list}
        col={col}
      />
      {/* 底部查看更多 */}
      <SectionFooter name={name} />
    </SectionWrapper>
  );
});

HomeSection.propTypes = {
  infoData: PropTypes.object, // 房源数据
  type: PropTypes.string, // 房源类型
  col: PropTypes.number, // 每行展示房间列数
};

export default HomeSection;
