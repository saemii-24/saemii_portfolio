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
              안녕하세요! 주니어 프론트엔드 개발자 박새힘입니다.
              <br /> 주로 React를 사용하며, 새로운 기술을 두려워하지 않고
              <br /> 꾸준히 공부하고있습니다.
              <br />
              <br />
              사용자와의 첫인상을 결정할 프론트엔드 개발자로서,
              <br /> 다양한 사용자가 기술 발전에 쉽게 적응하고, 필요한
              <br /> 서비스를 즐겁게 활용할 수 있도록 사용자를 생각하며,
              <br />
              지속적으로 성장하는 프론트엔드 개발자가 되겠습니다.
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
