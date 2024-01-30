import React from "react";
import styled from "styled-components";
import "./Icon.scss";

const Github = () => {
  return (
    <StyledGithub className="github">
      <StyledGithubIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12" stroke="#2F2F2F" />
        </svg>
        <StyledGithubCatIcon
          className="githubCat"
          width="18"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.19055 14.8715C7.19064 14.9938 5.76474 16.3996 4.42595 15.5942C2.70063 14.5563 3.4285 13.3972 1.34546 12.8394"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <mask id="path-2-inside-1_268_23" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.48413 0.387726C3.21633 0.190499 2.8427 0.42277 2.86743 0.771099L3.16674 4.98654C2.3993 5.89194 1.95544 6.96337 1.95544 8.11166C1.95544 10.5347 3.93171 12.6155 6.75431 13.5162V20.5537C6.75431 21.6583 7.64974 22.5537 8.75431 22.5537H11.0206C12.1252 22.5537 13.0206 21.6583 13.0206 20.5537V13.5163C15.8433 12.6155 17.8196 10.5347 17.8196 8.11166C17.8196 6.9632 17.3757 5.89163 16.608 4.98615L16.9073 0.771099C16.932 0.42277 16.5584 0.190499 16.2906 0.387726L13.1045 2.73425C12.1213 2.41042 11.0327 2.23048 9.88754 2.23048C8.74224 2.23048 7.65364 2.41045 6.67036 2.73433L3.48413 0.387726Z"
            />
          </mask>
          <path
            d="M2.86743 0.771099L3.86492 0.700275L3.86492 0.700275L2.86743 0.771099ZM3.48413 0.387726L4.07714 -0.417468L4.07714 -0.417468L3.48413 0.387726ZM3.16674 4.98654L3.92957 5.63314C4.09851 5.43384 4.18273 5.17633 4.16423 4.91572L3.16674 4.98654ZM6.75431 13.5162H7.75431C7.75431 13.0811 7.4729 12.6959 7.05833 12.5636L6.75431 13.5162ZM13.0206 13.5163L12.7166 12.5636C12.3021 12.6959 12.0206 13.0811 12.0206 13.5163H13.0206ZM16.608 4.98615L15.6105 4.91533C15.592 5.17597 15.6763 5.4335 15.8452 5.63282L16.608 4.98615ZM16.9073 0.771099L15.9098 0.700274L15.9098 0.700275L16.9073 0.771099ZM16.2906 0.387726L15.6976 -0.417469L15.6976 -0.417468L16.2906 0.387726ZM13.1045 2.73425L12.7916 3.68406C13.0992 3.78535 13.4368 3.73146 13.6975 3.53944L13.1045 2.73425ZM6.67036 2.73433L6.07735 3.53952C6.33808 3.73155 6.67566 3.78544 6.98321 3.68413L6.67036 2.73433ZM3.86492 0.700275C3.88035 0.917565 3.76666 1.11679 3.59404 1.2241C3.41536 1.33518 3.12737 1.36691 2.89112 1.19292L4.07714 -0.417468C3.57309 -0.78869 2.96439 -0.739434 2.53813 -0.474443C2.11792 -0.213221 1.82978 0.276304 1.86994 0.841923L3.86492 0.700275ZM4.16423 4.91572L3.86492 0.700275L1.86994 0.841923L2.16925 5.05737L4.16423 4.91572ZM2.95544 8.11166C2.95544 7.23331 3.29238 6.38487 3.92957 5.63314L2.40391 4.33995C1.50622 5.39901 0.955444 6.69343 0.955444 8.11166H2.95544ZM7.05833 12.5636C4.47411 11.7389 2.95544 9.93933 2.95544 8.11166H0.955444C0.955444 11.13 3.38931 13.492 6.45029 14.4689L7.05833 12.5636ZM5.75431 13.5162V20.5537H7.75431V13.5162H5.75431ZM5.75431 20.5537C5.75431 22.2106 7.09746 23.5537 8.75431 23.5537V21.5537C8.20203 21.5537 7.75431 21.106 7.75431 20.5537H5.75431ZM8.75431 23.5537H11.0206V21.5537H8.75431V23.5537ZM11.0206 23.5537C12.6775 23.5537 14.0206 22.2106 14.0206 20.5537H12.0206C12.0206 21.106 11.5729 21.5537 11.0206 21.5537V23.5537ZM14.0206 20.5537V13.5163H12.0206V20.5537H14.0206ZM16.8196 8.11166C16.8196 9.93936 15.3009 11.7389 12.7166 12.5636L13.3246 14.4689C16.3857 13.4921 18.8196 11.1301 18.8196 8.11166H16.8196ZM15.8452 5.63282C16.4826 6.38463 16.8196 7.23318 16.8196 8.11166H18.8196C18.8196 6.69322 18.2687 5.39863 17.3708 4.33949L15.8452 5.63282ZM15.9098 0.700275L15.6105 4.91533L17.6055 5.05697L17.9048 0.841923L15.9098 0.700275ZM16.8836 1.19292C16.6474 1.36691 16.3594 1.33518 16.1807 1.2241C16.0081 1.11679 15.8944 0.917564 15.9098 0.700274L17.9048 0.841924C17.9449 0.276305 17.6568 -0.21322 17.2366 -0.474443C16.8103 -0.739435 16.2016 -0.788689 15.6976 -0.417469L16.8836 1.19292ZM13.6975 3.53944L16.8836 1.19292L15.6976 -0.417468L12.5115 1.92905L13.6975 3.53944ZM9.88754 3.23048C10.9286 3.23048 11.9114 3.39415 12.7916 3.68406L13.4173 1.78444C12.3311 1.42669 11.1369 1.23048 9.88754 1.23048V3.23048ZM6.98321 3.68413C7.86349 3.39418 8.84636 3.23048 9.88754 3.23048V1.23048C8.63812 1.23048 7.44378 1.42672 6.35751 1.78453L6.98321 3.68413ZM2.89112 1.19292L6.07735 3.53952L7.26337 1.92914L4.07714 -0.417468L2.89112 1.19292Z"
            fill="black"
            mask="url(#path-2-inside-1_268_23)"
          />
        </StyledGithubCatIcon>
      </StyledGithubIcon>
      <StyledGithubText>GITHUB</StyledGithubText>
    </StyledGithub>
  );
};

const StyledGithub = styled.div`
  cursor: pointer;
`;
const StyledGithubIcon = styled.div`
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
const StyledGithubCatIcon = styled.svg`
  transform: translate(-0.5px, 4px);
`;
const StyledGithubText = styled.h6`
  font-size: 1rem;
`;
export default Github;