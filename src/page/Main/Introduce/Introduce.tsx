import React from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Introduce = () => {
  return (
    <StyledIntroduce className="introduce">
      <StyledIntroduceWhite>
        <TextBoxAlign className="textAlign">
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
          <TextBox>
            <IntroduceTitle className="introduce__title type">
              <div>안녕하세요 새미입니다.</div>
            </IntroduceTitle>
            <IntroduceContent className="introduce__content">
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
            </IntroduceContent>
          </TextBox>
          <TextBox>
            <IntroduceTitle className="introduce__title type">
              <div>이런 기술을 사용합니다.</div>
            </IntroduceTitle>
            <IntroduceContent className="introduce__content">
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
              html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다.
            </IntroduceContent>
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
  top: 25px;
  left: -17%;
`;
const StyledHorizontalPath = styled.path`
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
`;
const IntroduceTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 24px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;
const IntroduceContent = styled.div`
  width: fit-content;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;
const TextBox = styled.div`
  width: 100%;
`;
const TextBoxAlign = styled.div`
  position: absolute;
  padding-left: 95px;
  display: flex;
  gap: 100px;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  /* width: 33%; */
  min-width: 530px;
`;
export default Introduce;
