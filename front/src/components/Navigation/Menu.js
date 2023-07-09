import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as style from "../../constants/StyleSheets";

export const Nav = styled.nav`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  width: 60%;
  height: 10%;
  @media (max-width: 1151px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${style.font.FONT_WEIGHT_NORMAL};
  font-size: ${style.font.FONT_SIZE_SMALL};

  /* padding: ${style.spacing.PADDING_SMALL}; */
  &:hover {
    color: "red";
    /* ${(props) => props.theme.PRIMARY_COLOR}; */
  }
  a {
    padding: 8px;
    text-decoration: none;
    color: ${(props) => props.theme.TEXT_COLOR};
  }
  a:hover {
    color: ${(props) => props.theme.PRIMARY_COLOR};
  }
  a.active {
    color: ${(props) => (props.isactive ? "#FFD400" : "#FFFFFF")};
  }
  /* a:visited {
    color: ${(props) => props.theme.TEXT_COLOR};
  } */
`;

export const MenuList = styled.ul``;

const Menu = ({ navigationValues }) => {
  const [active, setActive] = useState({ to: "/" });

  const handleItemClick = (item) => {
    setActive(item);
  };

  return (
    <Nav>
      {navigationValues?.navbar?.menu?.links?.map((item, index) => (
        <ListItem
          key={item.id}
          onClick={() => handleItemClick(item)}
          isactive={active.to === item.to}
        >
          <Link
            to={item.to}
            className={active.to === item.to ? "active" : ""}
            style={
              {
                // color: active === item ? "#FFD400" : "#FFFFFF";
              }
            }
          >
            {item.label}
          </Link>
        </ListItem>
      ))}
    </Nav>
  );
};

export default Menu;
