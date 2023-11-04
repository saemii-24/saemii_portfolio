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
  // console.log(navigate(idNum));

  const projectData = useSelector((state: RootState) => state.projectBgSlice);
  // console.log(projectData);

  // const handleSwiperOnClick = (projectId: number) => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth",
  //   });
  //   console.log(projectId);
  //   console.log(projectData[projectId - 1].click);
  //   dispatch(mouseClick(projectId - idNum));
  //   setTimeout(() => {
  //     navigate(`/project/${projectId}`);
  //     dispatch(resetData(projectId - 1));
  //   }, 2000);
  // };
  // onSlideChange
  // useEffect(() => {
  //   const swiperWrapper = document.querySelector(
  //     ".swiper-wrapper"
  //   ) as HTMLElement;

  //   swiperWrapper.addEventListener("change", () => {
  //     const transformStyle = getComputedStyle(swiperWrapper).transform;
  //     console.log(transformStyle);
  //   });
  // }, []);

  return (
    <StyledSubBottom>
      <Swiper slidesPerView={"auto"} freeMode={true} className="mySwiper">
        {projectData.map((project, index) => {
          console.log(project);
          if (project.id !== idNum) {
            return (
              <SwiperSlide
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                  dispatch(mouseClick(project.id - 1));
                  console.log(project);
                  setTimeout(() => {
                    navigate(`/project/${project.id}`);
                    dispatch(resetData(project.id - 1));
                  }, 2000);
                }}
                key={project.id}
                style={{
                  width: "22vw",
                  height: "100vh",
                  flexBasis: projectData[project.id - 1].click
                    ? "100vw"
                    : "22vw",
                  // transform: projectData[project.id - 1].click
                  //   ? `translateX(-${22 * index}vw)`
                  //   : `translateX(0)`,
                  transition: "all 1s",
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
export default SubBottom;
