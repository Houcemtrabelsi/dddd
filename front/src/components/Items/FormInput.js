import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import AuthService from "../../services/auth.service";
import { red } from "@mui/material/colors";

const FormInput = () => {
  // const [inputValue, setInputValue] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        AuthService.register({
          username: data.email,
          email: data.email,
          phoneNumber: data.phoneNumber,
          user_role: "client",
          password: data.password,
          accountOverview: [
            {
              __component: "section.client",

              firstName: data.firstName,
              lastName: data.lastName,
            },
          ],
        });

      })}
    >
      <DISP>
        {/* <div> */}
        <Container>
          <In
            errorBorder={errors.firstName}
            {...register("firstName", {
              required: "Please enter your first name.",
            })}
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Prénom "
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
          <Prénom>Prénom</Prénom>
        </Container>
        {/* <span
            style={{ color: "red", zIndex: 9999999999999999999, marginTop: -8 }}
          >
            <ErrorMessage errors={errors} name="firstName" />
          </span>
        </div> */}
        <Container>
          <In
            {...register("lastName", {
              required: "Please enter your last name.",
            })}
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            errorBorder={errors.lastName}
            placeholder="Nom de famille "
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
          <Label>Nom de famille</Label>
        </Container>
      </DISP>
      <Container>
        <Input
          type="text"
          {...register("phoneNumber", {
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: "invalid phone number",
            },

            required: "Please enter a valid phone number.",
          })}
          errorBorder={errors.phoneNumber}
          // value={inputValue}
          // onChange={handleInputChange}
          placeholder="+216 "
        />
        {errors.phoneNumber && (
          <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
        )}
        <Label>Numéro de téléphone</Label>

      </Container>

      <Container>
        <Input
          errorBorder={errors.email}
          {...register("email", {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "invalid email",
            },

            required: "Please enter your email.",
          })}
          type="text"
          placeholder="example@email.com "
          id="adr"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label>Adresse e-mail</Label>

      </Container>

      <DISPA>
        <Container>
          <In
            type="text"
            {...register("password", {
              // pattern: {
              //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              //   message: "invalid email",
              // },

              required: "Please enter your password.",
            })}
            errorBorder={errors.password}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Mot de passe "
            id="mdp"
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          <Label>Mot de passe</Label>
        </Container>
        <Container>
          <In
            type="text"
            {...register(
              "confirm_password",
              {
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              }
              //  {
              //   required: password === confirm_password ? "test" : "required",
              // }
            )}
            errorBorder={errors.confirm_password}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Confirmez le mot de passe "
            id="mdp"
          />
          {errors.confirm_password && (
            <ErrorMessage>{errors.confirm_password.message}</ErrorMessage>
          )}
          <Label>Confirmez le mot</Label>
        </Container>
      </DISPA>
      <DISPO>
        <Container>
          <Input
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Mot de passe "
            id="mdp"
          />

          <Label>Mot de passe</Label>
        </Container>
        <Container>
          <Input
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Confirmez le mot de passe "
            id="mdp"
          />

          <Label>Confirmez le mot</Label>
        </Container>
      </DISPO>
      <DISP>
        <Checkbox type="checkbox" style={checkboxStyle} />
        <Pi> J'accepte tous les termes et conditions</Pi>
      </DISP>
      <input type="submit" />
    </form>
  );
};

export default FormInput;

const checkboxStyle = {
  width: "20px",
  height: "20px",
 
 
};
const Checkbox = styled.input`
  @media (max-width: 744px) {
    background-color: #25243a;
  }
`;
export const Pi = styled.p`
  color: var(--dark-main-color, #020111);
  font-size: 15px;
  font-family: "Inter", sans-serif;
  line-height: 150%;
  letter-spacing: 0.24px;
    @media (max-width: 744px) {
      color: white;
      
    }
`;
export const DISPA = styled.section`
   display: flex;
    align-items: flex-start;
    gap: 16px;
  @media (max-width: 744px) {
   display: none;
  }
`;
export const DISPO = styled.section`
  display:none;
  @media (max-width: 744px) {
    display: block;
  align-items: flex-start;
  gap: 16px;
  }
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 14px;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 540px;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: ${(props) =>
    props.errorBorder ? "1px solid #ff6961" : "2px solid #000"};
  outline: none;
  background-color: transparent;
  border-radius: 8px;
  transition: border-bottom-color 0.3s;
    @media (max-width: 744px) {
    width: 93vw;
    color: white;
    border-color: white;
    height: 60px;
    padding: 10px;
      &::placeholder {
    @media (max-width: 744px) {
      color: #25243a;
    }
  }
  }

`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: transform 0.3s, color 0.3s;
  transform: translateY(-100%) translateX(-10%) scale(0.75);
  color: #000;
  background-color: white;
  padding: 0px 12px;
    @media (max-width: 744px) {
    color: white;
    background-color: #25243a;
  }
`;
const Labell = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: transform 0.3s, color 0.3s;
  transform: translateY(-100%) translateX(-10%) scale(0.75);
  color: #000;
  background-color: white;
  padding: 0px 12px;
    @media (max-width: 744px) {
    color: white;
    background-color: #25243a;
      top: 10px;
  left: 12px;
  }
`;
export const DISP = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
const In = styled.input`
  width: 260px;
  height: 50px;
  font-size: 16px;
  padding-left: 10px;
  border: ${(props) =>
    props.errorBorder ? "1px solid #ff6961" : "2px solid #000"};
  border-top: ${(props) =>
    props.errorBorder ? "1px solid #ff6961" : "2px solid #000"};
  background-color: transparent;
  border-radius: 8px;
  transition: border-bottom-color 0.3s;
    @media (max-width: 744px) {
    width: 45vw;
    color: white;
    border-color: white;
    height: 60px;
  &::placeholder {
    @media (max-width: 744px) {
      color: #25243a;
    }
  }
  }
`;
const Prénom = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: transform 0.3s, color 0.3s;
  transform: translateY(-100%) translateX(-10%) scale(0.75);
  color: #000;
  background-color: white;
  padding: 0px 12px;
    @media (max-width: 744px) {
    color: white;
    background-color: #25243a;
  }
`;

const ErrorMessage = styled.span`
  color: #ff6961;
  padding: 6px 10px;
  font-size: 12px;
`;
