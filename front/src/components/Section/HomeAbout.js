import styled from "styled-components";
import { Button } from "../Items/Button";
import AboutImage from "../../assets/images/Frame 7918.svg";
import CoutIcon from "../../assets/images/Group.png";
import DelaiIcon from "../../assets/images/Layer 2.png";
import Send from "../../assets/icons/det.svg";
import DarkTypo from "../../constants/DarkTypo";
import Oval from "./../../assets/images/Oval.png";
import * as style from "../../constants/StyleSheets";
import Buttondetails from "../Items/buttondetails";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import step from "../../assets/icons/Group 7856.png";
import stept from "../../assets/icons/02.png";
import three from "../../assets/icons/03.png";
import foor from "../../assets/icons/04.png";

const HomeAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <AboutSection>
      {/* ------------------------------------------------------------------- */}
      <Content data-aos="zoom-in" data-aos-delay={100}>
        {" "}
        <ImgService>
          <img src={AboutImage} alt="" />
        </ImgService>
        <ContentService>
          <DarkTypo
            heading="À propos de nous"
            headingup="Efficacité, fiabilité 
        et commodité"
            description="  En matière de transport, Hezli est votre partenaire de
      confiance. Nous comprenons l'importance de solutions logistiques fiables,
      et c'est pourquoi nous privilégions l'efficacité, la fiabilité et la
      commodité dans tout ce que nous faisons. Grâce à une technologie de pointe
      et à une vaste expérience, nous offrons des services de transport
      transparents sur lesquels vous pouvez compter. Faites l'expérience de la
      tranquillité d'esprit en sachant que vos articles sont entre de bonnes
      mains avec Hezli."
          />

          <Btn>
            <Buttondetails icon={Send} Textbody="EN SAVOIR PLUS" />
          </Btn>
        </ContentService>{" "}
      </Content>
      {/* ------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------- */}
      <Bloc2>
        <Badge>
          <img src={CoutIcon} alt="Cout " className="img" />
          <Boxone data-aos="zoom-in">
            <Title>Coût abordable</Title>
            <Description_Box>
              Hezli propose des services de transport à un coût abordable.
            </Description_Box>
          </Boxone>
        </Badge>
        <Vr />
        <Badge>
          <img src={DelaiIcon} alt="Cout " className="img" />
          <Boxone data-aos="zoom-in">
            <Title>Délai de livraison</Title>
            <Description_Box>
              Hezli garantit une livraison à court terme pour vos besoins de
              transport.
            </Description_Box>
          </Boxone>
        </Badge>
      </Bloc2>
      {/* ------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------- */}{" "}
      <Middle>
        <Heading>ÉTAPES FACILES</Heading>
        <HeadingUp>Comment nous travaillons</HeadingUp>
        <Description>
          Contactez-nous via notre site Web ou calculez votre devis pour vos
          besoins de transport dans la section Obtenir un devis.
        </Description>
      </Middle>
      {/* ------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------- */}
      {/* <Box> */}
      {/* <BoxNumber>
            <span>01</span>
            <img src={Oval} alt="oval" className="yellow" />
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
        </Box> */}
      <SECTION data-aos="fade-left" data-aos-easing="ease-out-back">
        <StepCard>
          <Steps src={step} />
          <H1>COMMANDE</H1>
          <PAR>
            Passez facilement votre commande de transport en quelques clics.
          </PAR>
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
            Collecte d'articles rapide et soignée pour un transport sans faille.
          </PAR>
        </StepCard>
        <StepCard>
          <Steps src={foor} />
          <H1>SOYEZ HEUREUX</H1>
          <PAR>
            Ravi de notre service exceptionnel, dépassant vos besoins de
            transport.
          </PAR>
        </StepCard>
        <DIV>
          <PI>Veulent en savoir plus?</PI>
          <p> Apprendre encore plus</p>
        </DIV>
      </SECTION>
      {/* ------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------- */}
    </AboutSection>
  );
};

export default HomeAbout;

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
export const DIV = styled.div`
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  gap: 10px;
  @media (max-width: 744px) {
    font-size: 11px;
  }
`;
export const PI = styled.p`
  color: var(--body-text-1, #aaa);
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
export const SECTION = styled.section`
  width: 100%;
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
const AboutSection = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 744px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  padding: 50px 50px;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  position: "absolute";
  text-align: "center";
  margin-left: 20px;
  @media (max-width: 744px) {
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
  }
`;
const ImgService = styled.div`
  display: flex;

  border-radius: 32px;
  @media (max-width: 744px) {
    img {
      width: 80vw;
      margin-bottom: 60px;
    }
  }
`;
const Btn = styled.div`
  padding-top: 10px;
  padding-bottom: 90px;
  @media (max-width: 744px) {
    display: flex;
    align-self: center;
    margin-top: 20px;
  }
`;
const ContentService = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 40px;
  border-radius: 32px;
  @media (max-width: 744px) {
    padding: 0;
    width: 90%;
    justify-content: center;
    align-self: center;
    text-align: center;
  }
`;

const Bloc2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
  @media (max-width: 744px) {
    flex-direction: column;
  }
`;

const Badge = styled.section`
  width: 23%;
  display: flex;
  align-items: center;
  @media (max-width: 744px) {
    flex-direction: column;
    width: 100%;
  }
  .img {
    width: 45px;
    object-fit: contain;
  }
`;
const Boxone = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  @media (max-width: 744px) {
    padding-left: 0px;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  padding-top: 16px;
  color: #020111;

  display: flex;
  @media (max-width: 744px) {
    justify-content: center;
    display: flex;
    align-self: center;
  }
`;
export const Description_Box = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #666666;
  line-height: 30px;
  padding-top: 16px;
  @media (max-width: 744px) {
    text-align: center;
  }
`;
const Vr = styled.div`
  border-right: 1px solid #aaaaaa;
  height: 80px;
  margin-top: 30px;
  @media (max-width: 744px) {
    border: 1px solid #aaa;
    height: 1px;
    width: 140px;
    margin-top: 0px;
    justify-content: center;
    display: flex;
    align-self: center;
  }
`;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

const Bloc4 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 744px) {
    padding: 20;
  }
`;

const Box = styled.div`
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
    font-weight: 900;
    font-size: 42px;
    @media (max-width: 744px) {
      font-size: 35px;
    }
  }
`;

const Bloc5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  text-align: center;
  gap: 12px;
  span {
    color: ${(p) => p.theme.GRAY_TEXT_COLOR};
    font-weight: 300;
    opacity: 0.5;
  }
`;

export const HeadingUp = styled.div`
  font-weight: 900;
  font-size: 45px;

  color: #020111;
  padding-top: 12px;
  @media (max-width: 744px) {
    font-size: 20px;
    text-align: center;
  }
`;
export const Heading = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 155.56%;
  padding-top: 16px;
  color: #020111;
  padding-left: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 744px) {
    padding: 0;
    font-size: 14px;
  }
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #666666;
  line-height: 30px;
  padding-top: 16px;
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 744px) {
    text-align: center;
    line-height: 40px;
    width:100%;
    margin-bottom: 20px;
  }
`;
