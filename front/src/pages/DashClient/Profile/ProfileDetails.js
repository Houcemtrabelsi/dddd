import styled, { css } from "styled-components";
import * as style from "../../../constants/StyleSheets";
import React, { useEffect } from "react";
import Profile from "../../../assets/images/Avatar.png";
import update from "../../../assets/icons/edit.svg";

const ProfileDetails = () => {
  return (
    <>
      <Content>
        <User>Informations personnelles</User>
        <ContentService>
          <ImgService>
            <img src={Profile} alt="Profile" />
            <Profile_name>Joseph Ren</Profile_name>
          </ImgService>
          <Address>
            <InputContainer>
              <Input
                name="name"
                type="text"
                className="oinput"
                placeholder="Joseph Ren"
              />
              <UpdateIcon src={update} alt="Update" />
            </InputContainer>
            <InputContainer>
              <Input
                name="email"
                type="text"
                className="oinput"
                placeholder="JosephRen@Mail.Com"
              />
              <UpdateIcon src={update} alt="Update" />
            </InputContainer>

            <InputContainer>
              <Input
                name="tel"
                type="number"
                className="oinput"
                placeholder="+00 000000 000"
              />{" "}
              <UpdateIcon src={update} alt="Update" />
            </InputContainer>
          </Address>
        </ContentService>
        <Button hasBackground> Mettre à jour</Button>
      </Content>
        {/* </Content> */}
    </>
  );
};

export default ProfileDetails;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4.38rem;
  gap: 3rem;
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 44.75rem;
  height: 3rem;
  border-radius: 10px;
  border: transparent;
  padding-right: 2.5rem;
  padding: 1.75rem;
  color: var(--body-text-2, #666);

  font-size: 0.875rem;

  font-weight: 400;
  line-height: 1.5rem;
`;

const UpdateIcon = styled.img`
  position: absolute;
  right: 1rem;
  height: 1.5rem;
  padding-right: 1.37rem;
`;

const ImgService = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  border-radius: 32px;
  text-align: "center";
  gap: 1.25rem;
  flex-direction: row;
  padding-bottom: 10px;
`;
const User = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem;
`;

const Profile_name = styled.div`
  font-family: ${style.font.FONT_FAMILY};
  color: var(--white, #fff);
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  flex-shrink: 0;
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
