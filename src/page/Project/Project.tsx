import React from "react";
import styled from "styled-components";
import { data, DataType } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { mouseEnterActive, mouseLeaveActive } from "../../redux/projectBgSlice";
import { RootState } from "../../redux/store";
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
            <StyledBg></StyledBg>
          </StyledProjectOne>
        );
      })}
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin-left: 60vw;
  width: calc(22vw * 6);
  height: 100vh;
  flex-shrink: 0;
  /* background-color: #f8f8f8; */
  display: flex;
`;
const StyledProjectOne = styled.div`
  width: 22vw;
  height: 100vh;
  border-right: 1px solid #c0c0c0;
  position: relative;
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

const StyledBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;
export default Project;
