import React from "react";
import styled from "styled-components";
import { languageLogo, stateLogo, designLogo } from "../../../data/language";
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
              <div>안녕하세요! 새미입니다.</div>
            </IntroduceTitle>
            <IntroduceContent className="introduce__content">
              안녕하세요! 끈기 있는 프론트엔드 개발자 박새힘입니다.
              <br /> &#39;스스로 몰두한 만큼 해낼 수 있는&#39; 정직한 프론트엔드
              분야를 좋아합니다.
              <br />
              <br /> 새로운 것을 좋아해요. 새로운 기술을 이해하고 습득하는 건
              <br />
              분명 어려운 일이지만, &#39;우리 한번 친해져 보자!&#39;라는 열린
              마음으로
              <br /> 늘 새로운 트렌드가 탄생하는 프론트엔드를 공부하고 있습니다.
              <br />
              <br />
              사용자와의 첫인상을 담당하는 프론트엔드 개발자로서, 다양한 직군의
              동료와 함께
              <br /> 만나게 될 사용자를 공감하며 긍정적인 인상을 남길 수 있는
              개발자가 되겠습니다.
            </IntroduceContent>
          </TextBox>
          <TextBox>
            <IntroduceTitle className="introduce__title type">
              <div>이런 기술을 사용할 수 있어요.</div>
            </IntroduceTitle>
            <IntroduceContent className="introduce__content">
              <StyledLogoData>
                {languageLogo.map((logo, index) => {
                  return (
                    <div key={index}>
                      <StyledLogoImg
                        src={process.env.PUBLIC_URL + Object.values(logo)[0]}
                        alt={
                          process.env.PUBLIC_URL + Object.keys(logo)[0] + "로고"
                        }
                      ></StyledLogoImg>
                    </div>
                  );
                })}
              </StyledLogoData>
              <StyledLogoData>
                {designLogo.map((logo, index) => {
                  return (
                    <StyledLogoImg
                      key={index}
                      src={process.env.PUBLIC_URL + Object.values(logo)[0]}
                      alt={
                        process.env.PUBLIC_URL + Object.keys(logo)[0] + "로고"
                      }
                    />
                  );
                })}
              </StyledLogoData>
              <StyledLogoData>
                {stateLogo.map((logo, index) => {
                  return (
                    <StyledLogoImg
                      key={index}
                      src={process.env.PUBLIC_URL + Object.values(logo)[0]}
                      alt={
                        process.env.PUBLIC_URL + Object.keys(logo)[0] + "로고"
                      }
                    ></StyledLogoImg>
                  );
                })}
              </StyledLogoData>
            </IntroduceContent>
          </TextBox>
        </TextBoxAlign>
      </StyledIntroduceWhite>
    </StyledIntroduce>
  );
};

Introduce.displayName = "Introduce";

const StyledIntroduce = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  min-width: 1400px;
  min-height: 700px;
`;
const StyledIntroduceWhite = styled.div`
  margin-left: 50vw;
  flex-shrink: 0;
  width: 50vw;
  min-width: 1000px;
  height: 100vh;
  background-color: #f8f8f8;
`;
const StyledHorizontalLine = styled.svg`
  position: absolute;
  top: 25px;
  left: -110px;
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
  color: #2f2f2f;
  width: calc(1000px - 7vw);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  .introduce__content--child {
    overflow: hidden;
  }
`;
const TextBox = styled.div`
  width: 100%;
`;
const TextBoxAlign = styled.div`
  position: absolute;
  padding-left: 7vw;
  display: flex;
  gap: 7vh;

  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  /* width: 33%; */
  min-width: 530px;
`;

const StyledLogoData = styled.div`
  display: flex;
  gap: 0.5vw;
  margin-top: 0.5vw;
`;
const StyledLogoImg = styled.img`
  display: inline-block;
  width: 2.5vw;
  border-radius: 0.3vw;
`;

export default Introduce;
