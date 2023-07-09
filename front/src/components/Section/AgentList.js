import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import React from "react";
import Company from "../../components/Section/Company";
import Commencer from "../Items/Commencer";

const AgentList = () => {
  return (
    <Container>
      <Header>
        <Title>Notre liste d'agents</Title>
        <SideTitle>
          Des professionnels dévoués et compétents - Engagés à assurer des
          services de transport fluides et fiables.
        </SideTitle>
      </Header>
      {/* <section style={{ display: "flex", flexDirection: "column" }}> */}
      <Agent>
        <AgentCard>
          <Card></Card>
          <Ligne>Agent 1</Ligne>
          <Li>CEO</Li>
        </AgentCard>
        <AgentCard>
          <Card></Card>
          <Ligne>Agent 2</Ligne>
          <Li>Livreur</Li>
        </AgentCard>
        <AgentCard>
          <Card></Card>
          <Ligne>Agent 3</Ligne>
          <Li>Marketing Manager</Li>
        </AgentCard>
        <AgentCard>
          <Card></Card>
          <Ligne>Agent 4</Ligne>
          <Li>Admin</Li>
        </AgentCard>
      </Agent>
      <Commencer hasdessin={false} />
    </Container>
  );
};

export default AgentList;


export const AgentCard = styled.div`
width: 20%;
min-width: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 @media (max-width: 744px)  {
    min-width: 120px ;
    width: 40%;
    justify-content: flex-start;
    align-items: flex-start;
    }

`

export const Container = styled.section`
  background-color: white;
  width: 96%;
  height: 100%;
  border-radius: 32px;
  position: "absolute";
  text-align: "center";
  justify-content: center;
  align-self: center;
  padding: 50px;
  margin: 30px;
  @media (max-width:744px){
    margin:0 auto;
    padding: 20px 20px;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 56px;
  color: #333333;
  text-align: left;
  margin-left: 38px;
  width: 100%;
   @media (max-width: 744px)  {
     font-size: 20px;
     margin: 0px;
    }
`;
export const SideTitle = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #666666;
  text-align: left;
  width: 80%;
   @media (max-width: 744px)  {
  width:100%;
  }
`;
export const Header = styled.div`
  display: flex;
   @media (max-width: 744px)  {
flex-direction: column;
align-self: start;
    }
`;
export const Card = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  background-color: #25243a;
  @media (max-width: 744px) {
    border-radius: 20px;
    width: 120px;
    height:120px;
  }
`;
export const Footer = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 155.56%;
  color: #020111;
`;
export const Paragraph = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #666666;
  margin-top: 10px;
`;

export const Ligne = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 48px;
  color: #333333;
  text-align: left;
     @media (max-width: 744px)  {
     font-size: 18px;
    }
`;
export const Agent = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  justify-content: space-around;
  margin-bottom: 60px;

  text-align: left;
  align-items: flex-start;
  @media (max-width: 744px) {
    width: 100%;

    gap: 20px;
  }
`;
export const Button = styled.button`
  margin-inline: ${style.spacing.MARGIN_MEDIUM};
  padding: ${style.spacing.PADDING_SMALL} ${style.spacing.PADDING_LARGE};
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
  border-radius: 5px;
  border: none;
  color: #020111;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 29px;
  padding-left: 30px;
  margin-left: 950px;
  margin-top: 20px;
`;
export const Li = styled.h6`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #666666;
`;
