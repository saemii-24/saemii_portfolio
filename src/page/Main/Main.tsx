import React, { useRef, useEffect, useState } from "react";
import Home from "./Home/Home";
import Background from "./Home/Background";
import Introduce from "./Introduce/Introduce";
import Project from "./Project/Project";
import ProjectIntro from "page/Main/Project/ProjectIntro";
import ProjectBg from "page/Main/Home/ProjectBg";
import Prepare from "./Contact/Prepare";
import Contact from "./Contact/Contact";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import {
  splitChars,
  animationChars,
  animationOpacity,
  mainPinAnimation,
} from "./animation";
gsap.registerPlugin(ScrollTrigger);
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ReactLenis } from "@studio-freight/react-lenis";
import ProjectIntroBg from "./Home/ProjectIntroBg";
import { data } from "../../data/data";

const Main = () => {
  const sectionRefs = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const allProjectRef = useRef<HTMLDivElement | null>(null);

  //재활용할 gsap 함수
  //등장 함수
  const [previousWidth, setPreviousWidth] = useState<number>(0);
  const [nowTransform, setNowTransform] = useState<number>(0); //transform이 얼마나 되었는지 확인한다.

  //프로젝트 컴포넌트에서 프로젝트를 클릭했는지 boolean값
  const projectClick: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.projectClick
  );
  const projectClickNum: number = useSelector(
    (state: RootState) => state.projectBgSlice.projectClickNum
  );

  //gsap
  //애니메이션 세팅
  useEffect(() => {
    setPreviousWidth(sectionRef.current!.offsetWidth);

    const ctx = gsap.context(() => {
      const pin = mainPinAnimation(sectionRefs.current!, triggerRef.current!);

      //introduce 애니메이션
      gsap.to(".introducePath", {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".introducePath",
          containerAnimation: pin,
          start: "top 90%",
        },
      });

      gsap.fromTo(
        ".introduce__content",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".introduce__content",
            containerAnimation: pin,
            start: "top 90%",
          },
        }
      );

      //project 애니메이션
      //타임라인
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".projectIntro",
          containerAnimation: pin,
          start: "top bottom",
        },
      });
      splitChars("introMainTitle");

      introTimeline
        .fromTo(
          ".projectIntro .imgBox",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power1.out" },
          "first"
        )
        .fromTo(
          ".introSubTitle div",
          { y: 30 },
          { y: 0, duration: 1, ease: "power1.out" },
          "first"
        )
        .fromTo(
          ".introMainTitle div",
          { y: 130 },
          { y: 0, stagger: 0.05, duration: 1, ease: "power4.out" },
          "-=50%"
        )
        .fromTo(
          ".introPreview",
          { y: 50, opacity: 0 },
          { y: 0, stagger: 0.05, opacity: 1, duration: 1, ease: "power1.out" },
          "-=80%"
        );
      //contact Animation
      splitChars("contactTitle");
      animationChars(
        ".contactTitle div",
        {
          trigger: ".contactTitle",
          containerAnimation: pin,
          start: "top 90%",
        },
        0.05,
        2,
        "power4.out"
      );
      gsap.to(".contactLine", {
        strokeDashoffset: 0,
        duration: 4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".contact",
          containerAnimation: pin,
          start: "top 20%",
        },
      });
      animationOpacity(".call", {
        trigger: ".call",
        containerAnimation: pin,
        start: "top 80%",
      });
      animationOpacity(".mail", {
        trigger: ".mail",
        containerAnimation: pin,
        start: "top 80%",
      });
      animationOpacity(".github", {
        trigger: ".github",
        containerAnimation: pin,
        start: "top 80%",
      });

      /*pin 애니메이션은 가로스크롤 애니메이션으로, 
      projectClick이 false라면 지속하고, true일 경우 kill한다.*/
      if (projectClick === true && sectionRefs.current !== null) {
        pin.kill();
        //스크롤 이동에 필요한 project 한개의 width값을 구한다.
        const oneProjectWidth =
          allProjectRef.current!.offsetWidth / data.length + 10; //오차대비 ;
        //이전 컴포넌트들의 width + project*index width 값만큼 transform
        const moveTo = previousWidth + projectClickNum * oneProjectWidth;
        //얻은 값들로 gsap 애니메이션을 실행한다.
        gsap.fromTo(
          sectionRefs.current,
          {
            x: nowTransform,
          },
          { x: -moveTo, duration: 1 }
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, [projectClick]);

  //스크롤 할때마다 transform이 바뀐다.
  const getTransformX = () => {
    if (sectionRefs.current !== null) {
      const nowTransformValue = window.getComputedStyle(
        sectionRefs.current!
      ).transform;
      const matrix = new WebKitCSSMatrix(nowTransformValue); //이동 값을 구한다.
      setNowTransform(matrix.m41); //matrix를 number로 변환한다.
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getTransformX);
    return () => {
      window.removeEventListener("event", getTransformX);
    };
  }, [projectClick]);

  return (
    <div>
      <ReactLenis root lerp={0.000005}>
        <div className="main" ref={triggerRef}>
          <StyledMain ref={sectionRefs}>
            <div style={{ display: "flex" }} ref={sectionRef}>
              <div>
                <Home />
              </div>
              <div>
                <Introduce />
              </div>
              <div>
                <ProjectIntro />
              </div>
            </div>
            <div ref={allProjectRef}>
              <Project />
            </div>
            <Prepare />
            <Contact />
          </StyledMain>
          <ProjectBg />
          <Background />
          <ProjectIntroBg />
        </div>
      </ReactLenis>
    </div>
  );
};

const StyledMain = styled.div`
  display: flex;
  width: max-content;
  min-width: 1400px;
  min-height: 700px;
`;

export default Main;
