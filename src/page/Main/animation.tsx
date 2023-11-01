import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export function splitLines(target: string) {
  return new SplitType(`.${target}`, {
    types: "lines",
    lineClass: `${target}--child type`,
  });
}

export function splitChars(target: string) {
  return new SplitType(`.${target}`, {
    types: "chars",
  });
}

export function animationLines(
  target: string,
  triggerOption: object,
  stagger: number = 0.1,
  duration: number = 1,
  ease: string = "power4.out"
) {
  return gsap.fromTo(
    target,
    {
      y: 250,
    },
    {
      y: 0,
      stagger: stagger,
      duration: duration,
      ease: ease,
      scrollTrigger: triggerOption,
    }
  );
}

// export function wrapLines(target: string) {
//   const targetDom = document.querySelectorAll(
//     target
//   ) as NodeListOf<HTMLElement>;

//   targetDom.forEach((dom: HTMLElement) => {
//     const text = dom.innerText;
//     const makeSpan = document.createElement("span");
//     makeSpan.textContent = text;
//     dom.innerText = "";
//     dom.append(makeSpan);
//   });
// }
