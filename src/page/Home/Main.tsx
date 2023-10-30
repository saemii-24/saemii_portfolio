/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useRef } from "react";
import Background from "./Background";
import styled from "styled-components";
import Header from "component/Header/Header";
import Up from "component/Icon/Up";
import QuestionMark from "component/Icon/QuestionMark";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./Home.scss";

// interface GSAPAnimation {
//   element: HTMLElement;
//   options: {
//     x?: number;
//     opacity?: number;
//     stagger?: number;
//     y?: number;
//     duration?: number;
//     ease?: string;
//   };
// }

const Main = () => {
  useEffect(() => {
    //mainTitle Split
    const mainTitleChars: SplitType = new SplitType(".mainTitle", {
      types: "chars",
    });
    const mainTitle: HTMLElement[] | null = mainTitleChars.chars;

    //subTitle Split
    const subTitleSplitLines: SplitType = new SplitType(".subtitle", {
      types: "lines",
      lineClass: "splitChild",
    });
    const subTitleLines: HTMLElement[] | null = subTitleSplitLines.lines;

    //about Split
    const aboutSplitLines: SplitType = new SplitType(".about", {
      types: "lines",
      lineClass: "splitChild",
    });
    const aboutLines: HTMLElement[] | null = aboutSplitLines.lines;

    //Gsap 애니메이션
    //mainTitle Animation
    gsap.fromTo(
      mainTitle,
      {
        y: 250,
      },
      {
        y: 0,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
    //subTitle Animation
    gsap.fromTo(
      ".subtitle span",
      { y: 150 },
      {
        y: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      ".about .smallTitle__child",
      { y: 100 },
      {
        y: 0,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    // gsap.fromTo(
    //   ".about .smallTitle__text",
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 0.4,
    //     delay: 0.7,
    //     ease: "power1.in",
    //   }
    // );
    gsap.fromTo(
      ".about span",
      {
        y: 250,
      },
      {
        y: 0,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".update .smallTitle__child",
      { y: 100 },
      {
        y: 0,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".update .smallTitle__text",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        delay: 0.7,
        ease: "power1.in",
      }
    );
  }, []);

  return (
    <div>
      <MainLine
        width="2"
        height="147"
        viewBox="0 0 2 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.513428 0V146.576" stroke="#2F2F2F" className="mainLine" />
      </MainLine>
      <div className="header">
        <Header />
      </div>
      <div className="inner">
        <MainTitle className="type mainTitle">PORTFOLIO</MainTitle>

        <BottomText>
          <div>
            <SubTitle className="type subtitle">
              <span>FRONTEND</span>
              <br />
              <span>DEVELOPER</span>
            </SubTitle>
          </div>
          <div className="about" style={{ maxWidth: "440px" }}>
            <SmallTitle className="smallTitle__parent">
              <div className="smallTitle__child">
                <QuestionMark />
              </div>
            </SmallTitle>
            <AboutText className="about smallTitle__text">
              <span>
                안녕하세요. 새로운 것의 미학을 추구하는 신입 프론트엔드 개발자
              </span>
              <span>
                새미입니다. 늘 업데이트 되는 프론트엔드 기술이 주는 새로움이란
              </span>
              <span>즐거움에 푹 빠져있습니다.</span>
            </AboutText>
          </div>
          <div className="update">
            <SmallTitle className="smallTitle__parent">
              <div className="smallTitle__child">
                <Up />
              </div>
            </SmallTitle>
            <div className="update smallTitle__text">
              마지막 업데이트 2023.11.30.
            </div>
          </div>
        </BottomText>
      </div>
      <MainCover />
      <Background />
    </div>
  );
};

const MainCover = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 10%, 75% 10%, 75% 100%, 0 100%);
  z-index: -1;
`;
const MainLine = styled.svg`
  position: absolute;
  top: 0;
  right: 40%;
`;
const MainTitle = styled.h1`
  font-size: 11rem;
  font-weight: 600;
  top: 22%;
  position: absolute;
  margin-left: -10px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;
const SubTitle = styled.div`
  font-size: 3.4rem;
  font-weight: 800;
  margin-top: -18px;
  .splitChild {
    overflow: hidden;
    height: 66px;
    span {
      height: 60px;
      line-height: 60px;
    }
  }
`;
const SmallTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h4 {
      font-weight: 600;
      margin-top: -1px;
    }
  }
`;
const BottomText = styled.div`
  width: 58%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  margin-bottom: 10vh;
  font-weight: 400;
`;
const AboutText = styled.div`
  .splitChild {
    overflow: hidden;
  }
`;
export default Main;
