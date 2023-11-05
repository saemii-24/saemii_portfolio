/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
// import { data } from "../../../data/data";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SubBottom.scss";
import { mouseClick, resetData } from "../../../redux/projectBgSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

const SubBottom = ({ idNum }: { idNum: number }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const projectData = useSelector((state: RootState) => state.projectBgSlice);

  return (
    <div>
      <StyledSubCircleTitle>
        <div className="circle">
          <svg
            width="166"
            height="166"
            viewBox="0 0 166 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="83.0001" cy="82.8419" r="82.1686" stroke="#2f2f2f" />
          </svg>
          <StyledSubDetailTitle>NEXT</StyledSubDetailTitle>
        </div>
        <svg
          width="2"
          height="268"
          viewBox="0 0 2 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="circleLine"
        >
          <path d="M1 0.384277L0.999988 267.64" stroke="#2f2f2f" />
        </svg>
      </StyledSubCircleTitle>
      <StyledSubBottom>
        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          className="mySwiper"
          onClick={() => {
            window.scroll({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          {projectData.map((project, index) => {
            console.log(project);
            if (project.id !== idNum) {
              return (
                <SwiperSlide
                  onClick={() => {
                    dispatch(mouseClick(project.id - 1));
                    console.log(project);
                    setTimeout(() => {
                      navigate(`/project/${project.id}`);
                      dispatch(resetData(project.id - 1));
                    }, 2000);
                  }}
                  key={project.id}
                  style={{
                    width: "25vw",
                    height: "100vh",
                    flexBasis: projectData[project.id - 1].click
                      ? "100vw"
                      : "25vw",
                    transition: "all 1s",
                    overflow: "hidden",
                  }}
                >
                  <StyledSwiperBox
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + project.previewImg
                      })`,
                    }}
                  >
                    <StyledProejctSubTitle>
                      PROJECT {project.id < 10 ? "0" + project.id : project.id}
                    </StyledProejctSubTitle>
                    <StyledProjectTitle>{project.subTitle}</StyledProjectTitle>
                  </StyledSwiperBox>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </StyledSubBottom>
    </div>
  );
};

const StyledSubBottom = styled.div`
  height: 100vh;
`;
const StyledProjectTitle = styled.h4`
  font-size: 4rem;
  font-weight: 200;
  width: 100%;
  line-height: 4.5rem;
  min-height: calc(2 * 4.5rem);
  text-align: end;
  word-break: keep-all;
  z-index: 2;
  margin-bottom: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const StyledProejctSubTitle = styled.h6`
  font-size: 1rem;
  margin-right: 5px;
  margin-bottom: 5px;
  text-align: end;
  z-index: 2;
  padding-right: 2rem;
`;

const StyledSwiperBox = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  background-position: center;
  background-size: cover;
  // border: 1px solid #c0c0c0;
  border-right: none;
`;

const StyledSubDetailTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
`;

const StyledSubCircleTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  margin-bottom: 10vh;
  .circle {
    position: relative;
    width: 166px;
    height: 166px;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
    svg {
      position: absolute;
    }
  }
  .circleLine {
    transform: translateY(-40px);
  }
`;
export default SubBottom;
