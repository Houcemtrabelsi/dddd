import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import React from "react";
import Side from "../../assets/images/Image.png";

const Company = () => {
  return (
    <Container>
      <Comp>
        <IMG src={Side}></IMG>
        <div className="paragraphe-service">
          <Hedear>NOTRE COMPARE</Hedear>
          <Title>Nous Sommes Leader en Déménagement en Tunisie</Title>

          <Descrip>
            Chez Hezli, nous sommes une entreprise de transport réputée basée à
            Djerba, en Tunisie. Nous sommes spécialisés dans le transport d'une
            large gamme d'articles, des documents papier délicats aux services
            de déménagement, vers des emplacements spécifiques dans la région de
            Djerba. Nos services sont exclusivement axés sur la satisfaction des
            besoins de transport des entreprises et des particuliers à Djerba,
            garantissant des livraisons efficaces et fiables. Grâce à notre
            connaissance approfondie du territoire, nous proposons des solutions
            logistiques sur mesure pour répondre à vos besoins spécifiques.
            Qu'il s'agisse d'un petit colis ou d'un gros envoi, notre équipe
            dévouée s'engage à livrer vos articles en toute sécurité et à temps.
          </Descrip>
        </div>
      </Comp>
    </Container>
  );
};

export default Company;
export const IMG = styled.img`
  width: 50%;
  @media (max-width: 744px) {
    width: 100%;
  }
`;
export const Comp = styled.section`
  width: 100%;
  display: flex;
  gap: 80px;
  align-items: flex-start;
  @media (max-width: 744px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0px;
  }
  .paragraphe-service {
    display: flex;
    flex-direction: column;
    /* margin-left: 40px; */
    padding: 50px 50px 50px 0px;
    gap: 20px;
    @media (max-width: 360px) and (min-width: 200px) {
      padding: 30px 10px;
      text-align: center;
    }
    @media (max-width: 730px) and (min-width: 360px) {
      padding: 30px 10px;
      text-align: center;
    }
  }
`;
export const Container = styled.section`
  background-color: white;
  width: 96%;
  /* height:100%;  */
  border-radius: 32px;
  position: "absolute";
  text-align: "center";
  margin-left: 20px;
  padding: 20px;
  @media (max-width: 744px) {
    margin: 0 auto;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-style: normal;
  /* margin-top: 40px; */
  font-size: 30px;
  color: #020111;
  text-align: left;
  @media (max-width: 744px) {
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    line-height: 30px;
    margin-top: 0;
  }
`;

export const Hedear = styled.p`
  /* margin-top: 80px; */
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #020111;
  @media (max-width: 744px) {
    margin-top: 0;
    font-size: 16px;
    justify-content: center;
    display: flex;
  }
`;

export const Descrip = styled.p`
  margin-top: 40px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #666666;
  @media (max-width: 744px) {
    font-size: 14px;
    text-align: center;
    width: 100%;
    line-height: 25px;
    margin-top: 0;
  }
`;
