import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  mouseEnterActive,
  mouseLeaveActive,
  mouseClick,
  resetData,
} from "../../../redux/projectBgSlice";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const Project = ({
  allWidth,
  previousWidth,
  nowHeight,
  nowWidth,
}: {
  allWidth: number;
  previousWidth: number;
  nowHeight: number;
  nowWidth: number;
}) => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.projectBgSlice);
  const sortData: DataType[] = [...data].sort(function (
    a: DataType,
    b: DataType
  ) {
    return b.id - a.id;
  });

  //props로 받아오는 값들을 제외하고, project 1개의 width값이 필요하다.
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [projectWidth, setProjectWidth] = useState<number>(0);

  //click 할 경우 project의 title과 subTitle opacity를 0으로 변경한다.
  const [isClick, setIsClick] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setProjectWidth(projectRef.current!.offsetWidth);
    previousWidth + nowWidth;
  }, []);

  const clickMove = (index: number): void => {
    setIsClick(true);
    window.scroll({
      /*스크롤 값은 100vw 이상부터 시작되므로, (전체길이 - 현재 화면크기)를 기준점으로 계산한다.*/
      top:
        (previousWidth / (allWidth - nowWidth)) * nowHeight +
        (index * (projectWidth * nowHeight)) / (allWidth - nowWidth) +
        1, //약간의 오차에 대비해 1을 더한다.
      behavior: "smooth",
    });

    dispatch(mouseClick(index));
  };

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
              clickMove(index);

              setTimeout(() => {
                navigate(`/project/${project.id}`);
                dispatch(resetData(index));
                // project의 title과 subTitle opacity를 1로 변경.
                setIsClick(false);
              }, 3000);
            }}
          >
            <StyledTitleBox
              style={{ opacity: isClick && project.click === true ? 0 : 1 }}
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

const StyledProject = styled.div`
  height: 100vh;
  flex-shrink: 0;
  display: flex;
`;
const StyledProjectOne = styled.div`
  width: 22vw;
  height: 100vh;
  border-right: 1px solid #c0c0c0;
  position: relative;
  cursor: pointer;
  transition: width 800ms ease-out 1s;
  &.click {
    width: 110vw;
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
  transition: all 800ms;
  transition-delay: 300ms;
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
