import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { DataType } from "../../../data/data";
import classNames from "classnames";

const SubPreview = ({ thisData }: { thisData: DataType }) => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <StyledSubPreview className="subPreview">
      <StyledContainer>
        <div
          className="mainImage"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              Object.values(thisData.previewPage![slide])
            })`,
          }}
        ></div>
        <StyledPagination>
          {thisData.previewPage!.map((data, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSlide(index);
                }}
              >
                <h3
                  className={classNames("pagination", {
                    active: slide === index,
                  })}
                >
                  {Object.keys(data)[0]}
                </h3>
                <svg
                  width="76"
                  height="18"
                  viewBox="0 0 76 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classNames("paginationLine", {
                    active: slide === index,
                  })}
                >
                  <path
                    d="M0.677734 9.15723H67.4536"
                    stroke={slide === index ? "#AA8C5A" : "#f8f8f8"}
                  />
                  {slide === index && (
                    <circle
                      cx="67.4531"
                      cy="9.15723"
                      r="7.6875"
                      stroke="#AA8C5A"
                    />
                  )}
                </svg>
              </div>
            );
          })}
        </StyledPagination>
      </StyledContainer>

      <StyledContainer style={{ height: "fit-content" }}>
        <StyledComment>
          <div>
            {thisData.language!.map((data, index) => {
              return (
                <div key={index} className="language">
                  <div>
                    <div className="languageTitle" style={{ color: "#f8f8f8" }}>
                      {Object.keys(data)[0]}
                    </div>
                    <div
                      className="languageDetail "
                      style={{ color: "#f8f8f8" }}
                    >
                      {Object.values(data)[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </StyledComment>
      </StyledContainer>
    </StyledSubPreview>
  );
};

const MainImageAnimation = keyframes`
    0%{
        opacity:0    
    }
    100%{

opacity:1}
`;
const StyledSubPreview = styled.div`
  width: 100%;
  width: 100%;
  padding-top: 25vh;
  padding-bottom: 25vh;
  margin-top: 25vh;
  background-color: #f8f8f8;
  position: relative;
`;
const StyledContainer = styled.div`
  width: 1400px;
  height: calc(1400px * 0.8 * 9 / 16);
  margin: 0 auto;
  position: relative;
  .mainImage {
    width: calc(1400px * 0.8);
    padding-bottom: calc(1400px * 0.8 * 9 / 16);
    margin: 0 auto;
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation: ${MainImageAnimation} 1s;
  }
`;

const paginationLineAnimation = keyframes`
    0%{
        stroke-dasharray: 100;
        stroke-dashoffset:100;
    }
    100%{
        stroke-dasharray: 100;
        stroke-dashoffset:0;
    }
`;

const StyledPagination = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  top: 2vh;
  left: 4%;
  cursor: pointer;
  div {
    display: flex;
    /* z-index: -1; */
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .pagination {
    font-weight: 500;
    cursor: pointer;
    color: #f8f8f8;
    display: flex;
    gap: 1rem;
    &.active {
      color: #aa8c5a;
    }
  }
  .paginationLine {
    z-index: -1;
    &.active {
      z-index: 0;
      path {
        animation: ${paginationLineAnimation} 1s ease;
      }
      circle {
        transform: rotate(180deg);
        transform-origin: 88%;
        animation: ${paginationLineAnimation} 2s 0.3s ease;
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation-fill-mode: both;
      }
    }
  }
`;

const StyledComment = styled.div`
  width: calc(1400px * 0.8);
  margin: 0 auto;
  /* background-color: orange; */
  margin-top: 3rem;
  .language {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    overflow: hidden;
    & > div {
      display: flex;
      gap: 10%;
    }
    .languageTitle {
      min-width: 10%;
      font-size: 2.4rem;
      font-weight: 300;
    }
    .languageDetail {
      font-weight: 300;
    }
  }
`;
export default SubPreview;
