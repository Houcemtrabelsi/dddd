import React, { useState } from "react";
import backgroundImage from "./../../assets/images/block.png";
import StepperLayout, { Stepper } from "../../components/Navigation/Stepper";
import Step2 from "../DashClient/AddCommand/Step2";
import EstimateStep1 from "../../components/Section/EstimateStep1";
const GetEstimate = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {/* <div className="text">
      <div className="heading_GetEstimate">Commencer</div>
      <div className="GetEstimate_description">
      Inscrivez-vous sur notre site Web ou notre application et découvrez des solutions logistiques transparentes pour tous vos besoins de transport. Rejoignez Hezli aujourd'hui.
      </div>
      <button className="details">EN SAVOIR PLUS</button>
    </div> */}{" "}
      <StepperLayout step={step} >
      <h1><button onClick={()=>setStep(2)}>next</button></h1>
        <Step2 setStep={setStep}/>
        <h1>Step 2</h1>
        <h1>Step 3</h1>
        <h1>Step 4</h1>
   
      </StepperLayout>
      {/* <EstimateStep1 /> */}
      {/* <Stepper /> */}
    </div>
  );
};
export default GetEstimate;
