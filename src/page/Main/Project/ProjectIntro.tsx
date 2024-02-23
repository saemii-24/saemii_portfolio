import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { data, DataType } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { introHover, introClick } from "../../../redux/projectBgSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import classNames from "classnames";
import { GoArrowRight } from "react-icons/go";

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
                process.env.PUBLIC_URL + hoverData.smallPreviewImg
              })`,
            }}
          />
          <StyledProjectImg
            style={{
              clipPath: "polygon(26% 4%, 49% 0px, 49% 96%, 26% 100%)",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + hoverData.smallPreviewImg
              })`,
            }}
          />
          <StyledProjectImg
            style={{
              clipPath: "polygon(52% 10%, 75% 5%, 75% 95%, 52% 100%)",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + hoverData.smallPreviewImg
              })`,
            }}
          />
          <StyledProjectImg
            style={{
              clipPath: "polygon(78% 3%, 100% 8%, 100% 95%, 78% 90%)",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + hoverData.smallPreviewImg
              })`,
            }}
          />
        </StyledProjectImgBox>
        <StyledProjectName>{hoverData.subTitle}</StyledProjectName>
        <StyledProjectLanguage>
          {hoverData.language.map((lan, index) => (
            <div key={index}>{Object.keys(lan)}</div>
          ))}
        </StyledProjectLanguage>
        <StyledProjectIntroContent>
          {hoverData.preview}
        </StyledProjectIntroContent>
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
              }}
            >
              <StyledProjectNumber>
                PROJECT 0{project.id + 1}
              </StyledProjectNumber>

              <StyledButtonContainer>
                <StyledLink
                  href={Object.values(project.link[0])[0]}
                  target="_blank"
                >
                  Page
                  <GoArrowRight />
                </StyledLink>
                <StyledLink
                  href={Object.values(project.link[1])[0]}
                  target="_blank"
                >
                  Github
                  <GoArrowRight />
                </StyledLink>
                <div
                  onClick={() => {
                    navigate(`/project/${project.id}`);
                  }}
                >
                  Detail
                  <GoArrowRight />
                </div>
              </StyledButtonContainer>
            </StyledProjectPreivew>
          );
        })}
      </StyledGrid>
    </StyledProjectIntro>
  );
};

const StyledProjectIntroContent = styled.p`
  color: #f8f8f8;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin-top: 10px;
  gap: 10px;
  width: 100%;
  svg {
    fill: #f8f8f8;
    border: 1px solid #f8f8f8;
    border-radius: 50%;
    transition: all 200ms;
  }
  div {
    color: #f8f8f8;
    font-weight: 500;
    padding: 2px 10px;
    border: 1px solid #f8f8f8;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 200ms;
    &:hover {
      color: #2f2f2f;
      background-color: #f8f8f8;
      border: 1px solid #2f2f2f;
      svg {
        fill: #2f2f2f;
        border: 1px solid #2f2f2f;
      }
    }
  }
`;

const StyledLink = styled.a`
  color: #f8f8f8;
  font-weight: 500;
  padding: 2px 10px;
  background-color: #2f2f2f;
  border: 1px solid #f8f8f8;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  font-size: 1rem;
  transition: all 200ms;
  &:hover {
    color: #2f2f2f;
    background-color: #f8f8f8;
    border: 1px solid #2f2f2f;
    svg {
      fill: #2f2f2f;
      border: 1px solid #2f2f2f;
    }
  }
`;

const StyledProjectNumber = styled.p`
  color: #f8f8f8;
  padding-bottom: 4px;
  width: 95%;
  font-weight: 700;
  border-bottom: 1px solid #f8f8f8;
`;

const StyledProjectLanguage = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  div {
    background-color: #f8f8f8;
    padding: 0 5px;
    border-radius: 2px;
    font-weight: 500;
  }
`;

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
  font-size: 1.8em;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #f8f8f8;
  position: relative;
  width: fit-content;
  margin-top: auto;
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
  justify-content: center;
  padding: 0 3rem;
  /* cursor: pointer; */
  &.active {
    animation: ${StyledPreviewAnimation} 300ms;
  }
`;

const StyledProjectImgBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin-top: 4vh;
  height: 60%;
  /* margin-bottom: 10vh; */
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
