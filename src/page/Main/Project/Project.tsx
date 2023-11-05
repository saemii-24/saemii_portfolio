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

/*TODO
클릭하면 22vw -> 100vw 로 늘어나며,
click이벤트,
마우스 이벤트 추가
*/

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
  console.log(allWidth);
  console.log(previousWidth);
  console.log(nowHeight);

  // const movePX: number = previousWidth / allWidth; //전체길이와 이전의 요소 길이를 이용해 비율계산
  // const scrollPX: number = nowHeight * movePX; //세로기준와 비율을 이용해 스크롤 위치 계산
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [projectWidth, setProjectWidth] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    setProjectWidth(projectRef.current!.offsetWidth);
    previousWidth + nowWidth;
    console.log(projectWidth);
  }, []);

  console.log(
    (previousWidth * nowHeight) / allWidth +
      (nowWidth * nowHeight) / allWidth / 2 +
      ((projectWidth * nowHeight) / allWidth) * 2
  );
  console.log(((previousWidth + nowWidth) / allWidth) * nowHeight);

  const clickMove = (index: number) => {
    window.scroll({
      /*스크롤 값은 100vw 이상부터 시작되므로, (전체길이 - 현재 화면크기)를 기준점으로 계산한다.*/
      top:
        (previousWidth / (allWidth - nowWidth)) * nowHeight +
        (index * (projectWidth * nowHeight)) / (allWidth - nowWidth) +
        1,
      behavior: "smooth",
    });

    dispatch(mouseClick(index));
  };

  // (previousWidth * nowHeight) / allWidth +
  // (nowWidth * nowHeight) / allWidth / 2 +
  // // ((projectWidth * nowHeight) / allWidth) * index,

  // 16 +
  // 36 * index,

  return (
    <StyledProject className="project">
      {data.map((project: DataType, index: number) => {
        return (
          <StyledProjectOne
            key={project.id}
            className={classNames(`projectImg${index + 1} projectImg`, {
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
              }, 4000);
            }}
          >
            <StyledTitleBox>
              <StyledProejctSubTitle>
                PROJECT {project.id < 10 ? "0" + project.id : project.id}
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
  /* margin-right: 100vw; */
  height: 100vh;
  flex-shrink: 0;
  /* background-color: #f8f8f8; */
  display: flex;
  /* justify-content: space-between; */
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
