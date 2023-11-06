import React, { useState } from "react";
import Go from "../../../component/Icon/Go";
import styled from "styled-components";
import { data } from "../../../data/data";
import "../SubTop/SubTop.scss";
import { useNavigate } from "react-router-dom";

const SubBottom = ({ idNum }: { idNum: number }) => {
  //어떤 것을 hover했는지 관리
  type HoverSelect = "prev" | "home" | "next";
  const [select, setSelect] = useState<HoverSelect>("home");

  //어떤 것을 click했는지 관리
  type ClickSelect = "prevClick" | "nextClick" | "";
  const [click, setClick] = useState<ClickSelect>("");

  //prev, next img state로 관리
  const firstBg = data[0].previewImg;
  const [prevImg, setPrevImg] = useState<string>(firstBg);
  const [nextImg, setNextImg] = useState<string>(firstBg);
  const [prevNum, setPrevNum] = useState<number>(0);
  const [nextNum, setNextNum] = useState<number>(0);

  const handlePrevImg = () => {
    setPrevNum(idNum - 2);
    let bgImg = "";
    if (idNum === 1) {
      bgImg = data[data.length - 1].previewImg;
      setPrevNum(data.length - 1);
    } else {
      bgImg = data[idNum - 2].previewImg;
    }
    setPrevImg(bgImg);
  };
  const handleNextImg = () => {
    let bgImg = "";
    setNextNum(idNum);
    if (idNum === data.length) {
      bgImg = data[0].previewImg;
      setNextNum(0);
    } else {
      bgImg = data[idNum].previewImg;
    }
    setNextImg(bgImg);
  };

  //click하면 이동한다
  const navigate = useNavigate();

  const handleBg = (clickWhat: ClickSelect) => {
    window.scroll({ top: 10000, behavior: "smooth" });
    setClick(clickWhat);
    if (clickWhat === "prevClick") {
      setTimeout(() => {
        navigate(`/project/${prevNum}`);
      }, 600);
    } else if (clickWhat === "nextClick") {
      setTimeout(() => {
        navigate(`/project/${nextNum}`);
      }, 600);
    }
  };

  return (
    <StyledSubBottom>
      <div className="moreProject">MORE PROJECTS</div>
      <StyledSubNav>
        <div
          className="prev"
          onMouseEnter={() => {
            setSelect("prev");
            handlePrevImg();
          }}
          onClick={() => {
            handleBg("prevClick");
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
            setSelect("home");
          }}
          onClick={() => {
            window.scroll({ top: 10000, behavior: "smooth" });
            navigate("/");
          }}
        >
          HOME
        </div>
        <div
          className="next"
          onMouseEnter={() => {
            setSelect("next");
            handleNextImg();
          }}
          onClick={() => {
            handleBg("nextClick");
          }}
        >
          NEXT
          <Go />
        </div>
      </StyledSubNav>
      <StyledBottomBg>
        <StyledSubBg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + prevImg})`,
            opacity: select === "prev" ? 1 : 0,
          }}
        >
          {" "}
          <StyledTitleBox>
            <StyledProejctSubTitle>
              PROJECT{" "}
              {data[prevNum].id < 10
                ? "0" + data[prevNum].id
                : data[prevNum].id}
            </StyledProejctSubTitle>
            <StyledProjectTitle>{data[prevNum].subTitle}</StyledProjectTitle>
          </StyledTitleBox>
        </StyledSubBg>

        <StyledVideoBox
          onClick={() => {
            // window.scroll({ top: 10000, behavior: "smooth" });
            // navigate("/");
            console.log("click");
          }}
          style={{
            opacity: select === "home" ? 1 : 0,
          }}
        >
          <StyledVideo autoPlay muted loop>
            <source
              src={process.env.PUBLIC_URL + "/image/test.mp4"}
              type="video/mp4"
            />
          </StyledVideo>
        </StyledVideoBox>

        <StyledSubBg
          className={click}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + nextImg})`,
            opacity: select === "next" ? 1 : 0,
          }}
        >
          <StyledTitleBox>
            <StyledProejctSubTitle>
              PROJECT{" "}
              {data[nextNum].id < 10
                ? "0" + data[nextNum].id
                : data[nextNum].id}
            </StyledProejctSubTitle>
            <StyledProjectTitle>{data[nextNum].subTitle}</StyledProjectTitle>
          </StyledTitleBox>
        </StyledSubBg>
      </StyledBottomBg>
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
  width: 90vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: opacity 500ms ease;
  &::after {
    content: "";
    visibility: hidden;
    opacity: 0;
    background-image: inherit;
    position: fixed;
    background-size: cover;
    background-position: center;
    right: calc(5vw - 17px);
    bottom: 10vh;
    width: 90vw;
    height: 50vh;
    transition:
      all 500ms ease-out,
      opacity 0s;
    z-index: -3;
  }
  &.nextClick {
    &::after {
      content: "";
      visibility: visible;
      opacity: 1;
      background-image: inherit;
      position: fixed;
      background-size: cover;
      background-position: center;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      z-index: 100;
    }
  }
`;

const StyledVideoBox = styled.div`
  width: 90vw;
  height: 50vh;
  position: relative;
  overflow: hidden;
  position: absolute;
  transition: opacity 500ms ease;
`;
const StyledVideo = styled.video`
  object-fit: cover;
  position: relative;
  width: 100%;

  bottom: 100%;
`;

const StyledBottomBg = styled.div`
  position: relative;
  width: 90vw;
  height: 50vh;
  margin: 6vh auto 10vh;
`;

const StyledTitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 4rem;
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
  text-align: end;
  word-break: keep-all;
`;

const StyledProejctSubTitle = styled.h6`
  font-size: 1rem;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default SubBottom;
