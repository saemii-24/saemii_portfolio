import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

const SubDetail = ({ thisData }: { thisData: DataType }) => {
  return (
    <StyledSubDetail>
      <StyledSubDetailTitle>DETAIL</StyledSubDetailTitle>
      <svg
        width="100%"
        style={{ marginBottom: "12vh" }}
        height="194"
        viewBox="0 0 2 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0L1.00001 194" stroke="#2F2F2F" />
      </svg>
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
                  height="194"
                  viewBox="0 0 2 194"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    margin:
                      index === thisData.detail!.length - 1
                        ? "12vh 0 5vh 0"
                        : "12vh 0",
                  }}
                >
                  <path d="M1 0L1.00001 194" stroke="#2F2F2F" />
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
  margin-top: 25vh;
`;

const StyledSubDetailTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 5vh;
`;

const StyledSubDetailBox = styled.div`
  width: 100%;
  .detailText {
    display: flex;
    width: 80vw;
    .detailContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40vw;
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 1.5;
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
        font-size: 1.2rem;
        line-height: 1.5;
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
`;

// const StyledSubDetailTitle = styled.div`
//   font-size: 1.5rem;
//   font-weight: 400;
// `;

// const StyledSubCircleTitle = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 10vh;
//   .circle {
//     position: relative;
//     width: 166px;
//     height: 166px;
//     div {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       width: 100%;
//       text-align: center;
//     }
//     svg {
//       position: absolute;
//     }
//   }
//   .circleLine {
//     transform: translateY(-40px);
//   }
//`;
export default SubDetail;
