import React from "react";
import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import cote from "../../assets/icons/quote-left-solid.png";
import replace from "../../assets/icons/Replace with your image (1).png";

const Demagnegment = () => {
  return (
    <div>
      <Card>
        <Image src={cote}></Image>
        <TextSection
        // style={{ width: "408px" }}
        >
          <Paragraph>
            Je suis très satisfait des services car HEZLI est{" "}
          </Paragraph>
          <Para>la société de déménagement numéro 1</Para>
        </TextSection>
        <SECTION>
          <Img src={replace}></Img>
          <Title>Nom du clien</Title>
        </SECTION>
      </Card>
    </div>
  );
};

export default Demagnegment;

export const SECTION = styled.section`
  display: flex;
  gap: 20px;
  @media (max-width: 744px) {
    align-items: flex-start;
    align-self: start;
  }
`;

const TextSection = styled.section`
  @media (max-width: 744px) {
    width: 65vw;
  /* margin-left: -100px; */
  }
`;
export const Img = styled.img`
  @media (max-width: 744px) {
    width: 28px;
    height: 28px;
  }
`;
export const Card = styled.div`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding: 50px 20px;
  width: 560px;
  height: 570px;
  position: relative;
  gap: 90px;
  @media (max-width: 744px) {
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    /* padding-left: 170px; */
    line-height: 50px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 60px;
  position: absolute;
  top: -92px;
  left: 0;
  @media (max-width: 744px) {
    width: 40px;
    height: 40px;
    top: -80px;
  }
`;
export const Paragraph = styled.p`
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: white;
  margin-top: 30px;
  @media (max-width: 744px) {
    font-size: 20px;
    /* width: 70%; */
  }
`;
export const Para = styled.p`
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: ${(props) => props.theme.PRIMARY_COLOR};
  @media (max-width: 744px) {
    font-size: 20px;
    /* width: 70%; */
  }
`;

export const Title = styled.h6`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: #ffffff;
  @media (max-width: 744px) {
    font-size: 11px;
  }
`;
