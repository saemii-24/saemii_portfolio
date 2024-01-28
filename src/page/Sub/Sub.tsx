import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import SubTop from "./SubTop/SubTop";
import SubTopText from "./SubTop/SubTopText";
import SubPreview from "./SubMiddle/SubPreview";
import SubDetail from "./SubMiddle/SubDetail";
import SubBottom from "./SubBottom/SubBottom";
import ToTop from "../../component/Scroll/ToTop";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch, useSelector } from "react-redux";
import { projectClick, subBottomNavClick } from "../../redux/projectBgSlice";
import { RootState } from "redux/store";

const Sub = () => {
  const { id } = useParams();
  let idNum = 0;

  if (id && typeof id === "string") {
    idNum = parseInt(id);
  } else {
    idNum = 0;
  }
  const thisData = data.filter((originData) => originData.id === idNum)[0];

  //subBottom으로 내려 줄 ref
  const subRef = useRef<HTMLDivElement>(null);
  const [subRefHeight, setSubRefHeight] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (subRef.current) {
      setSubRefHeight(subRef.current.offsetHeight);
      dispatch(projectClick(false)); //sub페이지가 열리면 false가 되어야 한다.
    }
  }, []);

  useEffect(() => {
    //subBottom을 클릭하고 id가 변경되면 subBottomNavClick를 false로 변경한다.
    dispatch(subBottomNavClick(false));
  }, [id]);

  //프로젝트 컴포넌트에서 프로젝트를 클릭했는지 boolean값
  const isClick: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.subBottomNavClick
  );
  console.log(isClick);

  return (
    <div ref={subRef} className="sub">
      <ReactLenis root>
        <SubTop thisData={thisData} idNum={idNum} />
        <SubTopText thisData={thisData} idNum={idNum} />
        <SubPreview thisData={thisData} idNum={idNum} />
        <SubDetail thisData={thisData} idNum={idNum} />
        <SubBottom idNum={idNum} subRefHeight={subRefHeight} />
        <ToTop idNum={idNum} />
      </ReactLenis>
    </div>
  );
};

export default Sub;
