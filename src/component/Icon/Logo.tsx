import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { resetData } from "redux/projectBgSlice";
import { useParams } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Home을 클릭하면 data가 reset 되어야 한다. 이때 resetData함수는 id값을 받아야한다.
  const { id } = useParams();
  let idNum = 0;

  if (id && typeof id === "string") {
    idNum = parseInt(id);
  } else {
    idNum = 0;
  }

  return (
    <StyledLogo
      onClick={() => {
        navigate("/");
        dispatch(resetData(idNum));
      }}
      className="logo"
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
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 8vh;
  cursor: pointer;
  width: fit-content;
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
