import PropTypes from "prop-types";
import React, { memo } from "react";
import { useState, useCallback } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionTabs from "@/components/section-tabs";
import { SectionWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

const HomeSection = memo((props) => {
  const { infoData, col = 4, hasTabs, footerName, scroll } = props;

  /** 定义内部的state */
  const initialName = Object.keys(infoData.dest_list || {})[0];
  const [name, setName] = useState(initialName);
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
      {hasTabs && <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />}
      {scroll ? (
        <div className="room-list">
          <ScrollView>
            {infoData.list.map((item) => {
              return <RoomItem itemData={item} key={item.id} col={5} />;
            })}
          </ScrollView>
        </div>
      ) : (
        <SectionRooms
          roomList={hasTabs ? infoData.dest_list?.[name] : infoData.list}
          col={col}
        />
      )}

      {/* 底部查看更多 */}
      <SectionFooter name={name || footerName} />
    </SectionWrapper>
  );
});

HomeSection.propTypes = {
  infoData: PropTypes.object, // 房源数据
  col: PropTypes.number, // 每行展示房间列数
  hasTabs: PropTypes.bool, // 是否显示房源tabs
  footerName: PropTypes.string, // footer名称
  scroll: PropTypes.bool, // 是否使用scroll-view组件
};

export default HomeSection;
