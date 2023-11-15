import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
// import Header from "component/Header/Header";
import Up from "component/Icon/Up";
import QuestionMark from "component/Icon/QuestionMark";
import { gsap } from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const homeTitleRef = useRef<HTMLDivElement | null>(null);
  const subTitleRef = useRef<HTMLDivElement | null>(null);
  // const subTitleChildrenRef = useRef<HTMLDivElement | null>(null);
  const aboutChildRef = useRef<HTMLDivElement | null>(null);
  const updateChildRef = useRef<HTMLDivElement | null>(null);
  const homeCoverRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const updateSmallTitleRef = useRef<HTMLDivElement | null>(null);
  const aboutSmallTitleRef = useRef<HTMLDivElement | null>(null);

  //gsap
  useEffect(() => {
    //homeTitle Split
    const homeTitleChars: SplitType = new SplitType(homeTitleRef.current!, {
      types: "chars",
    });
    const homeTitle: HTMLElement[] | null = homeTitleChars.chars;

    const subTitleLine: SplitType = new SplitType(subTitleRef.current!, {
      types: "lines",
    });
    const subTitle: HTMLElement[] | null = subTitleLine.lines;

    if (
      subTitleRef.current &&
      aboutChildRef.current &&
      updateChildRef.current
    ) {
      //Gsap 애니메이션
      //homeTitle Animation
      gsap.fromTo(
        homeTitle,
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
        subTitle,
        { y: 150 },
        {
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        aboutChildRef.current,
        { y: 100 },
        {
          y: 0,
          duration: 1.5,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        aboutSmallTitleRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          delay: 0.7,
          ease: "power1.in",
        }
      );

      gsap.fromTo(
        updateChildRef.current,
        { y: 100 },
        {
          y: 0,
          duration: 1.5,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        updateSmallTitleRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          delay: 0.7,
          ease: "power1.in",
        }
      );

      const timeline = gsap.timeline({});

      timeline.to(homeCoverRef.current, {
        ease: "power1.Out",
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 75% 0%, 75% 100%, 0 100%)",
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <StyledHome className="home" ref={homeRef}>
      <HomeLine
        width="2"
        height="147"
        viewBox="0 0 2 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.513428 0V146.576" stroke="#2F2F2F" className="homeLine" />
      </HomeLine>

      <div className="inner">
        <HomeTitle className="type homeTitle" ref={homeTitleRef}>
          PORTFOLIO
        </HomeTitle>

        <BottomText>
          <div>
            <SubTitle className="type subtitle" ref={subTitleRef}>
              <span>FRONTEND</span>
              <br />
              <span>DEVELOPER</span>
            </SubTitle>
          </div>
          <div className="about" style={{ maxWidth: "440px" }}>
            <SmallTitle className="smallTitle__parent">
              <div className="smallTitle__child" ref={aboutChildRef}>
                <QuestionMark />
              </div>
            </SmallTitle>
            <AboutText
              className="about smallTitle__text"
              ref={aboutSmallTitleRef}
            >
              안녕하세요! 역동적인 현대를 사랑하는 신입 프론트엔드 개발자
              <br />
              새미입니다. 사용자를 생각하며 현대 기술의 가치를 표현하는 <br />
              프론트엔드 개발을 좋아합니다.
            </AboutText>
          </div>
          <div className="update">
            <SmallTitle className="smallTitle__parent">
              <div className="smallTitle__child" ref={updateChildRef}>
                <Up />
              </div>
            </SmallTitle>
            <div className="update smallTitle__text" ref={updateSmallTitleRef}>
              마지막 업데이트 2023.11.15.
            </div>
          </div>
        </BottomText>
      </div>
      <HomeCover className="homeCover" ref={homeCoverRef} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  flex-shrink: 0;
  min-width: 1400px;
  min-height: 700px;
`;
const HomeCover = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #f8f8f8;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 10%, 75% 10%, 75% 100%, 0 100%);
  z-index: -1;
`;

const StyledDrawLineAnimation = keyframes`
    0% {
        stroke-dashoffset: 500;
    }

    100% {
        stroke-dashoffset: 0;
    }

`;
const HomeLine = styled.svg`
  position: absolute;
  top: 0;
  right: 40%;
  .homeLine {
    stroke-dasharray: 500;
    animation: ${StyledDrawLineAnimation} 1.8s
      cubic-bezier(0.73, 0.18, 0.84, 0.58);
  }
`;
const HomeTitle = styled.h1`
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
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  div {
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
  gap: 50px;
  min-width: 1030px;
`;
const AboutText = styled.div`
  .splitChild {
    overflow: hidden;
  }
`;
export default Main;
