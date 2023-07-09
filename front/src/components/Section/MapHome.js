import React, { useEffect } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Buttonobtenez from "../Items/buttonobtenez";
import Arrow from "./../../assets/icons/arrowdown.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Autocomplete from "react-google-autocomplete";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapHome = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <PlienMap ref={props.MapRef}>
      <GoogleMapReact 
        className="mapcadre"
        apiKey="AIzaSyC7ckSip1a_oVGM1y7nPSWGUdTEPbkANIA"
        // bootstrapURLKeys={{ key: "AIzaSyC7ckSip1a_oVGM1y7nPSWGUdTEPbkANIA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        KmlLayerStatus
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        <Autocomplete
          apiKey={"AIzaSyC7ckSip1a_oVGM1y7nPSWGUdTEPbkANIA"}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
        />
      </GoogleMapReact>

      {/* ------ ------ -------  */}
      <Card data-aos="fade-up-left">
        <Address>
          <Input
            name="number"
            type="text"
            className="inputt"
            placeholder="Adresse de ramassage"
          />
          <Input
            name="number"
            type="text"
            className="inputt"
            placeholder="Adresse de dépôt"
          />
        </Address>
        <Calendar>
          <InputCalendar
            name="number"
            type="text"
            className="input_calender"
            placeholder="aujourd'hui"
          />
          <Dropdown className="dropdown">
            <option value="" disabled selected hidden>
              Heure
            </option>
            <option value="Student">heure</option>
            <option>Heure</option>
          </Dropdown>
          <Dropdown className="dropdown">
            <option value="" disabled selected hidden>
              Date
            </option>
            <option value="Student">date</option>
            <option>date</option>
          </Dropdown>
        </Calendar>
        <Buttonobtenez className="buttonobtenir" icon={Arrow} Textbody="Obtenez une estimation" />
      </Card>

      {/* ---------------------- */}
    </PlienMap>
  );
};

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

export default MapHome;

export const PlienMap = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  @media (max-width: 744px) {
    display: flex;
    height: 100vh;
    flex-direction: column-reverse;
  }
  
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  height: 50px;
  border-radius: 10px;
  border: transparent;
  @media (max-width:744px){
    height: 40px;
  }
`;

const Calendar = styled.div`
  padding: 0 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const InputCalendar = styled.input`
  padding: 5px;
  height: 50px;
  border-radius: 10px;
  border: transparent;
  color: #aaaaaa;
  @media (max-width:744px){
    width: 50%;
    height: 40px;
  }
`;

const Card = styled.div`
  padding: 20px;
  background-color: #302f4a33;
  border: 1px solid #aaa;
  border-radius: 24.75px;
  z-index: 99999;
  position: absolute;
  gap: 20px;
  display: flex;
  flex-direction: column;
  top: 180px;
  left: 60px;
  order: 4;

  @media (max-width: 744px) {
    width: 90vw;
    margin-inline: 3vw;
    /* padding: 10px 0 20px; */
    top: -300px;
    left: 0;
    gap: 10px;
    position: absolute;
    border-radius: 24.599px;
    border: 1.439px solid var(--body-text-2, #666);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(157.5341796875px);
  }
  .buttonobtenir {
    @media (max-width: 744px) {
      margin: 10px !important;
    }
  }
`;

const Dropdown = styled.select`
  height: 50px;
  border-radius: 10px;
  border: transparent;
  width: 75px;
  @media (max-width:744px){
    height: 40px;
  }
`;

const SubmitButton = styled.button`
  height: 43.92px;
  border-radius: 10px;
  border: transparent;
  padding: 10px;
  margin-left: 10px;
  width: 325px;
  background-color: #ffd400;
`;
