import React, { memo, useState } from "react";
import { useSelector } from "react-redux";

import { PicturesWrapper } from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);
  const [index, setIndex] = useState(0);

  /** redux获取数据 */
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  const toggleBrowserVisible = (show = true, index = 0) => {
    setShowBrowser(show);
    setIndex(index);
  };

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => toggleBrowserVisible(true, 0)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item, index) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => toggleBrowserVisible(true, index + 1)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
        <div className="show-btn" onClick={(e) => toggleBrowserVisible(true)}>
          显示照片
        </div>
        {showBrowser && (
          <PictureBrowser
            pictureUrls={detailInfo.picture_urls}
            closeClick={(e) => toggleBrowserVisible(false)}
            index={index}
          />
        )}
      </div>
    </PicturesWrapper>
  );
});

export default DetailPictures;
