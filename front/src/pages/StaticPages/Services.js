// ======================================== Mariem

import Oval from "./../../assets/images/Oval.png";

import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import back from "../../assets/images/background (3).png";
import Arrow from "./../../assets/icons/arrowdown.png";
import AboutServices from "../../components/Section/AboutServices";
import PreServices from "../../components/Section/PreService";
import SuiviLivraision from "../../components/Section/SuiviLivraision";
import step from "../../assets/icons/Group 7856.png";
import stept from "../../assets/icons/02.png";
import three from "../../assets/icons/03.png";
import foor from "../../assets/icons/04.png";
import Buttonobtenez from "../../components/Items/buttonobtenez";
import Call from "../../components/Items/Call";
import Footer from "../../components/Section/Footer";

import LightTypo from "../../constants/LightTypo";

import Side from "../../assets/images/pic.png";
import Buttondetails from "../../components/Items/buttondetails";

const Services = () => (
  <>
    <Sect>
      <img src={back} loading="lazy" />
      <div className="opacity-background" style={{ position: "absolute" }}>
        <Title>SERVICES HEZLI</Title>
        <SideTitle>Nos services</SideTitle>
        <LastTitle>
          Fournir des services de transport exceptionnels à Djerba, en Tunisie.
          Des solutions logistiques fiableset efficaces adaptées à vos besoins{" "}
        </LastTitle>
        <Buttonobtenez icon={Arrow} Textbody="Obtenez une estimation" />
        <Call className="buttonobtenez" />
      </div>
    </Sect>

    <AboutServices />

    <GridContainer>
      <ContentService>
        <Heading> ÉTAPES FACILES </Heading>
      </ContentService>
      <HeadingUpService>Comment nous travaillons</HeadingUpService>
      <DescriptionService>
        Contactez-nous via notre site web ou calculez votre devis pour vos
        besoins de transport dans la section Obtenir un devis.
      </DescriptionService>
      <Step>
        <StepCard>
          <Steps src={step} />
          <H1>COMMANDE</H1>
          <PAR>Passez votre commande de transport en quelques clics.</PAR>
        </StepCard>
        <StepCard>
          <Steps src={stept} />
          <H1>LIVRER</H1>
          <PAR>
            Faites confiance à notre équipe efficace et fiable pour une
            livraison sécurisée et rapide.
          </PAR>
        </StepCard>
        <StepCard>
          <Steps src={three} />
          <H1>RAMASSER</H1>
          <PAR>
            Collete rapide et minutieuse des articles pour transort fluide.
          </PAR>
        </StepCard>
        <StepCard>
          <Steps src={foor} />
          <H1>SOYEZ HEUREUX</H1>
          <PAR>
            Ravi de notre service exeptionnel, dépassant vos besoins de
            transport.
          </PAR>
        </StepCard>
      </Step>
      <DIV>
        <PI>Veulent en savoir plus?</PI>
        <p> Apprendre encore plus</p>
      </DIV>

      {/*       <Box>
          <BoxNumber>
            <span>01</span>
            <img src={Oval} alt="oval" />
          </BoxNumber>
          <div>
            <Heading>COMMAND</Heading>
            <Description>
              {" "}
              Passez facilement votre commande de transport en quelques clics.
            </Description>
          </div>
        </Box>

        <Box>
          <BoxNumber class="icon">
            <img src={Oval} alt="" />
            <span className="number">02</span>
          </BoxNumber>
          <div>
            <Heading>LIVRER</Heading>
            <Description>
              {" "}
              Faites confiance à notre équipe efficace et fiable pour une
              livraison sécurisée et rapide.
            </Description>
          </div>
        </Box>
        <Box>
          <BoxNumber class="icon">
            <img src={Oval} alt="" />
            <span className="number">03</span>
          </BoxNumber>
          <div>
            <Heading>RAMASSER</Heading>
            <Description>
              Collecte d'articles rapide et soignée pour un transport sans
              faille.
            </Description>
          </div>
        </Box>
        <Box>
          <BoxNumber class="icon">
            <img src={Oval} alt="" />
            <span className="number">04</span>
          </BoxNumber>
          <div>
            <Heading>SOYEZ HEUREUX</Heading>
            <Description>
              {" "}
              Ravi de notre service exceptionnel, dépassant vos besoins de
              transport.
            </Description>
          </div>
        </Box>
      </Bloc4>*/}
      <ContentServiceContainer>
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
        </ContentService>{" "}
        <ImgService data-aos="fade-right" data-aos-delay={400}>
          <img src={Side} alt="" />
        </ImgService>
      </ContentServiceContainer>
      <PreServices />
      <Footer />
    </GridContainer>
  </>
);

export default Services;

const ContentServiceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 32px;
  padding-top: 78.45px;
  padding-bottom: 78.45px;
  @media (max-width: 744px) {
    display: none;
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const ImgService = styled.div`
  display: flex;

  border-radius: 32px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  border-radius: 32px;

  padding-bottom: 78.45px;
`;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;
export const HeadingUp = styled.div`
  font-weight: 900;
  font-size: 45px;
  align-items: center;
  justify-content: center;
  color: #020111;
  padding-top: 12px;
  color: #ffffff;
`;

const Sect = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 90px);
  img {
    width: 100%;
    height: 100%;
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
const Sec = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
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
  }
`;
export const Image = styled.img``;
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

const ContentService = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 40px;
  border-radius: 32px;
`;

const Heading = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 700;
  font-size: 20px;
  line-height: 155.56%;
  padding-top: 16px;
  color: white;
  text-align: center;
  @media (max-width: 744px) {
    font-size: 13px;
    align-self: start;
    margin-bottom: 10px;
  }
`;
const HeadingUpService = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 900;
  font-size: 45px;
  text-align: center;
  padding-top: 12px;
  color: white;
  @media (max-width: 744px) {
    font-size: 20px;
    padding-top: 0;
  }
`;
const DescriptionService = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 400;
  font-size: 16px;
  color: white;
  line-height: 30px;
  padding-top: 20px;
  width: 40%;
  text-align: center;
  padding-bottom: 50px;
  @media (max-width: 744px) {
    font-size: 12px;
    width: 90%;
    line-height: 40px;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.PRIMARY_COLOR};
`;
export const SideTitle = styled.h1`
  font-family: "Inter", sans-serif;
  /* margin-top: 10px; */
  font-weight: 1000;
  font-size: 50px;
  color: white;
  @media (max-width: 744px) {
    font-size: 28px;
  }
`;

export const LastTitle = styled.h1`
  font-family: "Inter", sans-serif;
  /* margin-top: 10px; */
  font-weight: 400;
  font-size: 20px;
  color: white;
  width: 55%;
  text-align: center;
  line-height: 30px;
  margin-bottom: 70px;
  @media (max-width: 744px) {
    font-size: 14px;
    width: 90%;
    line-height: 24px;
  }
`;
export const Spacing = styled.div``;
export const PAR = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #aaaaaa;
  @media (max-width: 744px) {
    font-size: 10px;
    line-height: 20px;
  }
`;
export const Step = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;
  gap: 44px;
  margin-bottom: 60px;
  /* margin-top: 40px; */
  @media (max-width: 744px) {
    gap: 30px;
    padding: 5px;
  }
`;
const H1 = styled.h1`
  @media (max-width: 744px) {
    font-size: 10px;
  }
`;
const StepCard = styled.div`
  width: 20%;
  max-width: 300px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 744px) {
    width: 40%;
    gap: 20px;
  }
`;

export const Steps = styled.img`
  width: 90px;
  height: 90px;
  @media (max-width: 744px) {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }
`;

const Bloc4 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

const Box = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18%;
  text-align: center;
`;

const BoxNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  span {
    position: absolute;

    font-size: 35px;
    font-weight: 900;
    font-size: 42px;
  }
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  line-height: 30px;
  padding-top: 16px;

  align-items: center;
  justify-content: center;
`;
export const DIV = styled.div`
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: none;
  gap: 10px;
  @media (max-width: 744px) {
    display: flex;
    font-size: 11px;
    padding-bottom: 40px;
  }
`;
export const PI = styled.p`
  color: var(--body-text-1, #aaa);
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
