import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { data, DataType } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { introHover, introClick } from "../../../redux/projectBgSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import classNames from "classnames";

const ProjectIntro = () => {
  const dispatch = useDispatch();

  //state로 각 설명에 mouseEnter하면 id값을 받아 이미지를 렌더링한다.
  const [projectHover, setProjectHover] = useState<number>(0);
  const [hoverData, setHoverData] = useState<DataType>(data[0]);
  const navigate = useNavigate();

  //프로젝트 컴포넌트에서 프로젝트를 클릭했는지 boolean값
  const projectClick: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.projectClick
  );

  useEffect(() => {
    const nowHoverData = [...data].filter(
      (thisData) => thisData.id === projectHover
    )[0];
    setHoverData(nowHoverData);
  }, [projectHover]);

  return (
    <StyledProjectIntro className="projectIntro">
      <StyledTitle className="title">
        <StyledProjectImgBox
          className="imgBox"
          onClick={() => {
            dispatch(introHover(projectHover));
            dispatch(introClick());
            setTimeout(() => {
              navigate(`/project/${projectHover}`);
            }, 1000);
            setTimeout(() => {
              dispatch(introClick());
            }, 2000);
          }}
        >
          <StyledRotateImgBox style={{ position: "absolute" }}>
            <svg
              width="20"
              height="46"
              viewBox="0 0 39 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90918 19.3633L19.5346 1.73783L37.1601 19.3633"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19.5371 2.74707V44.2907"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <StyledRotateImg
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/image/rotateText.png"
                })`,
              }}
            ></StyledRotateImg>
          </StyledRotateImgBox>
          <StyledProjectImg
            style={{
              clipPath: "polygon(0px 10%, 23% 5%, 23% 90%, 0% 95%)",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + hoverData.previewImg
              })`,
            }}
          />
          <StyledProjectImg
            style={{
              clipPath: "polygon(26% 4%, 49% 0px, 49% 96%, 26% 100%)",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + hoverData.previewImg
              })`,
            }}
          />
          <StyledProjectImg
            style={{
              clipPath: "polygon(52% 10%, 75% 5%, 75% 95%, 52% 100%)",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + hoverData.previewImg
              })`,
            }}
          />
          <StyledProjectImg
            style={{
              clipPath: "polygon(78% 3%, 100% 8%, 100% 95%, 78% 90%)",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + hoverData.previewImg
              })`,
            }}
          />
        </StyledProjectImgBox>
        <StyledSubTitle className="introSubTitle">
          <div>PREVIEW</div>
        </StyledSubTitle>
        <StyledMainTitle className="introMainTitle">PROJECT</StyledMainTitle>
      </StyledTitle>
      <StyledGrid>
        {data.map((project: DataType) => {
          return (
            <StyledProjectPreivew
              key={project.id}
              className={classNames("introPreview type", {
                active: projectClick,
              })}
              onMouseEnter={() => {
                setProjectHover(project.id);
              }}
              onClick={() => {
                dispatch(introHover(project.id));
                dispatch(introClick());
                setTimeout(() => {
                  navigate(`/project/${project.id}`);
                }, 1500);
                setTimeout(() => {
                  dispatch(introClick());
                }, 2000);
              }}
            >
              <StyledProjectName>{project.subTitle}</StyledProjectName>
              <StyledProjectContent>{project.preview}</StyledProjectContent>
            </StyledProjectPreivew>
          );
        })}
      </StyledGrid>
    </StyledProjectIntro>
  );
};

const StyledProjectIntro = styled.div`
  margin-left: 50vw;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #2f2f2f;
  padding: 10vh;
  justify-content: space-between;

  min-width: 1400px;
  min-height: 700px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 3rem;
  width: 30%;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 60%;
`;
const StyledProjectName = styled.h6`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #f8f8f8;
  position: relative;
  width: fit-content;
`;
const StyledSubTitle = styled(StyledProjectName)`
  margin-bottom: -20px;
  margin-left: 7px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  position: relative;
  div {
    color: #f8f8f8;
  }
`;

const StyledMainTitle = styled.div`
  color: #f8f8f8;
  font-size: 6rem;
  font-weight: 200;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  margin-left: 5px;
  min-width: 410px;
  div {
    color: #f8f8f8;
    margin-left: -5px;
  }
`;

const StyledPreviewAnimation = keyframes`
  0%{
    opacity:1;
    transform: translate(0px); 
    //gsap로 설정한 애니메이션로 발생하는 오차 수정
  }
  100%{
    opacity:0;
    transform: translate(0px); 
    //gsap로 설정한 애니메이션로 발생하는 오차 수정
  }
`;
const StyledProjectPreivew = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 3rem;
  cursor: pointer;
  &.active {
    animation: ${StyledPreviewAnimation} 300ms;
  }
`;

const StyledProjectContent = styled.p`
  color: #f8f8f8;
  line-height: 1.5rem;
  min-height: calc(4 * 1.5rem);
  font-weight: 200;
  word-break: keep-all;
`;

const StyledProjectImgBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 60%;
  margin-bottom: 10vh;
  max-height: 450px;
  cursor: pointer;
`;

const StyledProjectImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
`;

const StyledRotateAnimation = keyframes`
0%{
  transform: rotate(0)
}
100%{
  transform:rotate(360deg);
}
`;

const StyledRotateImg = styled.div`
  width: 120px;
  height: 120px;
  background-color: #f8f8f8;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  border: 2px solid #f8f8f8;
  animation: ${StyledRotateAnimation} 50s linear infinite;
`;

const StyledRotateImgBox = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  z-index: 3;
  right: -80px;
  bottom: 50px;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 4;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
export default ProjectIntro;
