import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data, DataType } from "../../../data/data";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import classNames from "classnames";

const ProjectIntroBg = () => {
  //hover 한 id번호를 가지고 온다.
  const projectHover: number = useSelector(
    (state: RootState) => state.projectBgSlice.stateHoverImg
  );
  //클릭 여부를 가지고 온다
  const isClick: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.isClick
  );
  //hover 한 id번호를 이용해 사용 될 데이터를 찾는다.
  const [hoverData, setHoverData] = useState<DataType>(data[0]);

  useEffect(() => {
    const nowHoverData = [...data].filter(
      (thisData) => thisData.id === projectHover
    )[0];
    setHoverData(nowHoverData);
  }, [projectHover]);

  //만약 페이지 주소가 변경될 경우 isClick을 false로 변경한다.

  return (
    <StyledProjectIntroBg
      className={classNames({ active: isClick })}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + hoverData.previewImg
        })`,
      }}
    ></StyledProjectIntroBg>
  );
};

const StyledProjectIntroBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-position: center;
  background-size: cover;
  top: 0;
  z-index: -100;
  min-width: 1400px;
  min-height: 700px;
  opacity: 0;
  transition: opacity 400ms ease-out;

  &.active {
    z-index: 100;
    opacity: 1;
  }
`;

export default ProjectIntroBg;
