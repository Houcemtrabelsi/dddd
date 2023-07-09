import styled, { css } from "styled-components";
import * as style from "../../../constants/StyleSheets";
import React, { useEffect } from "react";
import Profile from "../../../assets/images/Avatar.png";

const ProfilePassword = () => {
  return (
    <>
      <Content>
        <User>Mot de passe</User>
        <ContentService>
          <Address>
            <Input
              name="name"
              type="password"
              className="oinput"
              placeholder="Tapez mot de passe"
            />
          </Address>
        </ContentService>
        <Button hasBackground> Mettre à jour</Button>
      </Content>
      {/* </Content> */}
    </>
  );
};

export default ProfilePassword;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4.38rem;
  gap: 1.5rem;
  margin-top: 4.38rem;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ContentService = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
  border-radius: 32px;
`;

const Input = styled.input`
  width: 44.75rem;
  height: 3rem;
  border-radius: 10px;
  border: transparent;
  padding-right: 2.5rem;
  padding: 1.75rem;
  color: var(--body-text-2, #666);
  
  font-family: ${style.font.FONT_FAMILY};
  font-size: 0.875rem;

  font-weight: 400;
  line-height: 1.5rem;
`;

const User = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  color: var(--white, #fff);

  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  border-radius: 5px;
  width: 44.75rem;
  height: 3rem;
  border-width: 2px;
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
  border-color: #ffd400;
  font-family: ${style.font.FONT_FAMILY};
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline"
        ? props.theme.BACKGROUND_COLOR
        : props.theme.PRIMARY_COLOR};
    color: ${(props) =>
      props.variant !== "outline"
        ? props.theme.PRIMARY_COLOR
        : props.theme.BACKGROUND_COLOR};
  }
`;
