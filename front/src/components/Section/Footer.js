import React from "react";
import Logo from "../../assets/images/YellowLogo.png";
import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import Path from "../../assets/icons/Path.png";
import Pat from "../../assets/icons/Path (1).png";
import Pa from "../../assets/icons/Combined Shape.png";
import Fb from "../../assets/icons/faceb.png";
import Inst from "../../assets/icons/instg.png";
import Twit from "../../assets/icons/twitt.png";

export const Footer = () => {
  return (

    <FooterContainer>
      <Hr></Hr>
      <Box>
        <Containerr className="logo">
          <LogoImg src={Logo} />
        </Containerr>

        <ContainerLink>
          <Heading>Menu</Heading>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FooterLink href="#">A propos de nous</FooterLink>
            <FooterLink href="#">Nos Services</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FooterLink href="#">Obtenir un devis</FooterLink>
            <FooterLink href="#">Devenir partenaire</FooterLink>
          </div>
        </ContainerLink>

        <Container>
          <HeadingLast>Restez à l'écoute avec nous</HeadingLast>
          <Ligne>
            <Paths src={Path}></Paths>
            <FooterLink href="#">Djeba , Houmet Souk</FooterLink>
          </Ligne>
          <Ligne>
            <Paths src={Pat}></Paths>
            <FooterLink href="#">+216 12345678</FooterLink>
          </Ligne>
          <Ligne>
            <Paths src={Pa}></Paths>
            <FooterLink href="#">Hezli@contact.com</FooterLink>
          </Ligne>
        </Container>

        <Contacts>
          <img src={Fb}></img>
          <img src={Twit}></img>
          <img src={Inst}></img>
        </Contacts>

        <Ends>
          <Last>Copyright © 2023. Tous droits réservés.</Last>
          <div style={{ display: "flex", gap: 30, width: "30%" }}>
            <Last> Condition d'utilisation</Last>
            <Last>politique de confidentialité</Last>
          </div>
        </Ends>
      </Box>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div``;

export const Section = styled.section`
  @media (max-width: 732px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }
  @media (max-width: 361px) {
  
    flex-direction: column;
  }
`;
export const DIV = styled.div``;
export const Div = styled.div`

`;
export const Box = styled.section`
  bottom: 0;
  /* position: absolute; */
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 80px;

  width: 100%;
  padding: 40px;
  min-height: 443px;
  @media (min-width: 360px) and (max-width: 790px) {
    gap:0
  }
  .logo {
    margin: 0;
    @media (min-width: 360px) and (max-width: 790px) {
      order: -1;
    }
  }
`;

const ContainerLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: flex-start;
  gap: 10px;
  padding-bottom: 20px;
  @media (min-width: 360px) and (max-width: 790px) {
    width: 80%;
    justify-content: space-around;
    flex-direction: row;
    align-items: baseline;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: flex-start;
  gap: 10px;

  padding-bottom: 20px;
  @media (min-width: 360px) and (max-width: 790px) {
    width: 100%;
  }
`;

export const Containerr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: flex-start;
  gap: 10px;
  padding-bottom: 20px;

`;

export const FooterLink = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${style.font.FONT_WEIGHT_NORMAL};
  font-size: ${style.font.FONT_SIZE_MEDIUM};
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #ffff;
  line-height: 25px;
  &:hover {
    color: ${(props) => props.theme.PRIMARY_COLOR};
    transition: 200ms ease-in;
  };  @media (min-width: 360px) and (max-width: 790px) {
    font-size: 2.3vw;
  }
`;

//   @media (max-width: 732px) and (min-width: 360px) {
//     display: flex;
//     flex-direction: row;
//   }
//   @media (max-width: 361px) {
    
    
//   }
// `;
// export const FooterLinks = styled.a`
//   font-family: "Inter", sans-serif;
//   font-style: normal;
//   font-weight: ${style.font.FONT_WEIGHT_NORMAL};
//   font-size: ${style.font.FONT_SIZE_MEDIUM};
//   text-decoration: none;
//   letter-spacing: 0.02em;
//   color: #ffff;
//   line-height: 25px;
//   &:hover {
//     color: ${(props) => props.theme.PRIMARY_COLOR};
//     transition: 200ms ease-in;
//   }
//   @media (max-width: 732px) and (min-width: 360px) {
    
//   }
// `;
/* 
  @media (min-width: 360px) and (max-width: 790px) {
    font-size: 2.3vw;
  }
`; */

const HeadingLast= styled.h2`margin-bottom: 20px;


  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #aaaaaa;
  @media (min-width: 360px) and (max-width: 790px) {
  display:none  ;
  }`
export const Heading = styled.h2`
  margin-bottom: 20px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #aaaaaa;
  @media (min-width: 360px) and (max-width: 790px) {
    font-size: 12px;

  }
`;
//   @media (max-width: 732px) and (min-width: 360px) {
//     display: flex;
//     flex-direction: row;
//   }
//   @media (max-width: 361px) {
 
//     flex-direction: column;
//   }
// `;
// export const He = styled.h1`
//   margin-bottom: 20px;

//   font-family: "Inter", sans-serif;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 23px;
//   color: #aaaaaa;
//   @media (max-width: 732px) and (min-width: 360px) {
//     display: none;
/* 
  @media (min-width: 360px) and (max-width: 790px) {
    font-size: 12px;

  }
`; */


export const LogoImg = styled.img`
  width: 128px;
  height: 28px;

//   @media (max-width: 732px) and (min-width: 360px) {
//     flex-direction: row;
//   }
//   @media (max-width: 361px) {
//     align-items: flex-start;

  @media (min-width: 360px) and (max-width: 790px) {
    width: 100%;
    height: 3vw;

  }
`;
export const Ligne = styled.div`
  width: 100%;
  gap: 25px;
  display: flex;
  justify-content: flex-start;

//   @media (max-width: 732px) and (min-width: 360px) {
//     flex-direction: row; }

  @media (min-width: 360px) and (max-width: 790px) {
    margin-left:20px ;

  }
`;
export const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

//   @media (max-width: 732px) and (min-width: 360px) {
//     flex-direction: row;
//     gap: 20px;
//     align-items: center;
//   }
//   @media (max-width: 361px) {
//   display: none;}

  margin-left: 100px;
  @media (min-width: 360px) and (max-width: 790px) {
    order: -1;
    margin-left: 0;
    width: 60%;
    justify-content: flex-end;
  }
  img {
    @media (min-width: 360px) and (max-width: 790px) {
      width: 30px;
    }
  }
`;
export const Paths = styled.img`
  display: flex;
  justify-content: flex-start;
  width: 16px;
  height: 16px;
  margin-top: 5px;
  object-fit: contain;
`;
export const Last = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${style.font.FONT_WEIGHT_NORMAL};
  font-size: ${style.font.FONT_SIZE_SMALL};
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #ffff;
  line-height: 25px;
  &:hover {
    color: ${(props) => props.theme.PRIMARY_COLOR};
    transition: 200ms ease-in;
  }
  width: 60%;
`;
export const Ends = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

//   gap: 430px;
//   @media (max-width: 732px) and (min-width: 360px) {

  justify-content: space-between;
  /* gap: 430px; */
  @media (min-width: 360px) and (max-width: 790px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

export const Hr = styled.hr`

  width: 80%;
  align-self: center;
  justify-content: center;
  display: flex;
  margin-top: 40px;
  align-items: center;
  margin-bottom: 30px;
  margin-inline: auto;

`;
