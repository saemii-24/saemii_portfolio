import React, { useRef, useEffect } from "react";
import Home from "../Home/Home";
import Background from "../Home/Background";
import Introduce from "../Introduce/Introduce";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: "-300vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="main" ref={triggerRef}>
      <StyledMain ref={sectionRef}>
        <Home />
        <Introduce />
      </StyledMain>
      <Background />
    </div>
  );
};

const StyledMain = styled.div`
  display: flex;
`;

export default Main;
