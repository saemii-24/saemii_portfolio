import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import SubTop from "./SubTop/SubTop";
import SubTopText from "./SubTop/SubTopText";
import SubPreview from "./SubMiddle/SubPreview";
import SubDetail from "./SubMiddle/SubDetail";
import SubBottom from "./SubBottom/SubBottom";
// import Scroll from "../../component/Scroll/Scroll";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Sub = () => {
  const { id } = useParams();
  console.log(id);
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

  useEffect(() => {
    if (subRef.current) {
      setSubRefHeight(subRef.current.offsetHeight);
    }
  }, []);

  //gsap Animation
  useEffect(() => {
    //subTop animation
    const subTopTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".subTop",
        start: "top bottom",
      },
    });
    subTopTimeline
      .fromTo(
        ".subTopTitle div",
        { y: 150 },
        { y: 0, duration: 1, ease: "power4.out", delay: 0.5 }
      )
      .fromTo(
        ".linkPage .atagChild",
        { y: 150 },
        { y: 0, duration: 1.2, ease: "power4.out", stagger: 0.1 },
        "-=80%"
      );

    //subText animation
    gsap.fromTo(
      ".subTextBox> div",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".subTextBox",
          start: "top 80%",
        },
      }
    );

    //subPreview animation
    gsap.to(".subPreview", {
      backgroundColor: "#2f2f2f",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".subPreview",
        start: "top 80%",
      },
    });

    gsap.fromTo(
      ".language > div",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".subPreview",
          start: "top 30%",
        },
      }
    );

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
    const detailCount = data[idNum].detail.length;
    console.log(idNum);
    console.log(detailCount);
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
    gsap.fromTo(
      ".subBottomNav",

      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".subBottomBg",
          start: "top 50%",
        },
      }
    );
  }, [id]);
  return (
    <div ref={subRef} className="sub">
      <ReactLenis root>
        <SubTop thisData={thisData} idNum={idNum} />
        <SubTopText thisData={thisData} />
        <SubPreview thisData={thisData} />
        <SubDetail thisData={thisData} />
        <SubBottom idNum={idNum} subRefHeight={subRefHeight} />
        {/* <Scroll pageNow={"sub"} pageHeight={subRefHeight} /> */}
      </ReactLenis>
    </div>
  );
};

export default Sub;
