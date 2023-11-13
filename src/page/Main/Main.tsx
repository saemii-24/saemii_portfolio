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
import "./Main.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { splitChars, animationChars, animationOpacity } from "./animation";
gsap.registerPlugin(ScrollTrigger);
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ReactLenis } from "@studio-freight/react-lenis";
import ProjectIntroBg from "./Home/ProjectIntroBg";

const Main = () => {
  const sectionRefs = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  //재활용할 gsap 함수
  //등장 함수
  const [allWidth, setAllWidth] = useState<number>(0);
  const [previousWidth, setPreviousWidth] = useState<number>(0);
  const [nowWidth, setNowWidth] = useState<number>(0);

  //프로젝트 컴포넌트에서 프로젝트를 클릭했는지 boolean값
  const projectClick: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.projectClick
  );
  const projectClickNum: number = useSelector(
    (state: RootState) => state.projectBgSlice.projectClickNum
  );

  //애니메이션 세팅

  useEffect(() => {
    setAllWidth(sectionRefs.current!.offsetWidth);
    setPreviousWidth(sectionRef.current!.offsetWidth);
    setNowWidth(triggerRef.current!.offsetWidth);

    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRefs.current,
        { x: 0 },
        {
          x:
            -sectionRefs.current!.offsetWidth + triggerRef.current!.offsetWidth,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=6000",
            scrub: 1,
            pin: true,
          },
        }
      );
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
      //배경 색 전환
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
        const moveTo = previousWidth + projectClickNum * 421.39 + 10;
        console.log(moveTo);
        sectionRefs.current.style.transform = `translate3d(-${moveTo}px, 0px, 0px)`;
      }
    });

    return () => {
      ctx.revert();
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
            <div>
              <Project
                allWidth={allWidth}
                previousWidth={previousWidth}
                nowWidth={nowWidth}
              />
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
