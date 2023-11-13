import React from "react";
import styled from "styled-components";
import "./Icon.scss";

const QuestionMark = () => {
  return (
    <StyledQuestionMark className="questionMark">
      <StyledQuestionMarkIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12" stroke="black" />
          <path
            className="questionMarkPath"
            d="M11.795 18.195C11.345 18.195 11.03 17.88 11.03 17.43C11.03 16.995 11.345 16.695 11.795 16.695C12.23 16.695 12.53 16.995 12.53 17.43C12.53 17.88 12.23 18.195 11.795 18.195ZM8.765 9.39C9.29 7.995 10.64 7.02 12.05 7.02C14.045 7.02 15.38 8.34 15.29 10.23C15.245 11.205 14.735 12.165 13.355 13.2C12.56 13.785 12.335 14.235 12.35 15.405H11.24C11.225 13.95 11.63 13.08 12.695 12.3C13.835 11.445 14.135 10.86 14.18 10.17C14.24 8.97 13.355 8.13 12.05 8.13C11.105 8.13 10.19 8.805 9.815 9.78L8.765 9.39Z"
            fill="black"
          />
        </svg>
      </StyledQuestionMarkIcon>
      <StyledQuestionMarkText>about</StyledQuestionMarkText>
    </StyledQuestionMark>
  );
};

const StyledQuestionMark = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledQuestionMarkIcon = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  cursor: pointer;
`;
const StyledQuestionMarkText = styled.h6`
  font-size: 1rem;
`;
export default QuestionMark;
