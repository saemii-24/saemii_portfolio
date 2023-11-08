import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

const SubDetail = ({ thisData }: { thisData: DataType }) => {
  return (
    <StyledSubDetail className="subDetail">
      <StyledSubDetailTitle className="subDetailTitle">
        <div>DETAIL</div>
      </StyledSubDetailTitle>
      <svg
        width="100%"
        style={{ marginBottom: "12vh" }}
        height="194"
        viewBox="0 0 2 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0L1.00001 194"
          stroke="#2F2F2F"
          className="line1 subVerticalLine"
        />
      </svg>
      <div>
        {thisData.detail!.map((data, index) => {
          return (
            <StyledSubDetailBox key={index}>
              <div className="detailText">
                <div className="detailContent">
                  <StyledSubDetailBoxTitle
                    className={"detailName " + `detailName${index + 1}`}
                  >
                    {data.name}
                  </StyledSubDetailBoxTitle>
                  <div
                    className={`detailBoxContent detailBoxContent${index + 1}`}
                  >
                    {data.content}
                  </div>
                </div>
                <div
                  className={"detailImg " + `detailImg${index + 1}`}
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + data.image
                    })`,
                  }}
                ></div>
              </div>
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
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
`;

const StyledSubDetailBox = styled.div`
  width: 1400px;
  margin: 0 auto;
  .detailText {
    display: flex;
    .detailContent {
      display: flex;
      flex-direction: column;
      justify-content: center;

      font-weight: 300;
      font-size: 1.2rem;
      line-height: 1.5;
    }
    .detailImg {
      width: 40vw;
      height: calc(40vw * 9 / 16);
      background-position: center 0;
      background-size: cover;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.02);
      flex-shrink: 0;
    }
    .detailBoxContent {
      width: 70%;
      word-break: keep-all;
    }
  }
  &:nth-of-type(2n) {
    .detailText {
      .detailContent {
        padding-right: 3rem;
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: end;
        align-items: flex-end;
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
  color: transparent;

  width: fit-content;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  background-blend-mode: screen;
`;

export default SubDetail;
