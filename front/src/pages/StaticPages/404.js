import Arrow from "./../../assets/icons/arrowdown.png";
import React from "react";
import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import Buttonobtenez from "../../components/Items/buttonobtenez";
import LightTypo from "../../constants/LightTypo";

const NotFound = () => (
  <Content>
    <ContentService>
      <Heading>404</Heading>
      <LightTypo
        headingup="Désolé, la page que vous recherchez est introuvable"
        description="Oops! La page que vous cherchez semble manquer. Nous nous excusons pour le
      dérangement. Veuillez revenir en arrière ou contacter notre équipe
      d'assistance pour obtenir de l'aide."
      />
      <Btn>
        <Buttonobtenez icon={Arrow} Textbody="Obtenez une estimation" />
      </Btn>
    </ContentService>
  </Content>
);

export default NotFound;

const Btn = styled.div`
  padding-top: 50px;
  padding-left: 40px;
  padding-bottom: 90px;
`;
export const Heading = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 400;
  font-size: 16px;
  padding-top: 16px;
  color: #ffd400;
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #25243a;
  justify-content: center;
  padding: 50px;
  width: 100%;
  height: calc(100vh - 100px);
`;

const ContentService = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  border-radius: 32px;
  text-align: center;
  align-items: center;
`;
