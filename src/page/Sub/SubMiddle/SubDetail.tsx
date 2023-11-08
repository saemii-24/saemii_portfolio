import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

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
  div {
    font-size: 5rem;
    font-weight: 200;
  }
`;

const StyledSubDetailBox = styled.div`
  width: 1400px;
  margin: 0 auto;
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
    }
    .detailBoxContent {
      width: 70%;
      word-break: keep-all;
      line-height: 155%;
    }
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

export default SubDetail;
