import React from "react";
import styled from "styled-components";
import * as style from "../../constants/StyleSheets";

import logo from "../../assets/icons/Group.png";
import { Button, TextField } from "@mui/material";
import StyledInput from "../../components/Section/StyledInput";
import Inpuut from "../../components/Items/Inpuut";
import FormInput from "../../components/Items/FormInput";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


import faaceb from "../../assets/icons/fbbbb.png";
import gooogle from "../../assets/icons/gooooooogl.png";
import aapple from "../../assets/icons/appp.png";
import faceb from "../../assets/icons/Group 17.png";
import google from "../../assets/icons/Group 16.png";
import apple from "../../assets/icons/Group 18.png";
import log from "../../assets/icons/Component 43 (1).png";

const Sinsecrire = () => {
  return (
    <Card>
      <White>
        <StyledLink to={"/"}>
          <LO src={log}></LO>
        </StyledLink>
        <Link to={"/"}>
          <IMG src={logo}></IMG>
        </Link>

        <H1>S'inscrire </H1>

        <FormInput />
        <Buttonn> S'inscrire </Buttonn>
        <PX>_______ Ou connectez-vous en utilisant _______</PX>
        <Foote>
          <IM src={google} />
          <IM src={faceb} />
          <IM src={apple} />
        </Foote>

        <Foote>
          <IMA src={gooogle} />
          <IMA src={faaceb} />
          <IMA src={aapple} />
        </Foote>
      </White>

      <Blue>
        <Titlee>Avoir un compte?</Titlee>
        <Para>
          Connectez-vous facilement et découvrez nos services rapidement
        </Para>
        <Link to="/SidentifierClient">
          <Sidentifbut>S'IDENTIFIER</Sidentifbut>
        </Link>
      </Blue>
    </Card>
  );
};

export default Sinsecrire;



export const PX = styled.p`
display: none;
  @media (max-width: 744px) {
    color: white;
    width: 100%;
    margin-bottom: 10px;
    display:block;
   font-size: 15px;
   text-align: center;
  }
`;
export const IMA = styled.img`
  display: none;
  @media (max-width: 744px) {
    display: block;
    width: 100px;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  align-self: flex-end;
  margin-right: 10px;
  border-radius: 20px;
`;
export const LO = styled.img`
  display: none;

  @media (max-width: 744px) {
    display: block;

    align-self: flex-end;
    margin-right: 10px;
    border-radius: 20px;
    width: 40px;
    height: 40px;
  }
`;
export const Sidentifbut = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 12px;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  background-color: #25243a;
  @media (max-width: 744px) {
    width: 250px;
    font-weight: 900;
    height: 55px;
  }
`;
export const Buttonn = styled.button`
  width: 70%;

  height: 45px;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  background-color: black;
  margin-top: 10px;
  @media (max-width: 744px) {
    color: #25243a;
    background-color: white;
    border: none;
    height: 60px;
    width: 340px;
    margin-bottom: 16px;
  }
`;
export const Card = styled.section`
  background-color: #25243a;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 744px) {
    flex-direction: column;
    background-color: #25243a;
    height: 180vh;
  }
`;

export const White = styled.section`
  width: 50%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 0px 60px rgba(0, 45, 137, 0.02);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 744px) {
    background-color: #25243a;
    color: white;
    width: 100%;
    height: inherit;
    padding-top: 30px;
    gap: 10px;
  }
`;

export const Blue = styled.section`
  width: 50%;
  height: 100%;
  background-color: #25243a;
  /* border-radius: 24px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px;
  padding: 20px;
  @media (max-width: 744px) {
    width: 100%;
    padding-inline: 10px;
    height: inherit;
    gap: 20px;
    margin-top: 0px;
    padding: 0px;
    
  }
`;
export const Pi = styled.p`
  color: var(--dark-main-color, #020111);
  font-size: 15px;
  font-family: "Inter", sans-serif;
  line-height: 150%;
  letter-spacing: 0.24px;
  margin-right: 268px;
  margin-bottom: 20px;
  margin-top: -20px;
  @media (max-width: 744px) {
    color: white;
    align-self: start;
    margin-left: 30px;
  }
`;
export const PA = styled.p`
  font-family: "Inter", sans-serif;
  color: #8d93a1;
  text-align: center;
  font-size: 12px;

  line-height: 150%;
  letter-spacing: 0.24px;
  @media (max-width: 744px) {
    color: white;
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #07122f;
  margin-bottom: 20px;
  @media (max-width: 744px) {
    color: white;
    font-size: 26px;
    font-weight: 900;
    letter-spacing: 1px;
  }
`;

export const IMG = styled.img`
  align-self: flex-start;
  width: 110px;
  height: 23px;
  position: absolute;
  top: 20px;
  left: 20px;
  @media (max-width: 744px) {
    display: none;
  }
`;
export const Inputs = styled.section`
  margin: 40px;
`;

export const Foote = styled.section`
  margin: 20px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 37px;
  @media (max-width: 744px) {
    gap: 10px;
    margin: 0px;
  }
`;
export const IM = styled.img`
  width: 120px;
  @media (max-width: 744px) {
    display: none;
  }
`;
export const Titlee = styled.h1`
  color: #fff;
  font-size: 32px;
  margin-top: 120px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.64px;
  font-family: "Inter", sans-serif;
    @media (max-width: 744px) {
    margin-top: 0px;
  }
`;

export const Para = styled.p`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  line-height: 200%;
  letter-spacing: 0.32px;
  width: 400px;
  margin-bottom: 30px;
  @media (max-width: 744px) {
 
  }
`;

export const INP = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 25px;
  outline: none;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  transition: border-color 0.3s;
`;
