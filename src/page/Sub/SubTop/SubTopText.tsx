import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

const SubTopText = ({ thisData }: { thisData: DataType }) => {
  return (
    <StyledTextContainer>
      <div>
        {thisData.develop!.map((data, index) => {
          return (
            <div key={index} className="subTextBox">
              <div>
                <StyledTextTitle className="subTextTitle">
                  {Object.keys(data)[0]}
                </StyledTextTitle>
                <StyledContentTitle className="subTextContent">
                  {Object.values(data)[0]
                    .split("\n")
                    .map((line: string, thisIndex: number) => (
                      <span key={thisIndex}>
                        {line}
                        <br />
                      </span>
                    ))}
                </StyledContentTitle>
              </div>
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
    padding-left: calc(30vw - ((100vw - 1400px) / 2));
    position: relative;
    right: 0;
  }
  .subTextBox {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    overflow: hidden;
  }
`;

const StyledTextTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #aa8c5a;
  font-weight: 400;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  div {
    color: inherit;
  }
`;

const StyledContentTitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  word-break: keep-all;
  div {
    color: inherit;
  }
`;
export default SubTopText;
