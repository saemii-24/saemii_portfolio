import React, { useState } from "react";
import Go from "../../../component/Icon/Go";
import styled from "styled-components";
import { data } from "../../../data/data";
import "../SubTop/SubTop.scss";

const SubBottom = ({ idNum }: { idNum: number }) => {
  const [isHome, setIsHome] = useState(true);
  const firstBg = data[0].previewImg;
  const [selectBg, setSelectBg] = useState(firstBg);
  console.log(idNum);
  return (
    <StyledSubBottom>
      <div className="moreProject">MORE PROJECTS</div>
      <StyledSubNav>
        <div
          className="prev"
          onMouseEnter={() => {
            setIsHome(false);
            let bgImg = data[idNum - 1].previewImg;
            if (idNum === 1) {
              bgImg = data[data.length - 1].previewImg;
            }
            setSelectBg(bgImg);
            console.log(selectBg);
          }}
        >
          <div className="prevIcon">
            <Go />
          </div>
          PREV
        </div>
        <div
          className="home"
          onMouseEnter={() => {
            setIsHome(true);
          }}
        >
          HOME
        </div>
        <div
          className="next"
          onMouseEnter={() => {
            setIsHome(false);
            let bgImg = data[idNum].previewImg;
            if (idNum === data.length) {
              bgImg = data[0].previewImg;
            }
            setSelectBg(bgImg);
            console.log(selectBg);
          }}
        >
          NEXT
          <Go />
        </div>
      </StyledSubNav>

      {isHome ? (
        <StyledVideoBox className="container">
          <StyledVideo autoPlay muted loop>
            <source
              src={process.env.PUBLIC_URL + "/image/test.mp4"}
              type="video/mp4"
            />
          </StyledVideo>
        </StyledVideoBox>
      ) : (
        <StyledSubBg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + selectBg})`,
          }}
        ></StyledSubBg>
      )}
    </StyledSubBottom>
  );
};

const StyledSubBottom = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .moreProject {
    font-weight: 300;
    font-size: 2rem;
  }
`;

const StyledSubNav = styled.div`
  display: flex;
  gap: 80px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
  .prevIcon {
    transform: rotate(180deg);
  }
  .home {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 1.5px;
      background-color: #2f2f2f;
      bottom: -1px;
      transition: all 300ms;
    }
    &:hover::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1.5px;
      background-color: #2f2f2f;
      bottom: -1px;
      transition: all 500ms ease;
    }
  }
`;

const StyledSubBg = styled.div`
  margin: 6vh auto 10vh;
  width: 90vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
`;

const StyledVideoBox = styled.div`
  margin: 6vh auto 10vh;
  width: 90vw;
  height: 50vh;
  position: relative;
  overflow: hidden;
`;
const StyledVideo = styled.video`
  object-fit: cover;
  position: relative;
  width: 100%;

  bottom: 100%;
`;

export default SubBottom;
