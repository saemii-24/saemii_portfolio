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
                  <div className={`detailBoxContent${index + 1}`}>
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
                  <path
                    d="M1 0L1.00001 194"
                    stroke="#2F2F2F"
                    className={"line" + (index + 2) + " " + "subVerticalLine"}
                  />
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
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
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
      background-position: center 0;
      background-size: cover;
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
  color: transparent;

  width: fit-content;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  background-blend-mode: screen;
`;

const StyledSubDetailLineBox = styled.div`
  width: 100%;
`;

export default SubDetail;
