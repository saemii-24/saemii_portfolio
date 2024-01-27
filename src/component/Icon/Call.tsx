import React from "react";
import styled from "styled-components";
import "./Icon.scss";

const Call = ({ text }: { text: string }) => {
  return (
    <StyledCall className="call-Icon">
      <StyledCallIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_604_10)">
            <circle cx="12.5" cy="12.5" r="12" stroke="black" />
            <path
              d="M6 8.99864C6 6.66046 7.84095 5.7103 8.94552 6.07592C10.2083 6.49392 10.7865 8.26768 10.7865 9.72932C10.7865 10.3139 8.57733 10.558 8.57733 10.8253C8.57733 12.8712 11.2774 15.8183 12.6274 17.0361C14.4684 14.8441 14.8366 15.2094 16.3093 16.6708C17.8274 18.1771 16.6775 20.3242 14.4684 19.9589C8.57733 18.4975 6 11.9214 6 8.99864Z"
              stroke="black"
            />
            <path
              className="call-path__first"
              d="M13.9977 7.31087C15.8229 7.60269 19.298 9.28143 18.5977 13.6618"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              className="call-path__second"
              d="M13.9267 9.1221C15.0882 9.3078 17.2997 10.3761 16.854 13.1636"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              className="call-path__third"
              d="M13.6094 11.1131C14.3954 10.984 15.2318 12.1386 14.8639 12.8452"
              stroke="black"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_604_10">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </StyledCallIcon>
      <StyledCallText>{text}</StyledCallText>
    </StyledCall>
  );
};

const StyledCall = styled.div`
  cursor: pointer;
`;
const StyledCallIcon = styled.div`
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

const StyledCallText = styled.h6`
  font-size: 1rem;
`;
export default Call;
