/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { DataType } from "../../../data/data";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const SubPreview = ({
  idNum,
  thisData,
}: {
  idNum: number;
  thisData: DataType;
}) => {
  const [slide, setSlide] = useState<number>(0);
  //만약 사용자가 subBottomNav를 클릭하면 (true라면) slide는 0이 되어야 한다.
  const subBottomNavClick: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.subBottomNavClick
  );

  useEffect(() => {
    if (subBottomNavClick === true) {
      setSlide(0);
    }
  }, [subBottomNavClick]);

  //gsap
  const subPreviewRef = useRef<HTMLDivElement | null>(null);
  const languageChildRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".subPreview", {
        backgroundColor: "#2f2f2f",
        duration: 0.3,
        scrollTrigger: {
          trigger: ".subPreview",
          start: "top 80%",
        },
      });

      gsap.fromTo(
        ".languageChild",
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".subPreview",
            start: "top 30%",
          },
        }
      );
    });
    return () => {
      ctx.revert();
    };
  }, [idNum]);

  return (
    <StyledSubPreview className="subPreview" ref={subPreviewRef}>
      <StyledContainer>
        <Link to={Object.values(thisData.link[0])[0]} target="_blank">
          <div className="mainImage">
            <img
              style={{ width: "100%" }}
              src={process.env.PUBLIC_URL + thisData.previewPage}
              alt={thisData.subTitle + " 미리보기 페이지"}
            />
          </div>
        </Link>
        {/* <StyledPagination>
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
        </StyledPagination> */}
      </StyledContainer>

      <StyledContainer style={{ height: "fit-content" }}>
        <StyledComment>
          <div>
            <StyledLanguageTitles>
              <div>language/library</div>
              <div>사용 이유</div>
            </StyledLanguageTitles>
            {thisData.language!.map((data, index) => {
              return (
                <div key={index} className="language">
                  <div className="languageChild" ref={languageChildRef}>
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
    height: calc(1400px * 0.8 * 9 / 16);
    margin: 0 auto;
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .mainImage::-webkit-scrollbar {
    width: 20px;
  }
  .mainImage::-webkit-scrollbar-thumb {
    background-color: #f8f8f8;
    border-radius: 100px;
    border: 7px solid #2f2f2f;
  }
`;

// const paginationLineAnimation = keyframes`
//     0%{
//         stroke-dasharray: 100;
//         stroke-dashoffset:100;
//     }
//     100%{
//         stroke-dasharray: 100;
//         stroke-dashoffset:0;
//     }
// `;

// const StyledPagination = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   top: 2vh;
//   left: 4%;
//   cursor: pointer;
//   div {
//     display: flex;
//     /* z-index: -1; */
//     align-items: center;
//     justify-content: space-between;
//     gap: 1rem;
//   }
//   .pagination {
//     font-weight: 500;
//     cursor: pointer;
//     color: #f8f8f8;
//     display: flex;
//     gap: 1rem;
//     &.active {
//       color: #aa8c5a;
//     }
//   }
//   .paginationLine {
//     z-index: -1;
//     &.active {
//       z-index: 0;
//       path {
//         animation: ${paginationLineAnimation} 1s ease;
//       }
//       circle {
//         transform: rotate(180deg);
//         transform-origin: 88%;
//         animation: ${paginationLineAnimation} 2s 0.3s ease;
//         stroke-dasharray: 100;
//         stroke-dashoffset: 100;
//         animation-fill-mode: both;
//       }
//     }
//   }
// `;

const StyledComment = styled.div`
  width: calc(1400px * 0.8);
  margin: 0 auto;
  /* background-color: orange; */
  margin-top: 3rem;
  .language {
    font-size: 1.2rem;
    margin-top: 1rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    overflow: hidden;
    & > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .languageTitle {
      font-size: 1.2rem;
      font-weight: 300;
    }
    .languageDetail {
      font-weight: 300;
      width: 80%;
      word-break: keep-all;
    }
  }
`;

const StyledLanguageTitles = styled.div`
  color: #f8f8f8;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div:nth-child(2) {
    width: 80%;
  }
  div {
    color: #aa8c5a;
  }
`;
export default SubPreview;
