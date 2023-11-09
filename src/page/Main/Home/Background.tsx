import React from "react";
import styled from "styled-components";

const Background = () => {
  return (
    <StyledVideoBox className="container">
      <StyledVideo autoPlay muted loop>
        <source
          src={process.env.PUBLIC_URL + "/image/test.mp4"}
          type="video/mp4"
        />
      </StyledVideo>
    </StyledVideoBox>
  );
};

const StyledVideoBox = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -10;
  min-width: 1400px;
  min-height: 700px;
`;
const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  max-height: 100vh;
`;

export default Background;
