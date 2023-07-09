import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AuthService from "../../services/auth.service";

const FormInputAgent = () => {
  const { register, handleSubmit } = useForm();

  // const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        AuthService.register({
          username: data.email,
          email: data.email,
          user_role: "company",
          phoneNumber: data.phoneNumber,
          password: data.password,
          accountOverview: [
            {
              __component: "section.company",
              patentNumber: data.patentNumber,
              name: data.name,
              activity: data.activity,
              category: data.category,
              cinOwner: data.cinOwner,
              nameOwner: data.nameOwner,
              address: data.address,
              region: data.region,
              city: data.city,
              postalCode: data.postalCode,
            },
          ],
        });
      })}
    >
      <DISP>
        <Container>
          <In
            type="text"
            {...register("name")}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Nom de l'entreprise "
          />

          <Prénom>Nom de l'entreprise</Prénom>
        </Container>
        <Container>
          <In
            type="text"
            {...register("nameOwner")}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="nom du propriétaire "
          />

          <Label>Nom du propriétaire</Label>
        </Container>
      </DISP>
      <DISP>
        <Container>
          <In
            type="text"
            {...register("patentNumber")}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Numéro de Patent "
          />

          <Prénom>Numéro de Patent</Prénom>
        </Container>
        <Container>
          <In
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Photo de Patent "
          />

          <Label>Photo de Patent</Label>
        </Container>
      </DISP>

      <DISP>
        <Container>
          <In
            type="text"
            {...register("activity")}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Activité "
          />

          <Prénom>Activité</Prénom>
        </Container>
        <Container>
          <In
            type="text"
            {...register("phoneNumber")}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder=" Numéro de téléphone "
          />

          <Label>Numéro de téléphone</Label>
        </Container>
      </DISP>

      <DISP>
        <Container>
          <In
            {...register("address")}
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Addresse "
          />

          <Prénom>Adresse</Prénom>
        </Container>
        <Container>
          <In
            type="text"
            {...register("postalCode")}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Code postal "
          />

          <Label>Code postal</Label>
        </Container>
      </DISP>

      <DISP>
        <Container>
          <In
            {...register("city")}
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Ville "
          />

          <Prénom>Ville</Prénom>
        </Container>
        <Container>
          <In
            type="text"
            {...register("region")}
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="État "
          />

          <Label>État</Label>
        </Container>
      </DISP>

      <Container>
        <Input
          type="text"
          {...register("email")}
          // value={inputValue}
          // onChange={handleInputChange}
          placeholder="example@email.com "
          id="adr"
        />

        <Label>Adresse e-mail</Label>
      </Container>

      <DISPA>
        <Container>
          <In
            {...register("password")}
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Mot de passe "
            id="mdp"
          />

          <Label>Mot de passe</Label>
        </Container>
        <Container>
          <In
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Confirmez le mot de passe "
            id="mdp"
          />

          <Label>Confirmez le mot de passe </Label>
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
      <DISP
        
      >
        <input type="checkbox" style={checkboxStyle} />
        <Pi> J'accepte tous les termes et conditions</Pi>
      </DISP>
      <input type="submit" onSubmit={(e) => e.preventDefault()} />
    </form>
  );
};

export default FormInputAgent;

  const checkboxStyle = {
    width: "20px",
    height: "20px",
};
  


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
  display: none;
  @media (max-width: 744px) {
    display: block;
    align-items: flex-start;
    gap: 16px;
  }
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Input = styled.input`
  width: 540px;
  height: 70px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #000;
  border-top: 2px solid #000;
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
    @media (max-width: 744px) {
   
  }
`;
const In = styled.input`
  width: 260px;
  height: 50px;
  font-size: 16px;
  padding-left: 10px;
  border: 2px solid #000;
  border-top: 2px solid #000;
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

