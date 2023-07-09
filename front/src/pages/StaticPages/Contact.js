import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import contact from "../../assets/images/contact.png";
import Commencer from "../../components/Items/Commencer";
import phone from "../../assets/icons/Calling.png";
import message from "../../assets/icons/Message.png";
import loca from "../../assets/icons/Iconly.png";
import logo from "../../assets/icons/send 1.png";
import button from "../../assets/icons/button.transition.png";
import Send from "./../../assets/icons/sendTriangle.png";
import Arrow from "./../../assets/images/arrowdown.png";

import frame from "../../assets/icons/Frame 630.png";
import pathh from "../../assets/icons/Path (6).png";
import Buttondetails from "../../components/Items/buttondetails";
import Call from "../../components/Items/Call";
import LoginCard from "../../components/Items/LoginCard";
import Inpuut from "../../components/Items/Inpuut";
import Footer from "../../components/Section/Footer";
import Buttonobtenez from "../../components/Items/buttonobtenez";
const Contact = () => (
  <>
    <Sect>
      <img src={contact} />
      <ContactHero style={{ position: "absolute" }}>
        <Title> HEZLI CONTACT </Title>
        <SideTitle>Contactez-nous</SideTitle>
        <LastTitle>
          Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière
          de transport. Notre équipe amicale est prête à vous aider et à vous
          fournir des solutions personnalisées.
        </LastTitle>
        <Buttonobtenez icon={Arrow} Textbody="Obtenez une estimation" />
        <Call className="buttonobtenez" />
      </ContactHero>
      ){" "}
    </Sect>
    {/*
    <Buttonobtenez icon={Arrow} Textbody="Obtenez une estimation" />
    <section
      style={{
        display: "flex",
        gap: "190px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <section style={{ width: "35%" }}>
*/}
    <ContactForm>
      <section>
        <TI>Contactez-nous</TI>
        <PA>
          Contactez-nous directement, par téléphone ou remplissez le formulaire
          pour recevoir une consultation gratuite de notre personnel
          enthousiaste.
        </PA>

        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <IM src={phone}></IM>
            <Te>Numéro de téléphone</Te>
          </div>

          <NU>(216) 123 456 78</NU>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <IM src={message}></IM>
            <Te>Adresse email</Te>
          </div>
          <NU>Hezli@gmail.com</NU>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
            <IMa src={loca}></IMa>
            <Te>Adresse</Te>
          </div>
          <NU>Jerba ,Midoun...</NU>
        </div>
      </section>
      <section>
        <SEND>
          <img src={logo}></img>
          <TIR>SEND US MESSAGE </TIR>
        </SEND>

        <Inpuut />

        <div
          style={{
            marginTop: "50px",
            marginLeft: "5px",
            marginBottom: "90px",
          }}
        >
          <Buttondetails icon={Send} Textbody="Envoyer le message" />
        </div>
      </section>
    </ContactForm>
    <Sec>
      <Commencer />
    </Sec>
    <Footer />
  </>
);

export default Contact;

const Sect = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: calc(100vh - 90px);
    object-fit: cover;
  }
`;
export const SEND = styled.div`
  margin-bottom: 35px;
  display: flex;
  gap: 20px;
  margin-top: 22px;
  @media (max-width: 760px) {
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 30px;
  }
`;

const ContactHero = styled.div`
  top: 0;
  height: calc(100vh - 90px);
  width: 100%;
  background-color: rgba(20, 20, 40, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const Sec = styled.div``;
export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.PRIMARY_COLOR};
`;
export const SideTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 50px;
  color: white;
  @media (max-width: 760px) {
    font-size: 28px;
  }
`;
export const LastTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  width: 55%;
  text-align: center;
  line-height: 30px;
  @media (max-width: 760px) {
    font-size: 14px;
    width: 90%;
    line-height: 24px;
  }
`;

const ContactForm = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: space-between;
  margin-top: 50px;
  padding: 30px 80px;
  section:first-child {
    width: 45%;
    @media (max-width: 760px) {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    padding: 30px 20px;
    width: 100%;
  }
`;

export const TI = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 155.56%;
  color: #ffffff;
  @media (max-width: 760px) {
    font-size: 28px;
    text-align: center;
  }
`;
export const PA = styled.h1`
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #ffffff;
  @media (max-width: 760px) {
    text-align: center;
  }
`;
export const Te = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;
export const NU = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 155.56%;
  color: #ffffff;
`;
export const IM = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 6px;
`;
export const IMa = styled.img`
  width: 18px;
  height: 20px;
`;

export const Divder = styled.hr`
  width: 420px;
  height: 0px;
`;
export const TIR = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 155.56%;
  text-transform: uppercase;
  color: #ffffff;
  @media (max-width: 760px) {
    text-align: center;
  }
`;
export const Cor = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 80px;
  /* identical to box height, or 188% */

  letter-spacing: 0.03em;

  /* white */

  color: #ffffff;
`;
export const IO = styled.img`
  margin-top: 44px;
  margin-left: -31px;
`;
const Text = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  color: #020111;
  font-size: 14px;
  margin-left: -72px;
`;

export const Button404 = styled.button`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 700;
  font-size: 16px;
  color: #020111;
  background-color: #ffd400;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 12px;
  width: 360px;
  height: 55.14px;
  margin-top: 40px;
  .icon-arrow {
    width: 20px;
    height: 20px;
  }
`;

export const Fram = styled.img``;
export const YU = styled.h1`
  padding-top: 30px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffd400;
`;
export const JU = styled.img`
  width: 20px;
`;
