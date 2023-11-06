import React, { useState, useEffect } from "react";
import Go from "../../../component/Icon/Go";
import Logo from "../../../component/Icon/Logo";
import styled from "styled-components";
import "./SubTop.scss";
import { DataType } from "../../../data/data";
import { useLocation } from "react-router-dom";

const Sub = ({ thisData }: { thisData: DataType }) => {
  type IsRender = "" | "render";
  const [isRender, setIsRender] = useState<IsRender>("render");
  const location = useLocation();

  useEffect(() => {
    console.log(isRender);
    setIsRender("render");
    setTimeout(() => {
      setIsRender("");
    }, 1000);
  }, [location]);

  return (
    <StyledTop className="subTop">
      <StyledMainPic
        className={"mainPic " + isRender}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + thisData.previewImg
          })`,
        }}
      ></StyledMainPic>
      <StyledContainer>
        <div style={{ marginBottom: "auto" }} className="subLogo">
          <Logo />
        </div>
        <StyledSubTitle className="subTopTitle">
          <div>{thisData.subTitle}</div>
        </StyledSubTitle>
        <StyledAtagBox>
          <StyledAtag
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkPage"
          >
            <div className="atagChild">
              PAGE
              <Go />
            </div>
          </StyledAtag>

          <StyledAtag
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkPage"
          >
            <div className="atagChild">
              GITHUB
              <Go />
            </div>
          </StyledAtag>
          <StyledAtag
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkPage"
          >
            <div className="atagChild">
              DOCUMENT
              <Go />
            </div>
          </StyledAtag>
        </StyledAtagBox>
      </StyledContainer>
    </StyledTop>
  );
};

const StyledTop = styled.div`
  height: 85vh;
`;

const StyledMainPic = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;
const StyledContainer = styled.div`
  position: absolute;
  width: 1400px;
  left: 50%;
  transform: translateX(-50%);
  height: 85vh;
  display: flex;
  flex-direction: column;
`;

const StyledSubTitle = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  div {
    font-size: 5rem;
    font-weight: 200;
    margin-bottom: 1rem;
    color: transparent;
    background: linear-gradient(
      to right,
      #2f2f2f calc(30vw - ((100vw - 1400px - -17px) / 2)),
      rgb(248, 248, 248) calc(30vw - ((100vw - 1400px - -17px) / 2))
    );
    -webkit-background-clip: text;
    background-blend-mode: screen;
  }
`;
const StyledAtag = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  width: calc(100% - 50px);
  align-items: center;
  justify-content: space-between;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background-color: #2f2f2f;
    bottom: 0;
  }
  &:hover::after {
    width: 100%;
    transition: all 500ms ease;
  }

  .atagChild {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledAtagBox = styled.div`
  width: calc(30vw - ((100vw - 1400px - -17px) / 2));
`;
export default Sub;
