import styled  from "styled-components";
import * as style from "../../constants/StyleSheets";
import React from "react";
import Alertlogo from '../../assets/images/alertlogo.png'


const Card = styled.div`
  /* Styles for the alert component */
 width: 450px;
 height: 290px;
 border-radius: 27.1px;
 background-color: ${(props) => props.theme.TEXT_COLOR};
`; 
const CardIm = styled.div`
  /* Styles for the alert component */
text-align:center;

`; 
const CardLogo = styled.img`
  /* Styles for the alert component */
  width: 100px;
  height: 80px;
  margin: ${style.spacing.MARGIN_MEDIUM};
`; 

const CardTitle = styled.h1`
  /* Styles for the alert component */
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${style.font.FONT_WEIGHT_NORMAL};
  font-size: ${style.font.FONT_SIZE_MEDIUM};
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #4A4A4A;
`; 
const CardMessage = styled.p`
  /* Styles for the alert component */
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${style.font.FONT_WEIGHT_NORMAL};
  font-size: ${style.font.FONT_SIZE_SMALL};
 


/* or 188% */

text-align: center;
letter-spacing: 0.01em;
  color: #666666;
  padding: ${style.spacing.PADDING_SMALL};

`; 
const CardButton= styled.button`

flex-direction: row;
justify-content: center;
align-self: center;
width: 144px;
height: 35px;
background: #53B483;
border-radius: 10px;
border: none;
color: ${(props) => props.theme.TEXT_COLOR} ;
margin: ${style.spacing.MARGIN_LARGE};
`; 



const Alert = () => {
  return (
 <Card>
   
    <CardIm>
    <CardLogo src={Alertlogo}/>
    </CardIm>
  
  <CardTitle>MERCI POUR VOTRE DEMANDE</CardTitle>
  <CardMessage>Veuillez préparer le montant exact pour le règlement lors de la livraison. </CardMessage>
  <CardMessage>
  Merci de votre commande et de votre confiance !</CardMessage>
  <CardIm>
  <CardButton>Continue</CardButton>
  </CardIm>
 </Card>

)
}
export default Alert;
