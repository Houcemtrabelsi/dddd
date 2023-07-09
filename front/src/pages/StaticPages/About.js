import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import Company from "../../components/Section/Company";
import Arrow from "./../../assets/images/arrowdown.png";


import AgentList from "../../components/Section/AgentList";
import back from "../../assets/images/background.png";
import replace from "../../assets/images/Replace with your image.png";
import Demagnegment from "../../components/Items/Demagnegment";
import Call from "../../components/Items/Call";
import Footer from "../../components/Section/Footer";
import Buttonobtenez from "../../components/Items/buttonobtenez";


export const Spacing = styled.div``;

const About = () => (
  <>
    <Sect>
      <img src={back} />
      <div className="opacity-background" style={{ position: "absolute" }}>
        <Title>L'HISTOIRE DE HEZLI</Title>
        <SideTitle>À propos de nous</SideTitle>
        <LastTitle>
          Fournir des services de transport exceptionnels à Djerba, en Tunisie.
          Des solutions logistiques fiableset efficaces adaptées à vos besoins{" "}
        </LastTitle>

        <Buttonobtenez icon={Arrow} Textbody="Obtenez une estimation" />
        <Call className="buttonobtenez" />
      </div>
    </Sect>
    <Company />
    <Sec>
      <img className="background-image" src={replace} />
      <Demagnegment />
    </Sec>
    <AgentList />
    <Footer />
  </>
);

export default About;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.PRIMARY_COLOR};
`;
export const SideTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 50px;
  color: white;
  @media (max-width: 744px) {
    font-size: 28px;
  }
`;
export const LastTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: white;
  width: 55%;
  text-align: center;
  line-height: 30px;
  margin-bottom: 40px;
  @media (max-width: 744px) {
    font-size: 14px;
    width: 80%;
    line-height: 24px;
  }
`;
const Sect = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 90px);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .opacity-background {
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(37, 36, 58, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* gap:70px; */
    line-height: 70px;
  }
  .buttonobtenez {
    img {
      width: 20px !important;
    }
  }
`;

const AboutHero = styled.div`
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(37, 36, 58, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 90px;
  gap:20px
`;

const Sec = styled.div`
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  margin-top: 50px;
  .background-image {
    object-fit: cover;
    width: 100%;
    @media (max-width: 744px) {
      height: 100vh;
    }
  }
  img {
    margin-bottom: 80px;
  }
  div {
    bottom: 2px;
    left: 0px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR};
    @media (max-width: 744px) {
      width: 300px;
      height: 480px;
    }
  }
`;
export const Image = styled.img`
  /* width: 100%; */
  /* width: 100vw;
 height: 100vh;
 background-image: url('../../assets/images/Replace with your image.png');
 background: rgba(37, 36, 58, 0.7); */
`;
