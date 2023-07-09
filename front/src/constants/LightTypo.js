import React from "react";

import styled from "styled-components";
import * as style from "./StyleSheets";

export const LightTypo = ({ heading, headingup, description, icon, icons }) => {
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Title>{headingup}</Title>
      <Description>{description}</Description>

      <Icons src={icons} />
    </Section>
  );
};
export default LightTypo;

const Section = styled.div`
  @media (max-width: 744px) {
    width: 100%;
    line-height: 40px;
  }
`;
const Icon = styled.img`
  width: 50px;

`;

const Icons = styled.img`
  width: 150px;
  padding-top: 16px;
  @media (max-width: 744px) {
    width: 140px;
    padding-top: 0px;
  }
`;
const Heading = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 700;
  font-size: 20px;
  line-height: 155.56%;
  padding-top: 16px;
  color: #ffffff;
  @media (max-width: 744px) {
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
  }
`;
const Title = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 900;
  font-size: 45px;
  color: #ffffff;
  padding-top: 12px;
  @media (max-width: 744px) {
    font-size: 25px;
    text-align: center;
  }
`;
const Description = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  line-height: 30px;
  @media (max-width: 744px) {
    line-height: 40px;
    font-size: 14px;
    text-align: center;
  }
`;
