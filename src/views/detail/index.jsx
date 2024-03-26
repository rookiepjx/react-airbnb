import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import DetailInfos from "./c-cpns/detail-infos";
import DetailPictures from "./c-cpns/detail-pictures";
import { DetailWrapper } from "./style";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false })); // 设置header不固定、不透明
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;
