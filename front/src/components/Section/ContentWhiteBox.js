import React from "react";
import styled from "styled-components";

const ContentWhiteBox = ({ children }) => {
  return <RoundedWhiteBox>{children}</RoundedWhiteBox>;
};

export default ContentWhiteBox;

export const RoundedWhiteBox = styled.div`
  width: 97vw;
  overflow: hidden;
  margin-inline: auto;
  border-radius: 20px;
  min-height: 100px;
  border-radius: 20px;
  border: 1px solid white;
  background-color: white;
  color: ${(p) => p.theme.BACKGROUND_COLOR};
  @media (max-width: 744px) {
    border-radius: 0 0 20px 20px;
    width: 97%;
    overflow: visible;
  }
`;
