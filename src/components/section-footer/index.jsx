import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;

  const text = name ? `显示更多${name}房源` : "显示全部";
  const navigate = useNavigate();

  // 点击更多跳转详情
  const moreClickHandle = () => {
    navigate("/entire");
  };

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{text}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
