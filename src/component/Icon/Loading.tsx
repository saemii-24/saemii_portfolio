import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return <StyledText></StyledText>;
};

const StyledDrawLineAnimation = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }

`;

const StyledText = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid blue;
  border-top: 5px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${StyledDrawLineAnimation} 5s linear infinite;
`;

export default Loading;
