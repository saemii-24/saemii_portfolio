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
}: {
  allWidth: number;
  previousWidth: number;
  nowHeight: number;
}) => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.projectBgSlice);

  const movePX: number = previousWidth / allWidth; //전체길이와 이전의 요소 길이를 이용해 비율계산
  const scrollPX: number = nowHeight * movePX; //세로기준와 비율을 이용해 스크롤 위치 계산
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [projectWidth, setProjectWidth] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    setProjectWidth(projectRef.current!.offsetWidth);
  }, []);

  const clickMove = (index: number) => {
    // console.log(index);
    // console.log(index * projectWidth * movePX);
    // console.log(scrollPX + movePX * 10);
    window.scroll({
      /*스크롤 위치를 계산한다. 스크롤 전체 길이는 nowHeight이며
      전체 project까지의 스크롤 위치(즉 0번 인덱스가 left:0 위치) = scrollPX + (movePX * 10 //오차) 
      인덱스별 스크롤 추가 스크롤 위치 = (indx* projectWidth * nowHeight) / allWidth
      */
      top:
        scrollPX + movePX * 10 + (index * projectWidth * nowHeight) / allWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      dispatch(mouseClick(index));
    }, 1000);
  };

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
  /* margin-left: 60vw; */
  /* width: calc(22vw * 6); */
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
  transition: width 800ms ease-out;
  &.click {
    width: 110vw;
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
