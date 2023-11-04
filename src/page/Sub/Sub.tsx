import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import SubTop from "./SubTop/SubTop";
import SubTopText from "./SubTop/SubTopText";
import SubPreview from "./SubMiddle/SubPreview";
import SubDetail from "./SubMiddle/SubDetail";
import SubBottom from "./SubBottom/SubBottom";
import { ReactLenis } from "@studio-freight/react-lenis";

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
//gsap.registerPlugin(ScrollTrigger);

const Sub = () => {
  const { id } = useParams();
  console.log(id);
  let idNum = 0;

  if (id && typeof id === "string") {
    idNum = parseInt(id);
  } else {
    idNum = 0;
  }
  console.log(idNum);

  const thisData = data.filter((originData) => originData.id === idNum)[0];

  console.log(thisData.previewImg);

  return (
    <div>
      <ReactLenis root>
        <SubTop thisData={thisData} />
        <SubTopText thisData={thisData} />
        <SubPreview thisData={thisData} />
        <SubDetail thisData={thisData} />
        <SubBottom idNum={idNum} />
      </ReactLenis>
    </div>
  );
};

export default Sub;
