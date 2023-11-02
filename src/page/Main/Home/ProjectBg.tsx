import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../redux/store";
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

  const data = useSelector((state: RootState) => state.projectBgSlice);
  // console.log(data);

  //이미지 경로
  const [previewImg, setPreviewImg] = useState<string>("");
  //click 하고 있는지 확인
  data.every((data) => data);
  useEffect(() => {
    data.forEach((bg) => {
      if (bg.active === true) {
        setPreviewImg(bg.previewImg);
        console.log(previewImg);
      }
    });
    //모든 이미지가 false인지 체크한다.
    const everyBgCheck = data.every((bg) => {
      bg.active === false;
    });
    if (everyBgCheck) {
      setPreviewImg("");
    }
  }, [data]);

  return (
    <StyledProjectBg
      $previewImg={imageUrl + previewImg}
      className="projectBg"
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
  left: 0;
  top: 0;
  &::before {
    content: "";
    width: 100vw;
    height: 40vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
`;

export default ProjectBg;
