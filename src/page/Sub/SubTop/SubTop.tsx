import React, { useState, useEffect, useRef } from "react";
import Go from "../../../component/Icon/Go";
import Logo from "../../../component/Icon/Logo";
import styled from "styled-components";
import "./SubTop.scss";
import { DataType } from "../../../data/data";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Sub = ({ thisData, idNum }: { thisData: DataType; idNum: number }) => {
  type Render = "" | "render";
  const [subTopRender, setSubTopRender] = useState<Render>("render");
  // const [mainPicRender, setMainPicRender] = useState<Render>("");

  //subTop Opacity Animation
  useEffect(() => {
    setSubTopRender("render");
    const renderTimeout = setTimeout(() => {
      setSubTopRender("");
    }, 1000);

    return () => {
      clearTimeout(renderTimeout);
    };
  }, [idNum]);

  //mainPic Animation
  // useEffect(() => {
  //   setMainPicRender("");
  //   const renderTimeout = setTimeout(() => {
  //     setMainPicRender("render");
  //   }, 10);

  //   return () => {
  //     clearTimeout(renderTimeout);
  //   };
  // }, [idNum]);

  //gsap animation
  const mainPicRef = useRef<HTMLDivElement | null>(null);
  const subTopRef = useRef<HTMLDivElement | null>(null);
  const subTopTitleRef = useRef<HTMLDivElement | null>(null);
  const aTagChildRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      //이미지 크기 조정
      gsap.fromTo(
        mainPicRef.current,
        { width: "100vw", height: "100vh" },
        {
          width: "70vw",
          height: "85vh",
          duration: 1,
        }
      );

      //타이틀, page, github, document 링크 등장
      const subTopTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: subTopRef.current,
          start: "top bottom",
        },
      });
      subTopTimeline
        .fromTo(
          subTopTitleRef.current,
          { y: 150 },
          { y: 0, duration: 1, ease: "power4.out", delay: 0.5 }
        )
        .fromTo(
          aTagChildRefs.current,
          { y: 150 },
          { y: 0, duration: 1.2, ease: "power4.out", stagger: 0.1 },
          "-=80%"
        );
    });

    return () => {
      ctx.revert();
    };
  }, [idNum]);

  return (
    <StyledTop className="subTop" ref={subTopRef}>
      <StyledMainPic
        className={
          `mainPic `
          //+ mainPicRender
        }
        ref={mainPicRef}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + thisData.previewImg
          })`,
        }}
      ></StyledMainPic>
      <StyledContainer>
        <div
          style={{ marginBottom: "auto" }}
          className={`subLogo ` + subTopRender}
        >
          {/* <Logo /> */}
          <Logo />
        </div>
        <StyledSubTitle className="subTopTitle">
          <div ref={subTopTitleRef}>{thisData.subTitle}</div>
        </StyledSubTitle>
        <StyledAtagBox>
          <StyledAtag
            href={Object.values(thisData.link[0])[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="linkPage"
          >
            <div
              className="atagChild"
              ref={(el) => (aTagChildRefs.current[0] = el)}
            >
              PAGE
              <Go />
            </div>
          </StyledAtag>

          <StyledAtag
            href={Object.values(thisData.link[1])[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="linkPage"
          >
            <div
              className="atagChild"
              ref={(el) => (aTagChildRefs.current[1] = el)}
            >
              GITHUB
              <Go />
            </div>
          </StyledAtag>
          {thisData.link[2] && (
            <StyledAtag
              href={Object.values(thisData.link[2])[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="linkPage"
            >
              <div
                className="atagChild"
                ref={(el) => (aTagChildRefs.current[2] = el)}
              >
                DOCUMENT
                <Go />
              </div>
            </StyledAtag>
          )}
        </StyledAtagBox>
      </StyledContainer>
    </StyledTop>
  );
};

const StyledTop = styled.div`
  height: 85vh;
`;

const StyledMainPic = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  z-index: -1;
`;
const StyledContainer = styled.div`
  position: absolute;
  width: 1400px;
  left: 50%;
  transform: translateX(-50%);
  height: 85vh;
  display: flex;
  flex-direction: column;
`;

const StyledSubTitle = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  div {
    font-size: 5rem;
    font-weight: 200;
    margin-bottom: 1rem;
    color: transparent;
    background: linear-gradient(
      to right,
      #2f2f2f calc(30vw - ((100vw - 1400px) / 2)),
      rgb(248, 248, 248) calc(30vw - ((100vw - 1400px) / 2))
    );
    -webkit-background-clip: text;
    background-blend-mode: screen;
  }
`;
const StyledAtag = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  width: calc(100% - 50px);
  align-items: center;
  justify-content: space-between;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background-color: #2f2f2f;
    bottom: 0;
  }
  &:hover::after {
    width: 100%;
    transition: all 500ms ease;
  }

  .atagChild {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledAtagBox = styled.div`
  width: calc(30vw - ((100vw - 1400px - -17px) / 2));
`;
export default Sub;
