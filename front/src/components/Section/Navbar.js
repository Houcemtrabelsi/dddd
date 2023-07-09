import styled from "styled-components";
import * as style from "../../constants/StyleSheets";
import Logo from "./../../assets/images/YellowLogo.png";
import LogoBlue from "./../../assets/icons/Group.png";
import Menu from "../Navigation/Menu";
import { Button } from "../Items/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import LoginCard from "../Items/LoginCard";
import Modale from "../Items/Modale";
import burgernavbar from "../../assets/icons/burgernavbar.svg";
import SecondNav from "../Navigation/SecondNav";
import Xicon from "../../assets/icons/Component 43.png";

const Navbar = ({ navigationValues }) => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };
  return (
    <Nav showMenu={showMenu}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {showMenu ? (
          <img src={Xicon} onClick={() => setShowMenu(false)}></img>
        ) : (
          <Burger onClick={() => setShowMenu(true)} src={burgernavbar} />
        )}
        <LogoImg src={showMenu ? LogoBlue : Logo} />
      </div>
      {showMenu && (
        <SecondNav
          navigationValues={navigationValues}
          setShowMenu={setShowMenu}
        />
      )}
      <Menu navigationValues={navigationValues} />
      <div>
        <Button
          style={{ margin: 0, padding: "8px 16px" }}
          className="connexion-btn"
          onClick={openModal}
        >
          Connexion
        </Button>
        <Modale
          openModal={openModal}
          closeModal={closeModal}
          setShow={setShow}
          show={show}
        />

        <Link to="/SinsecrireClient">
          <Button style={{ margin: 0 }} hasborder>
            S'inscrire
          </Button>
        </Link>
        {/* <Link to="/">
          <Button hasborder hasBackground>
            S'inscrire
          </Button>
        </Link> */}
      </div>
    </Nav>
  );
};

export default Navbar;

const Burger = styled.img`
  @media (min-width: 1151px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  margin-left: ${style.spacing.MARGIN_LARGE};
  /* padding: ${style.spacing.PADDING_LARGE}; */
  /* width: 160px; */
  height: 25px;
  /* align-self: start; */
  cursor: pointer;

  @media (max-width: 1151px) {
    height: 15px;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  z-index: 999999999999999999999999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  background-color: ${(props) =>
    props.showMenu ? "white" : props.theme.BACKGROUND_COLOR};
  /* @media (min-width: 360px) and (max-width: 1151px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  } */
  @media (max-width: 1151px) {
    border-bottom: 1px solid ${(props) => props.theme.PRIMARY_COLOR};
    /* background-color: white; */
  }
  .connexion-btn {
    @media (max-width: 1151px) {
      display: none;
    }
  }
`;
