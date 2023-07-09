
import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import React, { useEffect } from "react";
import Logo_one from "./../../assets/icons/carrefour.png";
import Logo_two from "./../../assets/icons/decathlon.png";
import Logo_three from "./../../assets/icons/geant.png";
import Logo_four from "./../../assets/icons/bricola.png";
import Truck from "./../../assets/icons/truck.png";
import Sofa from "./../../assets/icons/sofa.png";
import Cog from "./../../assets/icons/cog.png";
import Black from "./../../assets/icons/box.png";
import White from "./../../assets/icons/house.png";
import Building from "./../../assets/icons/building.png";

import GridHezli from "./GridHezli";
import AOS from "aos";
import "aos/dist/aos.css";
const ExelentService = () => {
  useEffect(() => {
     AOS.init({
       duration: 1000,
     });
  }, []);
  return (
    <Content>
      <Middle>
        <Heading>PRESTATIONS DE SERVICE</Heading>
        <HeadingUp>Fournir un excellent service</HeadingUp>
        <Description>
          Faites l'expérience d'un service exceptionnel avec Hizli - livraisons
          rapides, assistance attentive et tranquillité d'esprit.
        </Description>
      </Middle>
      <GridContainer
        containerwidth="100%"
        containerpadding="0px"
        justify="center"
      >
        <GridItem>
          <img src={Truck} />
          <HeadingBox>Livraison en magasin </HeadingBox>{" "}
          <DescriptionBox>
            Livraison rationalisée en magasin pour une logistique efficace
          </DescriptionBox>
        </GridItem>
        <GridItem>
          <img src={Sofa} />
          <HeadingBox>Petits mouvements</HeadingBox>{" "}
          <DescriptionBox>
            La solution idéale pour déplacer facilement un ou plusieurs objets
          </DescriptionBox>
        </GridItem>
        <GridItem>
          <img src={Cog} />
          <HeadingBox>Chargement déchargement</HeadingBox>{" "}
          <DescriptionBox>
            Nous sommes là pour vous aider à charger et décharger vos colis.
          </DescriptionBox>
        </GridItem>
        <GridItem>
          <img src={Black} />
          <HeadingBox>Mouvements de main-d'œuvre uniquement</HeadingBox>{" "}
          <DescriptionBox>
            Ne lève pas le petit doigt. nous déplacerons vos meubles et autres
            objets plus volumineux.
          </DescriptionBox>
        </GridItem>
        <GridItem>
          <img src={White} />
          <HeadingBox>Déménagements d'appartements </HeadingBox>{" "}
          <DescriptionBox>
            Faites déménager votre appartement sans stress grâce à nos services
            de déménagement fiables.
          </DescriptionBox>
        </GridItem>
        <GridItem>
          <img src={Building} />
          <HeadingBox>Déménagement de bureau</HeadingBox>{" "}
          <DescriptionBox>
            Déménagez votre bureau sans stress grâce à nos services de
            déménagement fiables.
          </DescriptionBox>
        </GridItem>
      </GridContainer>
      <HeadingUpPartner data-aos="zoom-in">
        Ils nous faisaient confiance
      </HeadingUpPartner>
      <Partners>
        <PartnersLogo data-aos="fade-left" data-aos-delay={200}>
          <PartnersImg>
            <Image src={Logo_one} alt="" />
          </PartnersImg>
          <PartnersImg>
            <Image src={Logo_two} alt="" />
          </PartnersImg>
          <PartnersImg>
            <Image src={Logo_three} alt="" />
          </PartnersImg>
          <PartnersImg>
            <Image src={Logo_four} alt="" />
          </PartnersImg>
        </PartnersLogo>
      </Partners>{" "}
      <Hr></Hr>
      <Bulletin>
        <Section>
          <HeadingBulletin>Bulletin </HeadingBulletin>
          <DescriptionBox>Abonnez-vous à notre newsletter</DescriptionBox>
        </Section>
        <Address>
          <InputAddress
            name="number"
            type="text"
            className="input"
            placeholder="Votre e-mail"
          />
          <SubmitButton>Envoyer</SubmitButton>
        </Address>
      </Bulletin>
    </Content>
  );
};
export default ExelentService;

const Blocone = styled.div`
  width: 40%;
`;


const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 50px 50px;
  background-color: white;
  width: 96%;
  height: 100%;
  border-radius: 32px;
 
  margin-inline: auto;
        @media (max-width: 744px) {
  text-align: center;
      padding: 20px;
  }
`;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Heading = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 155.56%;
  padding-top: 16px;
  color: #020111;
     

  text-align: center;
  justify-content: center;
  display: flex;
   @media (max-width: 744px) {
  font-size: 14px;
    
  }
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #666666;
  line-height: 30px;
  padding-top: 16px;
  padding-bottom: 50px;
  width: 65%;
  text-align: center;
  @media (max-width: 744px) {
    font-size: 14px;
    width: 100%;
  }
`;
export const HeadingUp = styled.div`
  font-weight: 900;
  font-size: 45px;

  color: #020111;
  padding-top: 12px;
  color: #020111;
  text-align: center;
        @media (max-width: 744px) {
  font-size: 24px;
    
  }
`;
const Hr = styled.div`
  width: 80%;

  @media (max-width: 744px) {
      display:none;
  }
`;

const HeadingUpPartner = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 900;
  font-size: 45px;
  text-align: center;
  padding-top: 100px;
  color: #020111;
    @media (max-width: 744px) {
    font-size: 30px;
    line-height: 40px;
     padding-top: 50px;
  }
`;
const Partners = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 100px;
  @media (max-width: 744px) {
   display: flex;
   justify-content: center;
   align-items: center;
flex-direction:column-reverse;
  }
`;
const PartnersLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 744px) {
    flex-direction: row-reverse;
    width: 80%;
    gap: 40px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;
const PartnersImg = styled.div`
  padding: 50px 100px 0px 0px;
  justify-content: space-between;
  @media (max-width: 744px) {
    padding: 0px;
    justify-content: center;
  }
`;
const Bulletin = styled.div`
  display: flex;
  padding: 50px;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  /* border-top: 1px solid #aaaaaa; */
  @media (max-width: 744px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px;
    margin-bottom: 10px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeadingBulletin = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 700;
  font-size: 24px;
  line-height: 155.56%;
  color: #020111;
    @media (max-width: 744px) {
    align-self: start;
  }
`;
const DescriptionBox = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 400;
  font-size: 16px;
  color: #666666;
  line-height: 30px;
  text-align: center;
  @media (max-width: 744px) {
    font-size: 14px;
    color: #aaa;
  }
`;
const Address = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 744px) {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 30px;
  }
`;

const InputAddress = styled.input`
  height: 47px;
  padding-left: 10px;
  width: 270px;
  background: #ffffff;
  /* Body text1 */
  margin-top: 0;
  border: 1px solid #aaaaaa;
  border-radius: 12px;
  @media (max-width: 744px) {
    border-radius: 30px;
    padding-left: 0px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;

  margin-left: 10px;
  width: 105px;
  height: 47px;
  color: #aaaaaa;
  background: #ffffff;
  /* Body text1 */
  border: 1px solid #aaaaaa;
  border-radius: 12px;
  @media (max-width: 744px) {
    border-radius: 26px;
    height: 45px;
  }
`;
export const Image = styled.img`
  width: 127px;
  height: 102px;
  margin-left: 50px;
  object-fit: contain;
    @media (max-width: 744px) {
   
     width: 100px;
  height: 110px;
  margin-left: 0px;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => (props.containerwidth ? props.containerwidth : "100%")};
  padding: ${(props) =>
    props.containerpadding
      ? props.containerpadding
      : style.spacing.PADDING_SMALL};
  justify-content: ${(props) =>
    props.justify ? props.justify : "pace-evenly"};
  border-bottom: 1px solid #aaaaaa;
  padding-bottom: 50px;
   @media (max-width: 744px) {
 
  }
`;
const GridItem = styled.div`
  background-color: #f2f2f2;
  margin-bottom: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 25px;
  width: 336.33px;
  height: 340px;
  /* white grey */
  background: #f9f9f9;
   @media (max-width: 744px) {
      gap:30px;
      padding: 40px;
      margin-right: 0px;
  }
`;
const HeadingBox = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 700;
  font-size: 25px;
  line-height: 155.56%;
  color: #020111;
  text-align: center;
     @media (max-width: 744px) {
    font-size: 16px;
  }
`;