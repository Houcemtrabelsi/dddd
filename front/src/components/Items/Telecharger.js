import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Side from "../../assets//images/Bitmap.png";
import google from "../../assets/icons/—ÎÓÈ_1.png";
import app from "../../assets/icons/—ÎÓÈ_1 (1).png";
import LightTypo from "../../constants/LightTypo";
const Telecharger = () =>  {
  useEffect(() => {
    AOS.init({
      duration:1000,
    });
  }, []);
  return (
    <>
      <Content data-aos="zoom-in" data-aos-delay={300}>
        {" "}
        <ImgService>
          <img src={Side} alt="" />
        </ImgService>
        <ContentService>
          <LightTypo
            heading="TÉLÉCHARGER "
            headingup=" Téléchargez notre application"
            description="Simplifiez votre expérience de transport avec l'application Hezli. Réservez, suivez et gérez les livraisons sans effort. Commencez dès maintenant et profitez d'une logistique transparente à portée de main."
          />{" "}
          <Download>
            <LightTypo icons={google} />
            <LightTypo icons={app} />
          </Download>
        </ContentService>{" "}
      </Content>
    </>
  );
};

export default Telecharger;
const Content = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  border-radius: 32px;
  padding-top: 78.45px;
  padding-bottom: 78.45px;
  @media (max-width: 744px) {
    padding-top: 0px;
    padding-bottom: 28.45px;
    flex-direction: column-reverse;
    margin:20px
  }
`;

const Download = styled.div`
  display: flex;

  justify-content: space-around;
  
  flex-direction: row;
    @media (max-width: 744px) {
     justify-content: space-between;
     gap:24px;
     margin-bottom: 25px;
     margin-top: -16px;
  }
`;

const ContentService = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 32px;
    @media (max-width: 744px) {
width: 100%;

  }
  
`;
const ImgService = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  border-radius: 32px;
  text-align: "center";
  @media (max-width: 744px) {
      flex-direction: column-reverse;
    width: 100%;
  }
`;


