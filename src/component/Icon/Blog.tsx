import React from "react";
import styled from "styled-components";
import "./Icon.scss";

export default function Blog() {
  return (
    <StyledBlog className="blog">
      <StyledBlogIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="pen"
            d="M9.80992 14.2033L15.9452 4.83652C16.2478 4.37452 16.8677 4.24532 17.3297 4.54793L19.0027 5.6438C19.4647 5.94641 19.5939 6.56625 19.2913 7.02825L13.156 16.395C13.0478 16.5601 12.8932 16.6896 12.7116 16.767L11.0532 17.4738C10.3967 17.7536 9.66689 17.2756 9.6611 16.562L9.64647 14.7593C9.64487 14.5619 9.70174 14.3684 9.80992 14.2033Z"
            stroke="#2F2F2F"
          />
          <path
            className="pen"
            d="M15.123 6.09131L18.4691 8.28304"
            stroke="#2F2F2F"
          />
          <path
            className="line"
            d="M4 19H21"
            stroke="#2F2F2F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledBlogIcon>
      <StyledBlogText>BLOG</StyledBlogText>
    </StyledBlog>
  );
}

const StyledBlog = styled.div`
  cursor: pointer;
`;
const StyledBlogIcon = styled.div`
  border: 1px solid #2f2f2f;
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

const StyledBlogText = styled.h6`
  font-size: 1rem;
`;
