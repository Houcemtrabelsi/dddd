import React from "react";
import styled from "styled-components";

import Tel from "./../../assets/images/call.png";

const CallContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffd400;
  gap: 20px;
  font-size: 17px;
  @media (max-width: 744px){
    font-weight: 900px;
  }
  img {
    width: 26px !important;
    height: 26px !important;
  }
`;

const Contact = styled.div``;

export const Call = () => {
  return (
    <CallContact>
      <img src={Tel} alt="Group" /> <p style={{fontWeight:"900px"}}>+216 23 333 333</p>
    </CallContact>
  );
};

export default Call;
