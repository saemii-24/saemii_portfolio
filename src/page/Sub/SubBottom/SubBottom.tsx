import React, { useState, useEffect, useRef } from "react";
import Go from "../../../component/Icon/Go";
import styled, { keyframes } from "styled-components";
import { data, DataType } from "../../../data/data";
import "../SubTop/SubTop.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { subBottomNavClick } from "../../../redux/projectBgSlice";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SubBottom = ({
  idNum,
  subRefHeight,
}: {
  idNum: number;
  subRefHeight: number;
}) => {
  //어떤 것을 hover했는지 관리
  type HoverSelect = "prev" | "home" | "next";
  const [select, setSelect] = useState<HoverSelect>("home");

  //어떤 것을 click했는지 관리
  type ClickSelect = "prevClick" | "nextClick" | "";
  const [nextClick, setNextClick] = useState<ClickSelect>("");
  const [prevClick, setPrevClick] = useState<ClickSelect>("");

  //prev, next img state로 관리
  const firstBg = data[0].previewImg;
  const [prevImg, setPrevImg] = useState<string>(firstBg);
  const [nextImg, setNextImg] = useState<string>(firstBg);
  const [prevNum, setPrevNum] = useState<number>(0);
  const [nextNum, setNextNum] = useState<number>(0);

  //현재 data 역방향이지만, 여기선 정방향으로 재정렬한다.
  const sortData: DataType[] = [...data].sort(function (
    a: DataType,
    b: DataType
  ) {
    return a.id - b.id;
  });

  //이전/다음 이미지와 id번호를 관리한다.
  const handlePrevImg = () => {
    if (idNum === 0) {
      const bgImg = sortData[sortData.length - 1].previewImg;
      setPrevImg(bgImg);
      setPrevNum(sortData.length - 1);
    } else {
      const bgImg = sortData[idNum - 1].previewImg;
      setPrevImg(bgImg);
      setPrevNum(idNum - 1);
    }
  };
  const handleNextImg = () => {
    if (idNum === sortData.length - 1) {
      const bgImg = sortData[0].previewImg;
      setNextNum(0);
      setNextImg(bgImg);
    } else {
      const bgImg = sortData[idNum + 1].previewImg;
      setNextNum(idNum + 1);
      setNextImg(bgImg);
    }
  };

  //click하면 주소를 이동한다
  const navigate = useNavigate();

  //hover / click 하면 스크롤을 최하단으로 이동한다
  //전체 화면 길이 = subRefHeight
  //현재 뷰포트 = viewPortHeight
  const viewPortHeight = window.innerHeight;
  const scrollToBottom = subRefHeight - viewPortHeight;

  const goBottom = (): void => {
    window.scroll({ top: scrollToBottom, behavior: "smooth" });
  };

  //className 컨트롤, 페이지 이동
  const handleBg = (clickWhat: ClickSelect): void => {
    if (clickWhat === "prevClick") {
      setPrevClick("prevClick"); //className을 컨트롤
      setTimeout(() => {
        navigate(`/project/${prevNum}`); //이동
        setPrevClick("");
      }, 1200);
    } else if (clickWhat === "nextClick") {
      setNextClick("nextClick"); //className을 컨트롤
      setTimeout(() => {
        navigate(`/project/${nextNum}`); //이동
        setNextClick("");
      }, 1200);
    }
    setIsMouseEnter(false);
  };

  //페이지 바뀔때마다 bottom 이미지는 기본적으로 "home"이어야 한다
  const location = useLocation();
  useEffect(() => {
    setSelect("home");
    setIsMouseEnter(false);
  }, [location]);

  //hover시 마우스 변경
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false); //마우스 모양 렌더링을 위한 state
  const [mouseLocation, setMouseLocation] = useState<number[]>([0, 0]); //마우스 위치

  const handleMouse = (event: MouseEvent) => {
    const clientX = event.clientX - 50; //어긋나는 지점 보정
    const clientY = event.clientY - 50; //어긋나는 지점 보정
    setMouseLocation([clientX, clientY]);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  //subBottomNav를 클릭하면 useDispatch는 true가 되어야 한다.
  const dispatch = useDispatch();

  //gsap
  const subBottomNavRefs = useRef<(HTMLDivElement | null)[]>([]);
  const subBottomBgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.fromTo(
      subBottomNavRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: subBottomBgRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [idNum]);
  return (
    <StyledSubBottom>
      <div
        className="moreProject subBottomNav"
        ref={(el) => (subBottomNavRefs.current[0] = el)}
      >
        MORE PROJECTS
      </div>
      <StyledSubNav
        className="subBottomNav"
        ref={(el) => (subBottomNavRefs.current[1] = el)}
      >
        <div
          className="prev"
          onMouseEnter={() => {
            setSelect("prev");
            handlePrevImg();
          }}
          onClick={() => {
            goBottom();
            handleBg("prevClick");
            dispatch(subBottomNavClick(true));
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
            goBottom();
            navigate("/");
            dispatch(subBottomNavClick(true));
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
            goBottom();
            handleBg("nextClick");
            dispatch(subBottomNavClick(true));
          }}
        >
          NEXT
          <Go />
        </div>
      </StyledSubNav>
      <StyledBottomBg
        className="subBottomBg"
        ref={subBottomBgRef}
        onMouseEnter={() => {
          setIsMouseEnter(true);
        }}
        onMouseLeave={() => {
          setIsMouseEnter(false);
        }}
      >
        {isMouseEnter && (
          <StyledMouse //마우스 커서
            style={{
              left: mouseLocation[0],
              top: mouseLocation[1],
              pointerEvents: "none",
            }}
          >
            CLICK
          </StyledMouse>
        )}
        <StyledSubBg
          className={prevClick}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + prevImg})`,
            opacity: select === "prev" ? 1 : 0,
            visibility: select === "prev" ? "visible" : "hidden",
          }}
          onMouseEnter={() => {
            setSelect("prev");
            handlePrevImg();
          }}
          onClick={() => {
            goBottom();
            handleBg("prevClick");
          }}
        >
          {" "}
          <StyledTitleBox>
            <StyledProejctSubTitle>
              PROJECT{" "}
              {sortData[prevNum].id + 1 < 10
                ? "0" + (sortData[prevNum].id + 1)
                : sortData[prevNum].id + 1}
            </StyledProejctSubTitle>
            <StyledProjectTitle>
              {sortData[prevNum].subTitle}
            </StyledProjectTitle>
          </StyledTitleBox>
        </StyledSubBg>

        <StyledVideoBox
          onClick={() => {
            goBottom();
            navigate("/");
          }}
          style={{
            opacity: select === "home" ? 1 : 0,
            visibility: select === "home" ? "visible" : "hidden",
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
          className={nextClick}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + nextImg})`,
            opacity: select === "next" ? 1 : 0,
            visibility: select === "next" ? "visible" : "hidden",
          }}
          onMouseEnter={() => {
            setSelect("next");
            handleNextImg();
          }}
          onClick={() => {
            goBottom();
            handleBg("nextClick");
          }}
        >
          <StyledTitleBox>
            <StyledProejctSubTitle>
              PROJECT{" "}
              {sortData[nextNum].id + 1 < 10
                ? "0" + (sortData[nextNum].id + 1)
                : sortData[nextNum].id + 1}
            </StyledProejctSubTitle>
            <StyledProjectTitle>
              {sortData[nextNum].subTitle}
            </StyledProjectTitle>
          </StyledTitleBox>
        </StyledSubBg>
      </StyledBottomBg>
    </StyledSubBottom>
  );
};

const StyledSubBottom = styled.div`
  width: 100vw;
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .moreProject {
    font-weight: 300;
    font-size: 3rem;
  }
`;

const StyledSubNav = styled.div`
  display: flex;
  gap: 100px;
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
  min-width: 1400px;
  height: 50vh;
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: opacity 600ms ease;
  &::after {
    content: "";
    visibility: hidden;
    opacity: 0;
    background-image: inherit;
    position: fixed;
    background-size: cover;
    background-position: center;
    right: 5vw;
    bottom: 5vw;
    width: 90vw;
    height: 50vh;
    transition:
      all 400ms ease-out,
      opacity 0s;
    z-index: -3;
  }
  &.nextClick,
  &.prevClick {
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
  min-width: 1400px;
  position: relative;
  overflow: hidden;
  position: absolute;
  transition: opacity 600ms ease;
`;
const StyledVideo = styled.video`
  object-fit: cover;
  position: relative;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledBottomBg = styled.div`
  position: relative;
  width: 90vw;
  height: 50vh;
  margin: 6vh auto 5vw;
  cursor: none;
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

const mouseHoverAnimation = keyframes`
  0%{
    width:0;
    height:0;
    font-size:0;
  line-height: 0px;
  }100%{
    width:100px;
    height:100px;
    font-size:1rem;
  line-height: 100px;
  }
`;

const StyledMouse = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1.5px solid #f8f8f8;
  z-index: 100;
  color: #f8f8f8;
  text-align: center;
  line-height: 100px;
  animation: ${mouseHoverAnimation} 300ms ease-out;
`;

export default SubBottom;
