import React from 'react'
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const Inpuut = () => {
      const [inputValue, setInputValue] = useState("");

      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <>
      <InputContainer>
        <Input type="text" value={inputValue} onChange={handleInputChange} />
        <Label hasValue={inputValue.length > 0}>Nom et prénom</Label>
      </InputContainer>
      <InputContainer>
        <Input type="text" value={inputValue} onChange={handleInputChange} />
        <Label hasValue={inputValue.length > 0}>Numéro de téléphone</Label>
      </InputContainer>
      <InputContainer>
        <Input type="text" value={inputValue} onChange={handleInputChange} />
        <Label hasValue={inputValue.length > 0}>Adresse email</Label>
      </InputContainer>
      <InputContainer>
        <Input type="text" value={inputValue} onChange={handleInputChange} />
        <Label hasValue={inputValue.length > 0}>Message</Label>
      </InputContainer>
    </>
  );
}

  export default Inpuut;



const InputContainer = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 150%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  background-color: transparent;
  color: white;
  transition: border-color 0.3s ease-in-out;
  @media (min-width: 360px) and (max-width: 790px) {
    width: 100%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
  &:focus {
    border-color: #ffd400;
    outline: none;
  }
`;
const Label = styled.label`
  position: absolute;
  top: ${({ hasValue }) => (hasValue ? "-12px" : "10px")};
  left: 10px;
  font-size: ${({ hasValue }) => (hasValue ? "16px" : "16px")};
  color: ${({ hasValue }) => (hasValue ? "#bdbdbd" : "#bdbdbd")};
  transition: all 0.3s ease-in-out;
`;

