import React from "react";
import ContentWhiteBox from "../../components/Section/ContentWhiteBox";
import Hero from "../../components/Section/Hero";
import HomeAbout from "../../components/Section/HomeAbout";
import MapHome from "../../components/Section/MapHome";
import SuiviLivraision from "../../components/Section/SuiviLivraision";
import ExelentService from "../../components/Section/ExelentService";
import Commencer from "../../components/Items/Commencer";
import Telecharger from "../../components/Items/Telecharger";
import ContactezNous from "../../components/Section/ContactezNous";
import styled from "styled-components";
import Buttonobtenez from "../../components/Items/buttonobtenez";

import StyledInput from "../../components/Section/StyledInput";
import AuthModal from "../../components/Items/AuthModal";
import Footer from "../../components/Section/Footer";
import { useRef } from "react";

const Home = () => {
  const MapRef = useRef(null);
  const ScrollToMap = () => {
    MapRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero MapRef={MapRef} ScrollToMap={ScrollToMap} />
      <ContentWhiteBox>
        <MapHome MapRef={MapRef} />
        <HomeAbout />
      </ContentWhiteBox>
      <SuiviLivraision />
      <ExelentService />
      <Telecharger />
      <HR
      
      />
      <ContactezNous />
      <Commencer />

      <Footer />
    </div>
  );
};

export default Home;


const HR = styled.hr`
  width: 80%;
  margin-left: 150px;
  background-color: #aaaaaa;
  @media (max-width: 744px) {
    display: flex;
    align-self: center;
    justify-content: center;
    margin-left: 40px;
  }
`;