import React from "react";
import styled from "styled-components";

const Link = () => {
  return (
    <StyledGo>
      <StyledCircle
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.5" cy="12.5" r="12" stroke="#2F2F2F" />
      </StyledCircle>
      <StyledArrow
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow1"
      >
        <path
          d="M10.665 6.48633L14.6635 10.4848L10.665 14.4833"
          stroke="#2f2f2f"
        />
        <path
          d="M14.083 10.9849C14.3592 10.9849 14.583 10.761 14.583 10.4849C14.583 10.2087 14.3592 9.98486 14.083 9.98486L14.083 10.9849ZM14.083 9.98486L5.53757 9.98486L5.53757 10.9849L14.083 10.9849L14.083 9.98486Z"
          fill="#2f2f2f"
        />
      </StyledArrow>
      <StyledArrow
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow2"
      >
        <path
          d="M10.665 6.48633L14.6635 10.4848L10.665 14.4833"
          stroke="#2f2f2f"
        />
        <path
          d="M14.083 10.9849C14.3592 10.9849 14.583 10.761 14.583 10.4849C14.583 10.2087 14.3592 9.98486 14.083 9.98486L14.083 10.9849ZM14.083 9.98486L5.53757 9.98486L5.53757 10.9849L14.083 10.9849L14.083 9.98486Z"
          fill="#2f2f2f"
        />
      </StyledArrow>
    </StyledGo>
  );
};

const StyledCircle = styled.svg`
  position: absolute;
`;
const StyledArrow = styled.svg`
  position: absolute;
  width: 25px;
  height: 25px;
`;
const StyledGo = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  overflow: hidden;
`;

export default Link;
