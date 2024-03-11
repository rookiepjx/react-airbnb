import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapper } from "./style";

const HomeSection = memo((props) => {
  const { infoData } = props;
  return (
    <SectionWrapper>
      {/* 房源板块标题 */}
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      {/* 房源板块房间列表 */}
      <SectionRooms roomList={infoData.list} />
    </SectionWrapper>
  );
});

HomeSection.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSection;
