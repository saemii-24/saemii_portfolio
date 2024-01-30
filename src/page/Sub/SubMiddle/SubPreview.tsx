/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { DataType } from "../../../data/data";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const SubPreview = ({
  idNum,
  thisData,
}: {
  idNum: number;
  thisData: DataType;
}) => {
  const subLanguageTitleRef = useRef<HTMLDivElement | null>(null);

  //gsap
  const subPreviewRef = useRef<HTMLDivElement | null>(null);
  const languageChildRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".subPreview", {
        backgroundColor: "#2f2f2f",
        duration: 0.3,
        scrollTrigger: {
          trigger: ".subPreview",
          start: "top 80%",
        },
      });

      gsap.fromTo(
        subLanguageTitleRef.current!.children,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: subLanguageTitleRef.current,
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ".languageChild",
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".subPreview",
            start: "top 30%",
          },
        }
      );
    });
    return () => {
      ctx.revert();
    };
  }, [idNum]);

  return (
    <StyledSubPreview className="subPreview" ref={subPreviewRef}>
      <StyledContainer style={{ height: "fit-content" }}>
        <StyledComment>
          <StyledSubLanguageTitle
            className="subLanguageTitle"
            ref={subLanguageTitleRef}
          >
            <div>Language / Library</div>
          </StyledSubLanguageTitle>
          <StyledSubLanguageContent>
            {thisData.language!.map((data, index) => {
              return (
                <div key={index} className="language">
                  <div className="languageChild" ref={languageChildRef}>
                    <div className="languageTitle" style={{ color: "#f8f8f8" }}>
                      {Object.keys(data)[0]}
                    </div>
                    <div
                      className="languageDetail "
                      style={{ color: "#f8f8f8" }}
                    >
                      {Object.values(data)[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </StyledSubLanguageContent>
        </StyledComment>
      </StyledContainer>
    </StyledSubPreview>
  );
};

const StyledSubPreview = styled.div`
  width: 100%;
  width: 100%;
  padding-top: 25vh;
  padding-bottom: 25vh;
  margin-top: 25vh;
  background-color: #f8f8f8;
  position: relative;
`;
const StyledContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  position: relative;
  .mainImage {
    width: calc(1400px * 0.8);
    height: calc(1400px * 0.8 * 9 / 16);
    margin: 0 auto;
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .mainImage::-webkit-scrollbar {
    width: 20px;
  }
  .mainImage::-webkit-scrollbar-thumb {
    background-color: #f8f8f8;
    border-radius: 100px;
    border: 7px solid #2f2f2f;
  }
`;

const StyledSubLanguageTitle = styled.div`
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
    color: #f8f8f8;
  }
`;

const StyledSubLanguageContent = styled.div`
  border-top: 1px solid #f8f8f8;
  padding-top: 5vh;
`;

const StyledComment = styled.div`
  width: calc(1400px * 0.8);
  margin: 0 auto;
  .language {
    font-size: 1.2rem;
    margin-top: 1rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    overflow: hidden;
    & > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .languageTitle {
      font-size: 1.2rem;
      font-weight: 300;
    }
    .languageDetail {
      font-weight: 300;
      width: 80%;
      padding-right: 10%;
      word-break: keep-all;
    }
  }
`;

const StyledLanguageTitles = styled.div`
  color: #f8f8f8;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div:nth-child(2) {
    width: 80%;
  }
  div {
    color: #aa8c5a;
  }
`;
export default SubPreview;
