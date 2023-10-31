import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Introduce = () => {
  useEffect(() => {
    gsap.to(".textBox p", {
      x: 10,
      color: "red",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: ".introducePath",
      },
    });
  }, []);

  return (
    <StyledIntroduce className="introduce">
      <StyledHorizontalLine
        width="168"
        height="2"
        viewBox="0 0 168 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledHorizontalPath
          d="M0.39209 1.10425C115.42 1.10425 159.415 1.10425 167.034 1.10425"
          stroke="black"
          className="introducePath"
        />
      </StyledHorizontalLine>
      <StyledIntroduceWhite>
        <TextBoxAlign className="textBox">
          <TextBox>
            <IntroduceTitle>안녕하세요 새미입니다.</IntroduceTitle>
            <p>
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
            </p>
          </TextBox>
          <TextBox>
            <IntroduceTitle>이런 기술을 사용합니다.</IntroduceTitle>
            <p>
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
            </p>
          </TextBox>
        </TextBoxAlign>
      </StyledIntroduceWhite>
    </StyledIntroduce>
  );
};

const StyledIntroduce = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const StyledIntroduceWhite = styled.div`
  margin-left: 40vw;
  flex-shrink: 0;
  width: 60vw;
  min-width: 1000px;
  height: 100vh;
  background-color: #f8f8f8;
`;
const StyledHorizontalLine = styled.svg`
  position: absolute;
  top: 25%;
  left: calc(40vw - 120px);
`;
const StyledHorizontalPath = styled.path`
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
`;
const IntroduceTitle = styled.h4`
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 24px;
`;
const TextBox = styled.div`
  width: 50%;
`;
const TextBoxAlign = styled.div`
  position: absolute;
  padding-left: 95px;
  display: flex;
  height: 100%;
  gap: 100px;
  margin-top: -50px;
  flex-direction: column;
  justify-content: center;
`;
export default Introduce;
