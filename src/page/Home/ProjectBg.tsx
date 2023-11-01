import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";

type S$ImageProps = {
  $previewImg: string;
};
const imageUrl: string = process.env.PUBLIC_URL;

const ProjectBg = () => {
  const bgActive = useSelector((state: RootState) => state.projectBgSlice);
  //const [nowBgActive, setNowBgActive] = useState<boolean>(false);
  console.log(bgActive);
  const [previewImg, setPreviewImg] = useState<string>("");
  useEffect(() => {
    bgActive.forEach((bg) => {
      if (bg.active === true) {
        setPreviewImg(bg.previewImg);
        console.log(previewImg);
      }
    });
    //모든 이미지가 false인지 체크한다.
    const everyBgCheck = bgActive.every((bg) => {
      bg.active === false;
    });
    if (everyBgCheck) {
      setPreviewImg("");
    }
  }, [bgActive]);

  // const activeCheck = bgActive.every((bg) => bg.active === false);
  // // setNowBgActive(!activeCheck);
  // console.log(activeCheck);

  return (
    <StyledProjectBg
      $previewImg={imageUrl + previewImg}
      // style={{ backgroundImage: `url(${process.env.PUBLIC_URL + previewImg})` }}
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
