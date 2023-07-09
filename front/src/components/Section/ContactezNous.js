import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import Send from "../../assets/icons/det.svg";
import LittleMap from "./LittleMap";
import map from "../../assets/images/Mapsicle Map.png";
import LightTypo from "../../constants/LightTypo";
import Buttondetails from "../Items/buttondetails";
import phone from "../../assets/images/tel.png";
import message from "../../assets/images/email.png";
import loca from "../../assets/images/fleche.png";

 import React, { useEffect } from "react";
 import AOS from "aos";
 import "aos/dist/aos.css";
         
const ContactezNous = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);
  return (
    <>
      <Content data-aos="zoom-in" data-aos-delay={300}>
        {" "}
        <ContentService>
          <LightTypo
            heading="CONTACT "
            headingup=" Contactez-nous"
            description="Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière
          de transport. Notre équipe amicale est prête à vous aider et à vous
          fournir des solutions personnalisées."
          />{" "}
          <Lineone>
            {" "}
            <img src={loca} className="icon-cercle" />
            <Description>Djerba, Houmt Souk</Description>
          </Lineone>
          <Lineone>
            {" "}
            <img src={phone} className="icon-cercle" />
            <Description> +216 12345678 </Description>
          </Lineone>{" "}
          <Lineone>
            <img src={message} className="icon-cercle" />
            <Description>Hezli@contact.com</Description>
          </Lineone>
         
        </ContentService>{" "}
        <ImgService data-aos="zoom-in">
          <img src={map} alt="" />
        </ImgService>
      </Content>
    </>
  );
};
export default ContactezNous;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 32px;
  padding-top: 78.45px;
  padding-bottom: 78.45px;
  @media (max-width: 744px) {
    padding-top: 38.45px;
    padding-bottom: 38.45px;
    flex-direction: column;
    gap: 30px;
  }
`;
const Lineone = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 744px) {
 margin-left: 30px;
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
  .icon-cercle {
    width: 40px;
    margin: 10px;
    object-fit: contain;
  }
`;
const ImgService = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  border-radius: 32px;
    @media (max-width: 744px) {
      flex-direction:column-reverse;
      width: 90%;
      height:100%;
  }
  


`;
const Description = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  line-height: 30px;
  padding:20px;
  @media (max-width: 744px) {
  line-height: 10px;
 
  }
`;

 
