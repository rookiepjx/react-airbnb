import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import { SectionWrapper } from "./style";

const HomeSection = memo((props) => {
  const { infoData, type, col = 4 } = props;
  return (
    <SectionWrapper>
      {/* 房源板块标题 */}
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      {/* 房源板块房间列表 */}
      <SectionRooms roomList={infoData.list} col={col} />
      {/* 底部查看更多 */}
      <SectionFooter />
    </SectionWrapper>
  );
});

HomeSection.propTypes = {
  infoData: PropTypes.object, // 房源数据
  type: PropTypes.string, // 房源类型
  col: PropTypes.number, // 每行展示房间列数
};

export default HomeSection;
