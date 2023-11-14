import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { DataType } from "../../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  mouseEnterActive,
  mouseLeaveActive,
  mouseClick,
  resetData,
  projectClick,
  projectClickNum,
} from "../../../redux/projectBgSlice";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const Project = () => {
  const dispatch = useDispatch();

  const data = useSelector(
    (state: RootState) => state.projectBgSlice.stateData
  );
  //프로젝트 컴포넌트에서 프로젝트를 클릭했는지 boolean값
  const projectClickState: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.projectClick
  );

  const sortData: DataType[] = [...data].sort(function (
    a: DataType,
    b: DataType
  ) {
    return b.id - a.id;
  });

  //props로 받아오는 값들을 제외하고, project 1개의 width값이 필요하다.
  const projectRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  return (
    <StyledProject className="project">
      {sortData.map((project: DataType, index: number) => {
        return (
          <StyledProjectOne
            key={project.id}
            className={classNames(`projectImg${index} projectImg`, {
              click: data[index].click === true,
            })}
            // className={`projectImg${index + 1} projectImg`}
            ref={index === 0 ? projectRef : null}
            onMouseEnter={() => {
              dispatch(mouseEnterActive(index));
            }}
            onMouseLeave={() => {
              dispatch(mouseLeaveActive(index));
            }}
            onClick={() => {
              dispatch(mouseClick(index));
              dispatch(projectClick(true)); //projectClick이 되었음을 알린다.
              dispatch(projectClickNum(index)); //projectClickNum을 이용해 원하는 정도를 이동한다.
              setTimeout(() => {
                navigate(`/project/${project.id}`);
                dispatch(resetData(index));
              }, 1800);
            }}
          >
            <StyledTitleBox
              // project의 title과 subTitle opacity를 1로 변경.
              className={classNames({
                active: project.click && projectClickState === true,
              })}
            >
              <StyledProejctSubTitle>
                PROJECT{" "}
                {project.id + 1 < 10 ? "0" + (project.id + 1) : project.id + 1}
              </StyledProejctSubTitle>
              <StyledProjectTitle>{project.subTitle}</StyledProjectTitle>
            </StyledTitleBox>
          </StyledProjectOne>
        );
      })}
    </StyledProject>
  );
};

const StyledProjectAnimation = keyframes`
  0%{
    width: 22vw;
  }100%{
    width: 110vw;
  }
`;

const StyledProject = styled.div`
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  min-width: calc(300px * 5);
  min-height: 700px;
`;
const StyledProjectOne = styled.div`
  width: 22vw;
  height: 100vh;
  min-width: 300px;
  min-height: 700px;
  border-right: 1px solid #c0c0c0;
  position: relative;
  cursor: pointer;
  transition: width 800ms ease-out 1s;
  &.click {
    animation: ${StyledProjectAnimation} 1s;
    animation-delay: 200ms;
    animation-fill-mode: both;
    &::after {
      content: "";
      transition: none;
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      z-index: 1000;
      background-color: transparent;
    }
    &:hover::after {
      opacity: 0;
      transition: none;
    }
  }
  &::after {
    content: "";
    height: 100vh;
    width: 22vw;
    min-width: 300px;
    min-height: 700px;
    background-color: #f8f8f8;
    position: fixed;
    top: 0;
    z-index: -1;
    opacity: 1;
  }

  &:hover::after {
    opacity: 0;
    transition: all 800ms;
  }
`;
const StyledTitleBoxAnimation = keyframes`
  0%{
    opacity:1;
  }100%{
    opacity:0;
  }`;
const StyledTitleBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 2rem;
  padding-bottom: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  &.active {
    opacity: 0;
    animation: ${StyledTitleBoxAnimation} 300ms;
    animation-fill-mode: forwards;
  }
`;
const StyledProjectTitle = styled.h4`
  font-size: 4rem;
  font-weight: 200;
  width: 80%;
  line-height: 4.5rem;
  min-height: calc(2 * 4.5rem);
  text-align: end;
  word-break: keep-all;
`;

const StyledProejctSubTitle = styled.h6`
  font-size: 1rem;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default Project;
