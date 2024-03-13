import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0; // flex-shrink默认值为1，会被压缩，0不压缩
  box-sizing: border-box;
  /* 根据列数动态计算每列宽度 */
  width: ${(props) => `${100 / props.$col}%`};
  padding: 8px;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0; // 通过padding撑开高度，实现每张图片比例相同
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // 防止图片比例压缩
      cursor: pointer;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.$verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    /* 文本超出2行省略 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`;
