import React from 'react'
import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import user from "../../assets/icons/user.png"
import { Button } from '@mui/material';
import vector from "../../assets/icons/Vector.png"
import { Link } from 'react-router-dom';





export const LoginCard = () => {
  return (
    <Div>
      <Card>
        <White>
          <Title>Connectez-vous</Title>

          <img src={user}></img>
          <H2>Vous êtes client?</H2>

          <Link to="/SidentifierClient">
            <Buttonn>CONNEXION</Buttonn>
          </Link>
          <P>Vous shouaitez devenir client?</P>
          <Link to="/SinsecrireClient">
            <Sidentifbutt>S'INSCRIRE</Sidentifbutt>
          </Link>
        </White>

        <Blue>
          <Tit>à votre compte</Tit>

          <img src={vector}></img>
          <EN>Vous êtes une entreprise?</EN>
          <Link to="/SidentifierAgent">
            <Buttoon>CONNEXION</Buttoon>
          </Link>
          <P2>Vous shouaitez devenir partenaire?</P2>
          <Link to="/SinsecrireAgent">
            <Sidentifbut>S'INSCRIRE</Sidentifbut>
          </Link>
        </Blue>
      </Card>
    </Div>
  );
}

export default LoginCard
export const Sidentifbutt = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 12px;
  border: 2px solid #25243a;
  color: #25243a;
  font-size: 16px;
  background-color: white;
`;
  export const Sidentifbut = styled.button`
    width: 200px;
    height: 45px;
    border-radius: 12px;
    border: 1px solid white;
    color: white;
    font-size: 16px;
    background-color: #25243a;
  `;

export const Buttoon = styled.button`
  width: 15vw;
  font-weight: 700px;
  height: 45px;
  border-radius: 12px;
  color: #25243a;
  font-size: 14px;
  background-color: white;
  letter-spacing: 1px;
  border: none;

`;
export const Buttonn = styled.button`
  width: 15vw;
  font-weight: 700px;
  height: 45px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  background-color: #25243a;
  letter-spacing: 1px;
  border: none;

`;
  
export const Div = styled.div`
  text-align: center;
  background: transparent;
`;
export const Card = styled.section`

  border: 2px solid #ffd400;
  border-radius: 24px;
  width: 620px;
  height: 400px;
  display: flex;

`;

export const White = styled.section`
  width: 50%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 0px 60px rgba(0, 45, 137, 0.02);
  border-radius: 24px 0 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Blue = styled.section`
  width: 50%;
  height: 100%;
  background-color: #25243A;
  border-radius:0 24px 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  padding-bottom: 20px;
  letter-spacing: 0.02em;
  color: #25243a;
`;
export const Tit = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  /* or 54px */
  padding-bottom: 20px;
  letter-spacing: 0.02em;
 
  /* background color */
 
  color: white;
`;
export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 200%;
  letter-spacing: 0.02em;
  color: #25243a;
  padding-bottom: 20px;
`;
export const P = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
 margin-top: 20px;
 margin-bottom: 10px;
  /* or 21px */

  letter-spacing: 0.02em;

  /* dark main color */

  color: #020111;
`;

export const EN = styled.h2`
  padding-bottom: 20px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 200%;
  letter-spacing: 0.02em;
  color: white;
`;

export const P2 = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: 0.02em;

  /* dark main color */

  color: white;
`;