import React from "react";

import styled from "styled-components";
import * as style from "./StyleSheets";

export const DarkTypo = ({ heading, headingup, description }) => {
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Title>{headingup}</Title>
      <Description>{description}</Description>
    </Section>
  );
};
export default DarkTypo;

const Section = styled.div`
  @media (max-width: 744px) {
    width: 100%;
   line-height: 40px;
  }
`;
const Icon = styled.img`
  width: 50px;
  
`;

const Heading = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 700;
  font-size: 20px;
  line-height: 155.56%;
  padding-top: 38px;
  padding-bottom: 20px;
  color: #020111;
  @media (max-width: 744px) {
    padding: 0px;
    font-size: 16px;
  }
`;
const Title = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 900;
  font-size: 45px;
  color: #020111;
  padding-bottom: 20px;
  @media (max-width: 744px) {
    padding: 0px;
    font-size: 24px;
  }
`;
const Description = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 400;
  font-size: 16px;
  color: #666666;
  line-height: 30px;
  @media (max-width: 744px) {
    font-size: 11px;
  }
`;
