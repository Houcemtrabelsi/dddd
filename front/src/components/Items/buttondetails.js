
import InformationBtn from "./../../assets/icons/Vectordetails.png";

import React from "react";


import styled from 'styled-components';
import * as style from "../../constants/StyleSheets";


export const Buttondetails = ({ Textbody, icon }) => {
  return (
    <Button404>
      <Icon src={icon} width="16px" height="16px" />
      <Text>{Textbody}</Text>
    </Button404>
  );
};
export default Buttondetails;




const Text = styled.div`
font-family: ${style.font.FONT_FAMILY};
color : #020111;
font-weight: 600;
font-size: 14px;
margin-top: 0px !important;

`;
const Icon = styled.img`
  width: 16px !important;
  object-fit: contain;
  transition: transform 0.4s ease;
  width:20px !important;
  height:20px !important;
`;


const Button404 = styled.button`
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 600;
  font-size: 14px;
  color: #020111;
  background-color: #ffd400;
  border: none;

  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
 

  border-radius: 12px;
  width: 200px;
  height: 45px;
    @media (max-width: 744px) {
   width: 150px;
   height: 35px;
 
  }
  &:hover {
    background-color: #25243a;
    border: 1px solid #ffd400;
    color: #ffd400;
  }

  &:hover ${Icon} {
    -webkit-transform: translateX(130px) rotate(45deg);
    filter: brightness(0) saturate(100%) invert(75%) sepia(73%) saturate(1494%)
      hue-rotate(1deg) brightness(107%) contrast(103%);
  }

  &:hover ${Text} {
    transition: transform 0.4s ease;
    transform: translateX(-40px);
    filter: brightness(0) saturate(100%) invert(75%) sepia(73%) saturate(1494%)
      hue-rotate(1deg) brightness(107%) contrast(103%);
  }
`;

