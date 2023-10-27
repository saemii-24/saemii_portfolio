import React from "react";
import Background from "./Background";
import styled from "styled-components";
import Header from "component/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <MainCover />
      <Background />
    </div>
  );
};

const MainCover = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  clip-path: polygon(70% 15%, 100% 15%, 100% 100%, 70% 100%);
`;

export default Main;
