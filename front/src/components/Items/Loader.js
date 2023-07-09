import styled from "styled-components";

const Loader = () => (
  <LoaderContainer>
    <div className="loader" />
  </LoaderContainer>
);

export default Loader;

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25243a;
  z-index: 99999999999999999999;
  .loader {
    width: 16px;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    display: block;
    position: relative;
    transform: translate(-150%, -20px);
    color: #ffd400;
    box-sizing: border-box;
    animation: animloader 2s ease infinite;
  }

  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    color: #ffd400;
    position: absolute;
    left: 30px;
    top: 0;
    animation: animloader 2s 0.2s ease infinite;
  }

  .loader::before {
    animation-delay: 0.4s;
    left: 60px;
  }

  @keyframes animloader {
    0% {
      top: 0;
      color: #ffd400;
    }

    50% {
      top: 30px;
      color: rgba(255, 255, 255, 0.2);
    }

    100% {
      top: 0;
      color: #ffd400;
    }
  }
`;
