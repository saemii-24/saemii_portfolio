import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import SubTop from "./SubTop/SubTop";
import SubBottom from "./SubBottom/SubBottom";
import SubPreview from "./SubMiddle/SubPreview";
import SubTopText from "./SubTop/SubTopText";

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
      <SubTop thisData={thisData} />
      <SubTopText thisData={thisData} />
      <SubPreview thisData={thisData} />
      <SubBottom thisData={thisData} />
    </div>
  );
};

export default Sub;
