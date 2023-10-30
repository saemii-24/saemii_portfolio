import React from "react";
import styled from "styled-components";
import "./Icon.scss";

const Up = () => {
  return (
    <StyledUp className="up">
      <StyledUpIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12" stroke="#2F2F2F" />
          <path
            className="upPath1"
            d="M7.77331 15.5L12.5 7.9429L17.2267 15.5H7.77331Z"
            stroke="#2F2F2F"
          />
          <path
            className="upPath2"
            d="M7.77331 15.5L12.5 7.9429L17.2267 15.5H7.77331Z"
            stroke="#2F2F2F"
          />
        </svg>
      </StyledUpIcon>
      <StyledUpText>update</StyledUpText>
    </StyledUp>
  );
};

const StyledUp = styled.div`
  cursor: pointer;
`;
const StyledUpIcon = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;
const StyledUpText = styled.h6`
  font-size: 1rem;
`;
export default Up;
