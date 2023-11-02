import React from "react";
import styled from "styled-components";
import "./Icon.scss";

const Mail = () => {
  return (
    <StyledMail className="mail">
      <StyledMailIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12" stroke="#2F2F2F" />
        </svg>
        <svg
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.679199 0.657227V10.1604H14.8557V0.657227L7.74146 5.53876L0.73183 0.699949"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mailPath1"
          />
          <path
            d="M0.679199 0.657227H14.793"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mailPath2"
          />
        </svg>
      </StyledMailIcon>
      <StyledMailText>MAIL</StyledMailText>
    </StyledMail>
  );
};

const StyledMail = styled.div`
  cursor: pointer;
`;
const StyledMailIcon = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
  }
`;

const StyledMailText = styled.h6`
  font-size: 1rem;
`;

export default Mail;
