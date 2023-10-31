import React, { useRef, useEffect } from "react";
import Home from "../Home/Home";
import Background from "../Home/Background";
import Introduce from "../Introduce/Introduce";
import Project from "../Project/Project";
import styled from "styled-components";
import { ReactLenis } from "@studio-freight/react-lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const sectionRefs = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    console.log(sectionRef);
    const pin = gsap.fromTo(
      sectionRefs.current,
      { x: 0 },
      {
        x: -triggerRef.current!.offsetWidth * (sectionRef.current.length - 1),
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

    gsap.to(".project h3", {
      x: 10,
      color: "red",
      duration: 5,
      fontSize: "30rem",
      markers: true,
      ease: "none",
      scrollTrigger: {
        trigger: ".project h3",
        containerAnimation: pin,
        start: "top center",
      },
    });
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
            <Project />
          </div>
        </StyledMain>
        <Background />
      </div>
    </ReactLenis>
  );
};

const StyledMain = styled.div`
  display: flex;
`;

export default Main;
