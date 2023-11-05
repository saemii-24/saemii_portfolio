import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

const SubDetail = ({ thisData }: { thisData: DataType }) => {
  return (
    <StyledSubDetail>
      <div
        style={{
          margin: "0 auto",
          display: "inline-block",
          textAlign: "center",
          borderBottom: " 1px solid black",
          fontWeight: "300",
          fontSize: "2rem",
        }}
      >
        DETAIL
      </div>
      {/* <StyledSubCircleTitle>
        <div className="circle">
          <svg
            width="166"
            height="166"
            viewBox="0 0 166 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="83.0001" cy="82.8419" r="82.1686" stroke="#2f2f2f" />
          </svg>
          <StyledSubDetailTitle>DETAIL</StyledSubDetailTitle>
        </div>
        <svg
          width="2"
          height="268"
          viewBox="0 0 2 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="circleLine"
        >
          <path d="M1 0.384277L0.999988 267.64" stroke="#2f2f2f" />
        </svg>
      </StyledSubCircleTitle> */}

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
                {index !== thisData.detail!.length - 1 && (
                  <svg
                    width="100%"
                    height="253"
                    viewBox="0 0 2 253"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 0.0195312L1.00001 252.719" stroke="#2F2F2F" />
                  </svg>
                )}
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
  margin: 15vh 0;
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
