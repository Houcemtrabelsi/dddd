import React, { useState } from "react";
import styled from "styled-components";
import addcommandimage from "../../../assets/images/addcommandcover.png";
import { StepperForm } from "../../../components/Navigation/Stepper";
import cardImage from "../../../assets/images/Component 47.svg";
import cardImage2 from "../../../assets/images/Component 51.svg";
import cardImage3 from "../../../assets/images/Component 53.svg";
import cardImage4 from "../../../assets/images/Component 55.svg";
import * as style from "../../../constants/StyleSheets";

const Step2 = ({setStep}) => {
  const addObject = (e) => {
    e.preventDefault();
    if (currentObject.id) {
      setPanier([
        ...panier,
        {
          object: currentObject,
          count: objetCount,
        },
      ]);
      setCurrentObject({ value: "" });
      setObjetCount(1);
    } else {
      setShowWarning(true);
    }
  };

  const handleInputChange = (e) => {
    const selectedValue = e.target.value;
    const option = options.find((opt) => opt.value === selectedValue);
    setCurrentObject(option);
    setShowWarning(false);
  };

  const [panier, setPanier] = useState([]);
  const [objetCount, setObjetCount] = useState(1);
  const [showWarning, setShowWarning] = useState(false);
  const options = [
    { value: "Table", id: 2, volume: 0.5 },
    { value: "Door", id: 2, volume: 0.8 },
    { value: "Accesoire", id: 4, volume: 0.8 },
    { value: "BOX-large", id: 5, volume: 1.8 },
    { value: "Option 6", id: 6, volume: 0.2 },
    { value: "Option 7", id: 7, volume: 0.8 },
    { value: "Option 8", id: 8, volume: 1.2 },
    { value: "Option 9", id: 9, volume: 0.1 },
  ];

  const [currentObject, setCurrentObject] = useState({});
  return (
    <StepperForm>
      <div style={{ flexDirection: "column" }}>
        <img src={addcommandimage}  alt="cover image"  style={{width:"40vw" , height:"15vh"}} />
        <p style={{ marginTop: 20 ,fontSize:"1.3rem" }}>Qu'est-ce qu'on bouge ?</p>
      </div>
      <form>
        <BlueTitle> Mes articles</BlueTitle>
        <SearchBox>
          <SearchInputContainer>
            <SearchIcon>&#128269;</SearchIcon>  
            <StyledInput
              type="text"
              list="searchOptions"
              placeholder="Search..."
              value={currentObject ? currentObject.value : ""}
              onInput={handleInputChange}
            />
            <datalist id="searchOptions">
              {options?.map((option) => (
                <option key={option.id} value={option.value} />
              ))}
            </datalist>
          </SearchInputContainer>
          <CountNumber>
            <span
              onClick={() => objetCount > 0 && setObjetCount(objetCount - 1)}
            >
              {"<"}
            </span>
            <p>{objetCount}</p>
            <span onClick={() => setObjetCount(objetCount + 1)}>{">"}</span>
          </CountNumber>
          <button onClick={addObject}>ADD</button>
        </SearchBox>



        {showWarning && <Warning>Selectionner un objet depuis la list</Warning>}
        <h3>{1} Véhicule</h3>
        <ItemsList>
          {panier?.map((objet, index) => (
            <div>
              <p>{`${objet?.count}x ${objet?.object.value}`}</p>
              <p>&#88;</p>
            </div>
          ))}
        </ItemsList>




        <BlueTitle >Choisissez le véhicule qui vous convient</BlueTitle>

<div className="cardSection">
<SmallCard>
<img src={cardImage}  alt="cover image" className="imgV"  />
</SmallCard>


<SmallCard>
<img src={cardImage2}  alt="cover image" className="imgV"  />
        </SmallCard>
        <SmallCard>
        <img src={cardImage3}  alt="cover image" className="imgV" />
        </SmallCard>
        <SmallCard>
        <img src={cardImage4}  alt="cover image" className="imgV" />
        </SmallCard>
</div>

   





        <BlueTitle >Dites-nous en plus sur les articles</BlueTitle>
        <TextArea name="" id="" aria-expanded="false"></TextArea>
        <h1>Accés</h1>
        <div className="accesContainer">
        <input
        className="AccesIn"
              type="text"
              list="searchOptions"
              placeholder="Veuillez choisir une option "
              value={currentObject ? currentObject.value : ""}
              onInput={handleInputChange}
            />
             <input
             className="AccesIn"
              type="text"
             
              placeholder="Quel étage?"
              
            />
        </div>
       

       <div className="finalBtn">
        <button className="nextButton" onClick={()=>setStep(3)}>Suivant</button>
       </div>
      </form>
    </StepperForm>
  );
};

export default Step2;

export const BlueTitle = styled.h1`
  color: ${(p) => p.theme.SECOND_TEXT_COLOR};
  
`;

export const Warning = styled.span`
  font-size: 10px;
  color: red;
  margin-top: -16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid gray;
  border-radius: 8px;
`;
export const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  div {
    color: ${(p) => p.theme.SECOND_TEXT_COLOR};
    margin: 6px;
    border: 1px solid ${(p) => p.theme.SECOND_TEXT_COLOR};
    padding: 6px 10px;
    border-radius: 8px;
    display: flex;
    align-items: baseline;
    gap: 26px;
    align-content: center;
    
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 36px;
  button {
    padding: 12px 24px;
    border-radius: 8px;
    background-color: ${(p) => p.theme.BACKGROUND_COLOR};
    color: ${(p) => p.theme.PRIMARY_COLOR};
    border: none;
    box-shadow: ${style.shadow.BOX_SHADOW_MEDIUM};
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
  /* display: inline-block; */
`;

const StyledInput = styled.input`
  flex: 1;
  padding-right: 24px; /* Adjust padding to accommodate the search icon */
  padding-left: 36px !important;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;
const StyledInput2 = styled.input`
flex: 1;
padding: 16px;
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;
const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
`;

export const CountNumber = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  /* background-color: aqua; */
  font-size: 18px;
  /* gap: 30px; */
  span {
    font-size: ${style.font.FONT_SIZE_LARGE};
    cursor: pointer;
    padding: 8px;
  }
`;
const SmallCard = styled.div`
// background-color: aquamarine;
    width: 9vw;
    height: 20vh;
   
    box-shadow: 0px 6.360688209533691px 19.082067489624023px 0px #0000001F;

    .imgV{
       width: 9vw;
    height: 20vh;
    @media (max-width: 1150px) {

width: 15vw;

 }
    }
@media (max-width: 1150px) {

width: 15vw;

 }


`;
