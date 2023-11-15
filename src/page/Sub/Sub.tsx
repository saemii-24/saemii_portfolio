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
import { useDispatch } from "react-redux";
import { projectClick, subBottomNavClick } from "../../redux/projectBgSlice";

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

  //gsap Animation
  useEffect(() => {
    //subTop animation

    // gsap.fromTo(
    //   ".subTop .mainPic",
    //   { width: "100vw", height: "100vh" },
    //   {
    //     width: "70vw",
    //     height: "85vh",
    //     duration: 1,
    //   }
    // );

    // const subTopTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".subTop",
    //     start: "top bottom",
    //   },
    // });
    // subTopTimeline
    //   .fromTo(
    //     ".subTopTitle div",
    //     { y: 150 },
    //     { y: 0, duration: 1, ease: "power4.out", delay: 0.5 }
    //   )
    //   .fromTo(
    //     ".linkPage .atagChild",
    //     { y: 150 },
    //     { y: 0, duration: 1.2, ease: "power4.out", stagger: 0.1 },
    //     "-=80%"
    //   );

    //subText animation
    // gsap.fromTo(
    //   ".subTextBox> div",
    //   { y: 150, opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1.2,
    //     ease: "power4.out",
    //     stagger: 0.2,
    //     scrollTrigger: {
    //       trigger: ".subTextBox",
    //       start: "top 80%",
    //     },
    //   }
    // );

    //subPreview animation
    // gsap.to(".subPreview", {
    //   backgroundColor: "#2f2f2f",
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: ".subPreview",
    //     start: "top 80%",
    //   },
    // });

    // gsap.fromTo(
    //   ".language > div",
    //   { y: 150, opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     ease: "power4.out",
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: ".subPreview",
    //       start: "top 30%",
    //     },
    //   }
    // );

    //subDetail animation
    gsap.fromTo(
      ".subDetailTitle div",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".subDetailTitle",
          start: "top 90%",
        },
      }
    );
    const detailCount = thisData.detail.length;

    // console.log(detailCount);
    //title컬러 채워지는 animation
    for (let i = 1; i <= detailCount; i++) {
      gsap.fromTo(
        `.detailName${i}`,
        {
          background: "linear-gradient(to right,  #2f2f2f 0%, #ebebeb 0%)",
        },
        {
          background: "linear-gradient(to right,  #2f2f2f 100%, #ebebeb 100%)",
          scrollTrigger: {
            trigger: `.detailName${i}`,
            start: "top 90%",
            end: "bottom 40%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    }

    //subBottom animation
    // gsap.fromTo(
    //   ".subBottomNav",

    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: ".subBottomBg",
    //       start: "top 50%",
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );
  }, [id]);

  return (
    <div ref={subRef} className="sub">
      <ReactLenis root>
        <ToTop idNum={idNum} />
        <SubTop thisData={thisData} idNum={idNum} />
        <SubTopText thisData={thisData} idNum={idNum} />
        <SubPreview thisData={thisData} idNum={idNum} />
        <SubDetail thisData={thisData} />
        <SubBottom idNum={idNum} subRefHeight={subRefHeight} />
        <ToTop idNum={idNum} />
      </ReactLenis>
    </div>
  );
};

export default Sub;
