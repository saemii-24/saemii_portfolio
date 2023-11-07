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
import { ReactLenis } from "@studio-freight/react-lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import {
  splitLines,
  splitChars,
  animationLines,
  animationChars,
  animationOpacity,
} from "./animation";
gsap.registerPlugin(ScrollTrigger);
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Main = () => {
  const sectionRefs = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // const sectionRef = useRef<HTMLDivElement[] | null[]>([]);
  const bgActive = useSelector((state: RootState) => state.projectBgSlice);
  const now = bgActive.every((bg) => bg.active === false);
  console.log(now);
  //재활용할 gsap 함수
  //등장 함수
  const [allWidth, setAllWidth] = useState<number>(0);
  const [previousWidth, setPreviousWidth] = useState<number>(0);
  const [nowHeight, setNowHeight] = useState<number>(0);
  const [nowWidth, setNowWidth] = useState<number>(0);
  useEffect(() => {
    setAllWidth(sectionRefs.current!.offsetWidth);
    setPreviousWidth(sectionRef.current!.offsetWidth);
    setNowHeight(triggerRef.current!.offsetHeight);
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
            // end: "2000 top",
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

      animationLines(".introduce__title div", {
        trigger: ".introduce__title div",
        containerAnimation: pin,
        start: "top 90%",
      });

      splitLines("introduce__content");
      animationLines(".introduce__content--child", {
        trigger: ".introduce__content--child",
        containerAnimation: pin,
        start: "top 90%",
      });

      //project 애니메이션
      //배경 색 전환 (진입)
      gsap.to(".projectIntro", {
        backgroundColor: "#2f2f2f",
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projectIntro",
          containerAnimation: pin,
          start: "top 90%",
          toggleActions: "restart play restart restart",
        },
      });
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
          ".introSubTitle div",
          { y: 30 },
          { y: 0, duration: 1, ease: "power1.out" }
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
      gsap.fromTo(
        ".projectIntro",
        { backgroundColor: "#2F2F2F" },
        {
          backgroundColor: "#f8f8f8",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projectImg1",
            containerAnimation: pin,
            start: "top 20%",
          },
        }
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
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <ReactLenis root>
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
                nowHeight={nowHeight}
                nowWidth={nowWidth}
              />
            </div>
            <Prepare />
            <Contact />
          </StyledMain>
          <ProjectBg />
          <Background />
        </div>
      </ReactLenis>
    </div>
  );
};

const StyledMain = styled.div`
  display: flex;
  width: max-content;
`;

export default Main;
