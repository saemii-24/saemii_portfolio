import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";
import classNames from "classnames";

const SubDetail = ({ thisData }: { thisData: DataType }) => {
  return (
    <StyledSubDetail className="subDetail">
      <StyledSubDetailTitle className="subDetailTitle">
        <div>DETAIL</div>
      </StyledSubDetailTitle>
      <div className="allDetailBox">
        {thisData.detail!.map((data, index) => {
          return (
            <StyledSubDetailBox key={index}>
              <StyledSubPage>{data.page} page</StyledSubPage>
              <div
                className={classNames("detailText", {
                  lastDetailBox: index === thisData.detail.length - 1,
                })}
              >
                <div className="detailContent">
                  {data.name
                    .split("\n")
                    .map((line: string, thisIndex: number) => (
                      <StyledSubDetailBoxTitle
                        key={thisIndex}
                        className={"detailName " + `detailName${index + 1}`}
                      >
                        {line} <br />
                      </StyledSubDetailBoxTitle>
                    ))}
                  <div
                    className={`detailBoxContent detailBoxContent${index + 1}`}
                  >
                    {data.content
                      .split("\n")
                      .map((line: string, index: number) => (
                        <span key={index}>
                          {line} <br />
                        </span>
                      ))}
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
  margin-bottom: 25vh;
`;

const StyledSubDetailTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 5vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  div {
    font-size: 3rem;
    font-weight: 300;
  }
`;

const StyledSubDetailBox = styled.div`
  width: 1400px;
  margin: 0 auto;
  position: relative;
  .detailText {
    display: flex;
    padding: 10vh 0;
    border-top: 1px solid #2f2f2f;
    .detailContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 300;
      font-size: 1.2rem;
    }
    .detailImg {
      width: 40vw;
      height: calc(40vw * 9 / 16);
      background-position: center 0;
      background-size: cover;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.02);
      flex-shrink: 0;
      border-radius: 13px;
    }
    .detailBoxContent {
      width: 70%;
      word-break: keep-all;
      line-height: 155%;
    }
  }
  .lastDetailBox {
    border-bottom: 1px solid #2f2f2f;
  }
`;

const StyledSubDetailBoxTitle = styled.div`
  margin-bottom: 0.5rem;
  color: transparent;
  width: fit-content;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  background-blend-mode: screen;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
  word-break: keep-all;
`;

const StyledSubPage = styled.h6`
  font-size: 1.2rem;
  font-weight: 500;
  display: inline-block;
  position: absolute;
  top: 1.5vh;
`;
export default SubDetail;
