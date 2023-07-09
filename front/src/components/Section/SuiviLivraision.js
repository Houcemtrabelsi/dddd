import styled from "styled-components";
import React, { useEffect } from "react";
import * as style from "../../constants/StyleSheets";

import Side from "../../assets/images/pic.png";
import Buttondetails from "../Items/buttondetails";

import Send from "../../assets/icons/det.svg";
import LightTypo from "../../constants/LightTypo";
import AOS from "aos";
import "aos/dist/aos.css";
const SuiviLivraision = () => {useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);
  return (
    <Content>
      {" "}
      <ContentService data-aos="zoom-in-up" data-aos-delay={200}>
        <LightTypo
          heading="PRESTATION SERVICE"
          headingup=" SUIVRE LES LIVRAISONS AVEC LA TECHNOLOGIE"
          description=" Restez informé grâce à l’application mobile et au site Web .
          
            Réservez votre voiture ou toktok sans effort via notre plateforme en
            ligne. Notre formulaire simple sur le site ou l’application vous
            permet de sécuriser votre réservation raidement."
        />
        <Btn>
          {" "}
          <Buttondetails icon={Send} Textbody="EN SAVOIR PLUS" />
        </Btn>
      </ContentService>{" "}
      <ImgService data-aos="fade-right" data-aos-delay={400}>
        <img src={Side} alt="" />
      </ImgService>
    </Content>

  );
};

export default SuiviLivraision;
const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 32px;
  padding-top: 78.45px;
  padding-bottom: 78.45px;
    @media (max-width: 744px) {
   flex-direction: column;
     padding-top: 0px;
  padding-bottom: 0px;
    
  }
  ;
`;
const ContentService = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 40px;
  border-radius: 32px;
    @media (max-width: 744px) {
    width: 100%;
    text-align: center;
    padding-left: 0px;
    padding: 10px;
    gap: 10px;
    line-height: 30px;
  }
`;
const Btn = styled.div`
  padding-top: 10px;

  padding-bottom: 90px;
  @media (max-width: 744px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
    padding-bottom: 40px;
  }
`;

const ImgService = styled.div`
  display: flex;
  border-radius: 32px;
  img {
    @media (max-width: 744px) {
      width: 300px;
      height: 300px;
      margin-bottom: 40px;
    }
  }
`;
