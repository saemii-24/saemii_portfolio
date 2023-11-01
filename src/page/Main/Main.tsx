import React, { useRef, useEffect } from "react";
import Home from "../Home/Home";
import Background from "../Home/Background";
import Introduce from "../Introduce/Introduce";
import Project from "../Project/Project";
import ProjectIntro from "page/Project/ProjectIntro";
import styled from "styled-components";
import "./Main.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { splitLines, splitChars, animationLines } from "./animation";
gsap.registerPlugin(ScrollTrigger);
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Main = () => {
  const sectionRefs = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement[] | null[]>([]);
  const bgActive = useSelector((state: RootState) => state.projectBgSlice);
  const now = bgActive.every((bg) => bg.active === false);
  console.log(now);
  //재활용할 gsap 함수
  //등장 함수

  useEffect(() => {
    //가로 스크롤 애니메이션
    // const pin = gsap.fromTo(
    //   sectionRefs.current,
    //   { x: 0 },
    //   {
    //     x:
    //       -(triggerRef.current!.offsetWidth + 17) *
    //       (sectionRef.current.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       start: "top top",
    //       end: "2000 top",
    //       scrub: 1,
    //       pin: true,
    //     },
    //   }
    // );
    const pin = gsap.fromTo(
      sectionRefs.current,
      { x: 0 },
      {
        x: -10000,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
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
    //배경 색 전환
    gsap.to(".projectIntro", {
      backgroundColor: "#2f2f2f",
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".projectIntro",
        containerAnimation: pin,
        start: "top 90%",
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
        "-=50%"
      );

    // .fromTo(".introMainTitle div", { y: 250 }, { y: 0 });

    // animationLines(".introSubTitle div", {
    //   trigger: ".introSubTitle",
    //   containerAnimation: pin,
    //   start: "top 90%",
    // });
    // animationLines(".introMainTitle div", {
    //   trigger: ".introSubTitle",
    //   containerAnimation: pin,
    //   start: "top 90%",
    // });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="main" ref={triggerRef}>
        <StyledMain ref={sectionRefs}>
          <div ref={(el) => (sectionRef.current[0] = el)}>
            <Home />
          </div>
          <div ref={(el) => (sectionRef.current[1] = el)}>
            <Introduce />
          </div>
          <div ref={(el) => (sectionRef.current[2] = el)}>
            <ProjectIntro />
          </div>
          <div ref={(el) => (sectionRef.current[3] = el)}>
            <Project />
          </div>
        </StyledMain>
        {/* <div>
          <img src="https://img.seoul.co.kr/img/upload/2021/09/17/SSI_20210917150355.jpg" />
        </div> */}
        <Background />
      </div>
    </ReactLenis>
  );
};

const StyledMain = styled.div`
  display: flex;
  width: max-content;
`;

export default Main;
