import styled, { css } from "styled-components";
import * as style from "../../constants/StyleSheets";

import React from "react";
import path from "../../assets/icons/Path 6.png";
const Commencer = ({ hasdessin = true }) => {
  return (
    <CommancerContainer>
      <CommencerSection>
        <div style={{ width: "40%", minWidth: 350 }}>
          <Footer> Commencer</Footer>
          <Paragraph>
            Inscrivez-vous sur notre site Web ou notre application et découvrez
            des solutions logistiques transparentes pour tous vos besoins de
            transport. Rejoignez Hezli aujourd'hui.
          </Paragraph>
        </div>
        {hasdessin && (
          <Image src={path} style={{ position: "absolute", top: -100 }} />
        )}
        <Button>Commencer</Button>
      </CommencerSection>
    </CommancerContainer>
  );
};

export default Commencer;

const CommancerContainer = styled.section`
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  background-color: white;
  width: 95%;
  border-radius: 35px;
  margin: 30px;
  padding: 80px;
  margin-right: 40px;
  @media (max-width: 744px) {
    margin: auto;
  }
`;

const CommencerSection = styled.section`
  width: 100%;
  background-color: white;
  width: 100%;
  border-radius: 35px;

  position: relative;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  @media (max-width: 744px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const Footer = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 155.56%;
  color: #020111;
  @media (max-width: 744px) {
    font-size: 25px;
    text-align: center;
  }
`;
export const Paragraph = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.01em;
  color: #666666;
  margin-top: 10px;
  @media (max-width: 744px) {
    font-size: 15px;
    text-align: center;
    padding: 20px;
  }
`;

export const Ligne = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 48px;
  color: #333333;
  text-align: left;
`;
export const Agent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: left;
`;
export const Button = styled.button`
  width: 170px;
  color: #020111;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  padding-left: 30px;
  border-radius: 15px;
  border-color: ${(props) => props.theme.PRIMARY_COLOR};
  padding: ${style.spacing.PADDING_SMALL} ${style.spacing.PADDING_LARGE};
  background-color: #ffd400;
  color: ${(props) => props.theme.BACKGROUND_COLOR};
  margin-bottom: 20px;

  border: none;
  &:hover {
    border-radius: 15px;
    border: 1px solid #ffd400;
    background-color: ${(props) =>
      props.variant !== "outline" ? "#25243A" : "#FFD400"};
    color: ${(props) => (props.variant !== "outline" ? "#FFD400" : "#25243A")};
  }
`;

export const Li = styled.h6`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #666666;
`;
export const Image = styled.img`
  position: absolute;
  width: 1000.01px;
  height: 328px;
  top: 952px;
  left: 10px;

  /* yellow main color */
`;
