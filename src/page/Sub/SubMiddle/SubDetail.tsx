import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";
import classNames from "classnames";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SubDetail = ({
  idNum,
  thisData,
}: {
  idNum: number;
  thisData: DataType;
}) => {
  //gsap
  const subDetailTitleRef = useRef<HTMLDivElement | null>(null);
  const detailNameRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    console.log(detailNameRefs);
    gsap.fromTo(
      subDetailTitleRef.current!.children,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: subDetailTitleRef.current,
          start: "top 90%",
        },
      }
    );

    //
    const detailCount = thisData.detail.length;

    // console.log(detailCount);
    //title컬러 채워지는 animation
    for (let i = 0; i <= detailCount - 1; i++) {
      gsap.fromTo(
        detailNameRefs.current[i],
        {
          background: "linear-gradient(to right,  #2f2f2f 0%, #ebebeb 0%)",
        },
        {
          background: "linear-gradient(to right,  #2f2f2f 100%, #ebebeb 100%)",
          scrollTrigger: {
            trigger: detailNameRefs.current[i],
            start: "top 90%",
            end: "bottom 40%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [idNum]);
  return (
    <StyledSubDetail className="subDetail">
      <StyledSubDetailTitle className="subDetailTitle" ref={subDetailTitleRef}>
        <div>DETAIL</div>
      </StyledSubDetailTitle>
      <div className="allDetailBox">
        {thisData.detail!.map((data, index) => {
          return (
            <StyledSubDetailBox key={index}>
              <StyledSubPage>{data.page} page</StyledSubPage>
              <div
                className={classNames("detailText", {
                  lastDetailBox: index === thisData.detail.length - 1,
                })}
              >
                <div className="detailContent">
                  {data.name
                    .split("\n")
                    .map((line: string, thisIndex: number) => (
                      <StyledSubDetailBoxTitle
                        key={thisIndex}
                        className={"detailName"}
                        ref={(el) => (detailNameRefs.current[index] = el)}
                      >
                        {line} <br />
                      </StyledSubDetailBoxTitle>
                    ))}
                  <div className={`detailBoxContent`}>
                    {data.content
                      .split("\n")
                      .map((line: string, index: number) => (
                        <span key={index}>
                          {line} <br />
                        </span>
                      ))}
                  </div>
                </div>
                <div
                  className={"detailImg " + `detailImg${index + 1}`}
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + data.image
                    })`,
                  }}
                ></div>
              </div>
            </StyledSubDetailBox>
          );
        })}
      </div>
    </StyledSubDetail>
  );
};

const StyledSubDetail = styled.div`
  width: 100%;
  min-width: 1400px;
  margin-top: 25vh;
  margin-bottom: 25vh;
`;

const StyledSubDetailTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 5vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  div {
    font-size: 3rem;
    font-weight: 300;
  }
`;

const StyledSubDetailBox = styled.div`
  width: 1400px;
  margin: 0 auto;
  position: relative;
  .detailText {
    display: flex;
    padding: 10vh 0;
    border-top: 1px solid #2f2f2f;
    .detailContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 300;
      font-size: 1.2rem;
    }
    .detailImg {
      width: 40vw;
      height: calc(40vw * 9 / 16);
      background-position: center 0;
      background-size: cover;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.02);
      flex-shrink: 0;
      border-radius: 13px;
    }
    .detailBoxContent {
      width: 70%;
      word-break: keep-all;
      line-height: 155%;
      margin-top: 1rem;
    }
  }
  .lastDetailBox {
    border-bottom: 1px solid #2f2f2f;
  }
`;

const StyledSubDetailBoxTitle = styled.div`
  color: transparent;
  width: fit-content;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  background-blend-mode: screen;
  font-weight: 600;
  font-size: 3rem;
  line-height: 4rem;
  word-break: keep-all;
`;

const StyledSubPage = styled.h6`
  font-size: 1.2rem;
  font-weight: 500;
  display: inline-block;
  position: absolute;
  top: 1.5vh;
`;
export default SubDetail;
