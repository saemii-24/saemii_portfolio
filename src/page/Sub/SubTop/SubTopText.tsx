import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

const SubTopText = ({ thisData }: { thisData: DataType }) => {
  console.log(thisData);
  return (
    <StyledTextContainer>
      <div>
        {thisData.develop!.map((data, index) => {
          return (
            <div key={index}>
              <StyledTextTitle>{Object.keys(data)[0]}</StyledTextTitle>
              <StyledContentTitle>{Object.values(data)[0]}</StyledContentTitle>
            </div>
          );
        })}
      </div>
    </StyledTextContainer>
  );
};

const StyledTextContainer = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  & > div {
    padding-left: calc(30vw - ((100vw - 1400px - -17px) / 2));
    position: relative;
    right: 0;
  }
`;

const StyledTextTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #aa8c5a;
  font-weight: 400;
`;

const StyledContentTitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
`;
export default SubTopText;
