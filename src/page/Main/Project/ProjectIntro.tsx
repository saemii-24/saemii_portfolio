import React from "react";
import styled from "styled-components";
import { data, DataType } from "../../../data/data";

const ProjectIntro = () => {
  const sortData: DataType[] = [...data].sort(function (
    a: DataType,
    b: DataType
  ) {
    return b.id - a.id;
  });

  return (
    <StyledProjectIntro className="projectIntro">
      <StyledTitle>
        <StyledSubTitle className="introSubTitle">
          <div>PREVIEW</div>
        </StyledSubTitle>
        <StyledMainTitle className="introMainTitle">PROJECT</StyledMainTitle>
      </StyledTitle>
      <StyledGrid>
        {sortData.map((project: DataType) => {
          return (
            <StyledProjectPreivew
              key={project.id}
              className="introPreview type"
            >
              <StyledProjectName>{project.subTitle}</StyledProjectName>
              <StyledProjectContent>
                {project.preview.split("\n").map((line: string) => (
                  <>
                    {line} <br />
                  </>
                ))}
              </StyledProjectContent>
              {/* <StyledProjectName>
                개발에 사용된 언어/라이브러리
              </StyledProjectName>
              <StyledProjectLanguage>
                {Object.values(project.develop[2])[0]}
              </StyledProjectLanguage> */}
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
  background-color: #f8f8f8;
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
  font-weight: 400;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  margin-left: 5px;
  div {
    color: #f8f8f8;
    margin-left: -5px;
  }
`;

const StyledProjectPreivew = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 3rem;
`;

const StyledProjectContent = styled.p`
  color: #f8f8f8;
  line-height: 1.5rem;
  min-height: calc(4 * 1.5rem);
  font-weight: 200;
  word-break: keep-all;
`;
// const StyledProjectLanguage = styled.p`
//   color: #f8f8f8;
//   line-height: 1.5rem;
//   min-height: calc(4 * 1.5rem);
//   font-weight: 200;
// `;

export default ProjectIntro;
