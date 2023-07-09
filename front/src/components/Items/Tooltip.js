import React , {useState} from "react";
import styled  from "styled-components";
const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltips = styled.div`
  position: absolute;
  top: calc(-100% - 50px);
  transform: translateX(-50%);
  background-color: #E5E7E9  ;
  color: #25243A ;
  padding: 10px;
  border-radius: 4px;
  z-index: 1;
  min-width: 200px;
`;
export const Tooltip = ({ text, children}) => {
  const [isVisible, setIsVisible] = useState(false);
   return (
    <TooltipContainer
       className="tooltip-container"
       onMouseEnter={() => setIsVisible(true)}
       onMouseLeave={() => setIsVisible(false)}
   >
     {children}
     {isVisible && <Tooltips className="tooltip"> {text} </Tooltips>}
     
    </TooltipContainer>
   
   );
};
