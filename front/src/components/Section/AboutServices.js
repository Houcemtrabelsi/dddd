import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import React from "react";
import Side from "../../assets/images/Group 7885.png";

const AboutServices = () => {
  return (
    <Container>
      <Comp>
        <img src={Side}></img>
        <div className="paragraphe-service">
          <Hedear>
            About SERVICE
            {/* <div style={{ width: 70, border: "1px solid black", height: 0 }}></div> */}
          </Hedear>
          <Title>À propos des services de Hezli</Title>

          <Descrip>
            Chez Hezli, nous sommes fiers d'offrir une gamme complète de
            services de transport pour répondre à divers besoins. Avec notre
            engagement envers l'excellence, nous fournissons des solutions
            fiables et efficaces pour la circulation fluide des marchandises à
            Djerba, en Tunisie. Whether you require the delivery of small or
            heavy packages, or specialized items, our dedicated team is equipped
            to handle it all. We ensure timely and secure transportation from
            pick-up to drop-off, using the most suitable logistics strategies.
          </Descrip>
        </div>
      </Comp>
    </Container>
  );
};

export default AboutServices;
export const Comp = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: 1400px) and (min-width: 300px) {
    /* flex-direction: column; */
  }
  @media (max-width: 744px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 360px) and (min-width: 200px) {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 500px;
    margin-top: 50px;
    margin: 30px;
    display: flex;
    @media (max-width: 360px) and (min-width: 200px) {
      width: 300px;
      margin: 0 auto;
      order: 4;
    }
    @media (max-width: 744px)  {
      width: 300px;
      margin: 0 auto;
      order: 4;
    }
  }
  .paragraphe-service {
    display: flex;
    flex-direction: column;
    /* margin-left: 40px; */
    padding: 120px 40px;
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
  height: 100%;
  border-radius: 32px;
  position: "absolute";
  text-align: "center";
  margin: 20px auto;
  @media (max-width: 360px) and (min-width: 200px) {
    display: flex;
    text-align: center;
    padding: 20px 20px;
  }
  @media (max-width: 744px)  {
    display: flex;
    text-align: center;
    padding: 20px 20px;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 35px;
  color: #020111;
  text-align: left;
  line-height: 50px;
  @media (max-width: 360px) and (min-width: 200px) {
    font-size: 16px;
    font-size: 20px;
    font-weight: 900;
    text-align: center;

    line-height: 30px;
  }
  @media (max-width: 744px)  {
    font-size: 20px;
    font-weight: 900;
    text-align: center;

    line-height: 30px;
  }
`;

export const Hedear = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
  /* text-align: left; */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #020111;
  @media (max-width: 360px) and (min-width: 200px) {
    font-size: 14px;
  }
  @media (max-width: 730px) and (min-width: 360px) {
    font-size: 16px;
  }
`;

export const Descrip = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #666666;
  width: 75%;
  @media (max-width: 360px) and (min-width: 200px) {
    font-size: 12px;
    text-align: center;
    width: 100%;
    line-height: 20px;
  }
  @media (max-width: 744px)  {
    font-size: 14px;
    text-align: center;
    width: 100%;
    line-height: 25px;
  }
`;
