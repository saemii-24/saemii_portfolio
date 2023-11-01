import React from "react";
import styled from "styled-components";
import { data, DataType } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { mouseEnterActive, mouseLeaveActive } from "../../redux/projectBgSlice";
import { RootState } from "../../redux/store";

/*TODO
클릭하면 22vw -> 100vw 로 늘어나며,
click이벤트,
마우스 이벤트 추가
*/

const Project = () => {
  const dispatch = useDispatch();
  const bgActive = useSelector((state: RootState) => state.projectBgSlice);

  console.log(bgActive);
  return (
    <StyledProject className="project">
      {data.map((project: DataType, index: number) => {
        return (
          <StyledProjectOne
            key={project.id}
            className={`projectImg${index + 1}`}
            onMouseEnter={() => {
              dispatch(mouseEnterActive(index));
            }}
            onMouseLeave={() => {
              dispatch(mouseLeaveActive(index));
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
  &::after {
    content: "";
    height: 100vh;
    background-color: #f8f8f8;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 500ms ease;
  }
  /* &:hover::after {
    width: 22vw;
    height: 0vh;
  } */
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
