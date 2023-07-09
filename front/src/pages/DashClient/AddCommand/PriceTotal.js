import React from "react";
import styled from "styled-components";
import * as style from "../../../constants/StyleSheets";

const PriceTotal = () => {
  return (
    <Price>
      <p>PRIX</p>
      <div style={{ display: "flex" }}>
        <h1>46,00 DT</h1>
        <span>TTC</span>
      </div>
    </Price>
  );
};

export default PriceTotal;

export const Price = styled.div`
 

  height: 20vh;
  width:25%;
  padding: 20px;
  background-color: ${(p) => p.theme.PRIMARY_COLOR};
  // margin: 20px;
  // margin-top: 50px;
  box-shadow: ${style.shadow.BOX_SHADOW_LARGE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
 order:-1;
 width:100%

  }
`;
