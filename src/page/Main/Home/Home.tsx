import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Up from "component/Icon/Up";
import QuestionMark from "component/Icon/QuestionMark";
import { gsap } from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import Call from "component/Icon/Call";
gsap.registerPlugin(ScrollTrigger);
import { Link } from "react-router-dom";

const Main = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const homeTitleRef = useRef<HTMLDivElement | null>(null);
  const homeCoverRef = useRef<HTMLDivElement | null>(null);

  //gsap
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (homeRef.current) {
        //homeTitle Animation
        //homeTitle Split
        const homeTitleChars: SplitType = new SplitType(homeTitleRef.current!, {
          types: "chars",
        });
        const homeTitle: HTMLElement[] | null = homeTitleChars.chars;
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
        //background open Animation
        //under text
        gsap.fromTo(
          ".under__title",
          { y: 100 },
          {
            y: 0,
            delay: 0.3,
            duration: 1.5,
            ease: "power4.out",
          }
        );

        gsap.fromTo(
          ".under__text",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            delay: 1,
            ease: "power1.in",
          }
        );

        gsap.to(homeCoverRef.current, {
          ease: "power1.Out",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 75% 0%, 75% 100%, 0 100%)",
          scrollTrigger: {
            trigger: homeRef.current,
            start: "top top",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
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
          <div className="main-contact">
            <SmallTitle className="smallTitle__parent">
              <div className="smallTitle__child under__title">
                <Call text={"contact"} />
              </div>
            </SmallTitle>
            <AboutText className="about smallTitle__text under__text">
              <Link to="https://github.com/saemii-24" target="_blank">
                <StyledContact>Github</StyledContact> saemii-24
              </Link>
              <p>
                <StyledContact>Phone</StyledContact> 010.7150.9032
              </p>
              <Link
                to="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hims2419@gmail.com"
                target="_blank"
              >
                <StyledContact>Mail</StyledContact> hims2419@gmail.com
              </Link>
            </AboutText>
          </div>
          <div className="about" style={{ maxWidth: "440px" }}>
            <SmallTitle className="smallTitle__parent">
              <div className="smallTitle__child under__title">
                <QuestionMark />
              </div>
            </SmallTitle>
            <AboutText className="about smallTitle__text under__text">
              안녕하세요! 역동적인 현대를 사랑하는 주니어 프론트엔드
              <br />
              개발자 새미입니다. 사용자를 생각하며 현대 기술의 가치를
              <br />
              표현하는 프론트엔드 개발을 좋아합니다.
            </AboutText>
          </div>
          <div className="update">
            <SmallTitle className="smallTitle__parent">
              <div className="smallTitle__child under__title">
                <Up />
              </div>
            </SmallTitle>
            <div className="update smallTitle__text under__text">
              2024.01.30. ver
            </div>
          </div>
        </BottomText>
      </div>
      <HomeCover className="homeCover" ref={homeCoverRef} />
    </StyledHome>
  );
};

const StyledContact = styled.span`
  background: #2f2f2f;
  color: #f8f8f8;
  width: 62px;
  height: 20px;
  margin-right: 4px;
  display: inline-block;
  text-align: center;
`;
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
    animation: ${StyledDrawLineAnimation} 5s ease-out;
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
  max-width: 1000px;
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
