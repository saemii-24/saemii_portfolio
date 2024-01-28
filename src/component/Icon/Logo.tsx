import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { resetData, subBottomNavClick } from "redux/projectBgSlice";
import { useParams } from "react-router-dom";
import cn from "classnames";

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Home을 클릭하면 data가 reset 되어야 한다. 이때 resetData함수는 id값을 받아야한다.
  const { id } = useParams();
  let idNum: number = 0;

  if (id && typeof id === "string") {
    idNum = parseInt(id);
  } else {
    idNum = 0;
  }

  //subBottomNav를 클릭하면 useDispatch는 true가 되어야 한다.
  //state초기화를 위해 사용

  return (
    <StyledLogo className="logo">
      <ul>
        <li
          onClick={() => {
            navigate("/");
            dispatch(resetData(idNum));
          }}
        >
          <StyledLogoIcon>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.876" cy="12.8344" r="11.5287" stroke="#2F2F2F" />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logoStar"
            >
              <path d="M12.9768 6.10449V20.2271" stroke="black" />
              <path d="M20.0381 13.166L5.91553 13.166" stroke="black" />
              <path d="M17.97 8.17285L7.98381 18.159" stroke="black" />
              <path d="M17.97 18.1592L7.98382 8.17302" stroke="black" />
            </svg>
          </StyledLogoIcon>
          <StyledLogoText>HOME</StyledLogoText>
        </li>
        <li
          className={cn("nav__prev", {
            white: Number(id) == 0 || Number(id) == 3 || Number(id) == 4,
          })}
          onClick={() => {
            dispatch(subBottomNavClick(true));
            setTimeout(() => {
              if (Number(id) === 0) {
                navigate(`/project/${5}`);
              } else {
                navigate(`/project/${Number(id) - 1}`);
              }
            }, 100);
          }}
        >
          <StyledLogoText>PREV</StyledLogoText>
        </li>
        <li
          className={cn("nav__next", {
            white: Number(id) == 0 || Number(id) == 3 || Number(id) == 4,
          })}
          onClick={async () => {
            dispatch(subBottomNavClick(true));
            setTimeout(() => {
              if (Number(id) === 5) {
                navigate(`/project/${0}`);
              } else {
                navigate(`/project/${Number(id) + 1}`);
              }
            }, 100);
          }}
        >
          <StyledLogoText>NEXT</StyledLogoText>
        </li>
      </ul>
    </StyledLogo>
  );
};

const StyledLogo = styled.nav`
  margin-top: 8vh;
  ul,
  li {
    gap: 12px;
    list-style: none;
    display: flex;
    align-items: center;
  }
  li {
    cursor: pointer;
    width: fit-content;
    &.white > h6 {
      color: #f8f8f8;
    }
  }
  .nav__prev {
    margin-left: auto;
    margin-right: 12px;
  }
`;

const StyledLogoIcon = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
  }
`;

const StyledLogoText = styled.h6`
  font-size: 1rem;
`;
export default Logo;
