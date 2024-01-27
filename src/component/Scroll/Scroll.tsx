import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Scroll = ({
  pageNow,
  pageHeight,
}: {
  pageNow: string;
  pageHeight: number;
}) => {
  //스크롤 thumb의 height을 계산하고,style에 넣어준다.
  const [nowHeight, setNowHeight] = useState<number>(0);
  const [thumbHeight, setThumbHeight] = useState<number>(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const viewPortHeight: number = window.innerHeight;
      setNowHeight(viewPortHeight);

      const nowThumbHeight: number = parseInt(
        ((100 * nowHeight) / pageHeight).toFixed(0)
      );
      setThumbHeight(nowThumbHeight);
      //gsap으로 스크롤의 역할을 만들어준다.

      gsap.fromTo(
        ".scrollThumb.sub",
        { y: 0 },
        {
          y: nowHeight - (nowHeight * thumbHeight) / 100,
          ease: "none",
          scrollTrigger: {
            start: "top top",
            scrub: true,
            markers: true,
            //   trigger: ".sub",
            toggleActions: "play reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [thumbHeight]);

  return (
    <StyledScrollTrack className={"scrollTrack " + pageNow}>
      <StyledScrollThumb
        style={{ height: thumbHeight + "vh" }}
        className={"scrollThumb " + pageNow}
      ></StyledScrollThumb>
    </StyledScrollTrack>
  );
};

const StyledScrollTrack = styled.div`
  width: 10px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: red;
  display: flex;
  justify-content: center;
`;
const StyledScrollThumb = styled.div`
  width: 8px;
  border-radius: 100px;
  background-color: blue;
`;
export default Scroll;
