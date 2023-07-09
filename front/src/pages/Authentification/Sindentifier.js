import React, { useState } from "react";
import styled from "styled-components";
import * as style from "../../constants/StyleSheets";

import logo from "../../assets/icons/Group.png";
import { Butto, Button } from "@mui/material";
import faceb from "../../assets/icons/Group 17.png";
import google from "../../assets/icons/Group 16.png";
import apple from "../../assets/icons/Group 18.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthService from "../../services/auth.service";
import faaceb from "../../assets/icons/fbbbb.png";
import gooogle from "../../assets/icons/gooooooogl.png";
import aapple from "../../assets/icons/appp.png";
import log from "../../assets/icons/Component 43 (1).png";
const Sindentifier = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Card>
      <White
        onSubmit={handleSubmit((data) => {
          console.log(data);
          AuthService.loginUser(data);
        })}
      >
        <Link to={"/"}>
          <LO src={log}></LO>
        </Link>
        <Link to={"/"}>
          <IMG src={logo}></IMG>
        </Link>

        <H1>S'identifier </H1>

        <Container>
          <Input type="text" placeholder="Email " {...register("identifier")} />

          <Label>Adresse Email</Label>
        </Container>
        <Container>
          <Input
            type="password"
            placeholder="Mot de passe "
            {...register("password")}
          />

          <Label>Mot de passe</Label>
        </Container>

        <Pi>Mot de passe oublié?</Pi>
        <Buttonn type="submit"> CONNEXION </Buttonn>
        <PA>
          {" "}
          <HR>____________ </HR>Ou connectez-vous en utilisant{" "}
          <HR>____________</HR>
        </PA>
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
        <Titlee>Vous n'avez pas encore de compte?</Titlee>
        <Para>
          Inscrivez-vous en quelques étapes faciles et découvrez nos services
          rapidement
        </Para>
        <Link to="/SinsecrireClient">
          <Sidentifbut>S'INSCRIRE</Sidentifbut>
        </Link>
      </Blue>
    </Card>
  );
};


export default Sindentifier;



export const LO = styled.img`
  display: none;

  @media (max-width: 744px) {
    display: block;

    align-self: flex-end;
    margin-right: 10px;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    margin-left: 263px;
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
export const HR = styled.p`
  @media (max-width: 744px) {
   display: none;
  }
`;
export const Buttonn = styled.button`
  width: 70%;
  font-weight: 700px;
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
    width: 300px;
    margin-bottom: 16px;
   
  }
`;
export const Card = styled.section`
  background-color: #25243a;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 744px) {
    flex-direction: column;
    background-color: #25243a;
    height: 150vh;

  }
`;

export const White = styled.form`
  width: 50%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 0px 60px rgba(0, 45, 137, 0.02);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: start;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: start;
  /* padding-bottom: 10%; */
  @media (max-width: 744px) {
    width: 100%;
    padding-inline: 10px;
    height: inherit;
    gap:20px
  }
`;
export const Pi = styled.p`
  color: var(--dark-main-color, #020111);
  font-size: 15px;
  font-family: "Inter", sans-serif;
  line-height: 150%;
  letter-spacing: 0.24px;
  @media (max-width: 744px) {
    color: white;
    align-self: start;
    margin-left: 30px;
  }
`;
export const PA = styled.p`
  color: var(--dark-main-color, #020111);
  text-align: center;
  font-size: 15px;
  font-family: "Inter", sans-serif;
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
  align-self: start;
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
export const IMA = styled.img`
display: none;
  @media (max-width: 744px) {
    display: block;
    width: 100px;
  }
`;
export const Titlee = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.64px;
  font-family: "Inter", sans-serif;
  margin-bottom: 20px;
  @media (max-width: 744px) {
    font-size: 26px;
    text-align: center;
    margin-bottom: 0px;
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
  @media (max-width: 744px) {
    
  }
`;
const Container = styled.div`
  position: relative;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Input = styled.input`
  width: 420px;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #000;
  border-top: 2px solid #000;
  outline: none;
  background-color: transparent;
  border-radius: 8px;
  transition: border-bottom-color 0.3s;
  &::placeholder {
    @media (max-width: 744px) {
      color: #25243a;
    }
  }
  @media (max-width: 744px) {
    width: 90vw;
    color: white;
    border-color: white;
    height: 60px;
    padding: 0px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: transform 0.3s, color 0.3s;
  transform: translateY(-100%) translateX(-10%) scale(0.75);
  color: #000;
  background-color: white;
  padding: 0px 12px;
  @media (max-width: 744px) {
    color: white;
    background-color: #25243a;
  }
`;
