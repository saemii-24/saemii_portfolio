import React, { useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

//styled Component props 타입지정
type menuProps = {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

//gsap 사용
const onMouseEvent = (): void => {
  const timeline = gsap.timeline({ duration: 0.8 });

  timeline
    .fromTo(".path1", { x: 0 }, { x: 50, ease: "power2.in" }, "-=80%")
    .fromTo(".path2", { x: 0 }, { x: 50, ease: "power2.in" }, "-=80%")
    .fromTo(".path3", { x: 0 }, { x: 50, ease: "power2.in" }, "-=80%")
    .fromTo(".path4", { x: -50 }, { x: 0 }, "-=10%")
    .fromTo(".path5", { x: -50 }, { x: 0 }, "-=80%")
    .fromTo(".path6", { x: -50 }, { x: 0 }, "-=80%");
};

const Menu = ({ click, setClick }: menuProps) => {
  const [stroke, setStroke] = useState<string>("#2F2F2F");

  return (
    <StyledMenu>
      <StyledMenuIcon
        className="menu"
        onClick={() => {
          setClick(!click);
          if (click) {
            setStroke("#f8f8f8");
          } else {
            setStroke("#2F2F2F");
          }
        }}
        onMouseEnter={() => {
          onMouseEvent();
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "hidden" }}
        >
          <circle cx="12.876" cy="12.8344" r="11.5287" stroke={stroke} />
          <path
            d="M8.08618 9.72559H17.6656"
            stroke={stroke}
            className="path1"
          />
          <path
            d="M8.08618 12.8344H17.6656"
            stroke={stroke}
            className="path2"
          />
          <path
            d="M8.08618 15.9431H17.6656"
            stroke={stroke}
            className="path3"
          />
          <path
            d="M8.08618 9.72559H17.6656"
            stroke={stroke}
            className="path4"
          />
          <path
            d="M8.08618 12.8344H17.6656"
            stroke={stroke}
            className="path5"
          />
          <path
            d="M8.08618 15.9431H17.6656"
            stroke={stroke}
            className="path6"
          />
        </svg>
      </StyledMenuIcon>
      <StyledMenuText>menu</StyledMenuText>
    </StyledMenu>
  );
};

const StyledMenuText = styled.h6`
  font-size: 1rem;
`;

const StyledMenuIcon = styled.div`
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledMenu = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 8vh;
`;

export default Menu;
