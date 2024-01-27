import React from "react";
import styled from "styled-components";
import "./Icon.scss";

const Menu = () => {
  return (
    <StyledMenu className="menu">
      <StyledMenuIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "hidden" }}
        >
          <circle cx="12.876" cy="12.8344" r="11.5287" stroke="#2F2F2F" />
          <path
            d="M8.08618 9.72559H17.6656"
            stroke="#2F2F2F"
            className="menuPath1"
          />
          <path
            d="M8.08618 12.8344H17.6656"
            stroke="#2F2F2F"
            className="menuPath2"
          />
          <path
            d="M8.08618 15.9431H17.6656"
            stroke="#2F2F2F"
            className="menuPath3"
          />
          <path
            d="M8.08618 9.72559H17.6656"
            stroke="#2F2F2F"
            className="menuPath4"
          />
          <path
            d="M8.08618 12.8344H17.6656"
            stroke="#2F2F2F"
            className="menuPath5"
          />
          <path
            d="M8.08618 15.9431H17.6656"
            stroke="#2F2F2F"
            className="menuPath6"
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
  /* display: inline-block; */
  height: 25px;
  width: 25px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledMenu = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 8vh;
  cursor: pointer;
`;

export default Menu;
