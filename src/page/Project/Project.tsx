import React from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  //   useEffect(() => {
  //     gsap.to(".project h3", {
  //       x: 10,
  //       color: "red",
  //       duration: 5,
  //       fontSize: "30rem",
  //       markers: true,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".project h3",
  //         containerAnimation: scrollTween,
  //         start: "top 3000px",
  //       },
  //     });
  //   }, []);
  return (
    <StyledProject className="project">
      <h3>으악!!!!!!!!!</h3>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background-color: green;
`;
export default Project;
