import React, { useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const ToTop = ({ idNum }: { idNum: number }) => {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isScroll, setIsScroll] = useState<number>(0);

  const handleScroll = (): void => {
    const scrollNow: number = window.scrollY;
    setIsScroll(scrollNow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [idNum]);

  //만약 사용자가 subBottomNav를 클릭하면 top 버튼이 사라져야 한다.
  const subBottomNavClick: boolean = useSelector(
    (state: RootState) => state.projectBgSlice.subBottomNavClick
  );

  return (
    <StyledToTop
      onClick={handleToTop}
      className={classNames({ active: !subBottomNavClick && isScroll > 500 })}
    >
      <svg
        width="19"
        height="11"
        viewBox="0 0 19 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.9375 9.42499L9.57696 1.78564L17.2163 9.42499"
          stroke="#2f2f2f"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div>TOP</div>
    </StyledToTop>
  );
};

const StyledToTop = styled.div`
  width: 3vw;
  height: 3vw;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 11vh;
  right: 7vh;
  background-color: #ffffff;
  z-index: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.05rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(50px);
  transition: all 500ms ease;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
  }
  svg {
    transform: scale(0.8);
  }
  div {
    font-size: 0.8rem;
  }
`;

export default ToTop;
