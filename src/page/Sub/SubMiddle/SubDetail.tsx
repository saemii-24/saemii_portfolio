import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

const SubDetail = ({ thisData }: { thisData: DataType }) => {
  return (
    <StyledSubDetail>
      <StyledSubDetailTitle>주요 기능</StyledSubDetailTitle>
      <div>
        {thisData.detail!.map((data, index) => {
          return (
            <StyledSubDetailBox key={index}>
              <div className="detailText">
                <div className="detailContent">
                  <StyledSubDetailBoxTitle className="detailName">
                    {data.name}
                  </StyledSubDetailBoxTitle>
                  <div>{data.content}</div>
                </div>
                <div
                  className="detailImg"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + data.image
                    })`,
                  }}
                ></div>
              </div>
              <StyledSubDetailLineBox>
                <svg
                  width="100%"
                  height="253"
                  viewBox="0 0 2 253"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0.0195312L1.00001 252.719" stroke="#2F2F2F" />
                </svg>
              </StyledSubDetailLineBox>
            </StyledSubDetailBox>
          );
        })}
      </div>
    </StyledSubDetail>
  );
};

const StyledSubDetail = styled.div`
  width: 100%;
`;

const StyledSubDetailTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
`;

const StyledSubDetailBox = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  width: 100%;
  .detailText {
    display: flex;
    width: 80vw;
    .detailContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40vw;
    }
    .detailImg {
      width: 40vw;
      height: calc(40vw * 9 / 16);
    }
  }
  &:nth-of-type(2n) {
    .detailText {
      margin-left: 20vw;
      .detailContent {
        padding-right: 3rem;
        .detailName {
          align-self: flex-end;
        }
      }
    }
  }
  &:nth-of-type(2n + 1) {
    .detailContent {
      order: 1;
      padding-left: 3rem;
    }
  }
`;

const StyledSubDetailBoxTitle = styled.div`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

const StyledSubDetailLineBox = styled.div`
  width: 100%;
  margin: 15vh 0;
`;
export default SubDetail;
