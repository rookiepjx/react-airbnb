import styled from "styled-components";

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`;
