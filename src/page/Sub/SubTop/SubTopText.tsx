import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SubTopText = ({
  idNum,
  thisData,
}: {
  idNum: number;
  thisData: DataType;
}) => {
  const subTextBoxRef = useRef<HTMLDivElement | null>(null); //TODO ref배열로 불러오기
  const subTextBoxRefChildren = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        subTextBoxRefChildren.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: subTextBoxRef.current,
            start: "top 100%",
          },
        }
      );
    });
    return () => {
      ctx.revert();
    };
  }, [idNum]);
  return (
    <StyledTextContainer>
      <div>
        {thisData.develop!.map((data, index) => {
          return (
            <div key={index} className="subTextBox" ref={subTextBoxRef}>
              <div ref={(el) => (subTextBoxRefChildren.current[index] = el)}>
                <StyledTextTitle className="subTextTitle">
                  {Object.keys(data)[0]}
                </StyledTextTitle>
                <StyledContentTitle className="subTextContent">
                  {Object.values(data)[0]
                    .split("\n")
                    .map((line: string, thisIndex: number) => (
                      <span key={thisIndex}>
                        {line}
                        <br />
                      </span>
                    ))}
                </StyledContentTitle>
              </div>
            </div>
          );
        })}
      </div>
    </StyledTextContainer>
  );
};

const StyledTextContainer = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  & > div {
    padding-left: calc(30vw - ((100vw - 1400px) / 2));
    position: relative;
    right: 0;
  }
  .subTextBox {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    overflow: hidden;
  }
`;

const StyledTextTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #aa8c5a;
  font-weight: 400;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  div {
    color: inherit;
  }
`;

const StyledContentTitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  word-break: keep-all;
  div {
    color: inherit;
  }
`;
export default SubTopText;
