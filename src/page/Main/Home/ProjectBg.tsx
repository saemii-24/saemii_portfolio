import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../redux/store";
import { DataType } from "../../../data/data";
import "./Home.scss";
type S$ImageProps = {
  $previewImg: string;
};
const imageUrl: string = process.env.PUBLIC_URL;

const ProjectBg = () => {
  /*
  사용자가 hover만 하고 있을 때 -> hover 기준 이미지
  사용자가 click을 했을 때 -> click 기준 이미지
  */

  const data: DataType[] = useSelector(
    (state: RootState) => state.projectBgSlice.stateData
  );

  //이미지 경로
  const [previewImg, setPreviewImg] = useState<string>("");
  const [isHoverNow, setIsHoverNow] = useState<boolean>(false);
  const [isClickNow, setIsClickNow] = useState<boolean>(false);

  useEffect(() => {
    data.forEach((bg) => {
      // console.log(bg);
      if (bg.active === true) {
        setPreviewImg(bg.previewImg);
      }
    });
    //hover 하고 있는지 확인
    const checkIsHoverNow = data.every((project) => project.active === false);
    //click 되었는지 확인
    const checkIsClickNow = data.every((project) => project.click === false);
    setIsHoverNow(!checkIsHoverNow);
    setIsClickNow(!checkIsClickNow);
  }, [data]);

  return (
    <StyledProjectBg
      $previewImg={imageUrl + previewImg}
      className="projectBg"
      style={{
        opacity: isHoverNow === false && isClickNow === false ? 0 : 1,
      }}
    ></StyledProjectBg>
  );
};

const StyledProjectBg = styled.div<S$ImageProps>`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.$previewImg});
  position: fixed;
  right: 0;
  top: 0;
  min-width: 1400px;
  min-height: 700px;
`;

export default ProjectBg;
