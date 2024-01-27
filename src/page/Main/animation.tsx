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

export function animationChars(
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

export function animationOpacity(
  target: string,
  triggerOption: object,
  duration: number = 1.2,
  ease: string = "power4.out"
) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: duration,
      ease: ease,
      scrollTrigger: triggerOption,
    }
  );
}

export function mainPinAnimation(
  section: HTMLDivElement,
  trigger: HTMLDivElement
) {
  return gsap.fromTo(
    section,
    { x: 0 },
    {
      x: -section!.offsetWidth + trigger.offsetWidth,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "+=6000",
        scrub: 1,
        pin: true,
      },
    }
  );
}
