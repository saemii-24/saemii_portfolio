import React from "react";
import styled from "styled-components";
import Github from "component/Icon/Github";
import Mail from "component/Icon/Mail";
import Call from "component/Icon/Call";
import { Link } from "react-router-dom";
import Blog from "component/Icon/Blog";

const Contact = () => {
  return (
    <StyledContact className="contact">
      <ContactLine
        width="2"
        height="147"
        viewBox="0 0 2 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.513428 0V146.576"
          stroke="#2F2F2F"
          className="contactLine"
        />
      </ContactLine>
      <div className="inner">
        <ContactTitle className="type contactTitle">Thank you</ContactTitle>

        <BottomText>
          <div className="call">
            <SmallTitle className="smallTitle__parent">
              <Call text={"PHONE"} />
            </SmallTitle>
            <AboutText className="mail smallTitle__text">
              010.7150.9032
            </AboutText>
          </div>
          <div className="mail">
            <Link
              to="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hims2419@gmail.com"
              target="_blank"
            >
              <SmallTitle className="smallTitle__parent">
                <Mail />
              </SmallTitle>
              <AboutText className="mail smallTitle__text">
                hims2419@gmail.com
              </AboutText>
            </Link>
          </div>
          <div className="github">
            <Link to="https://github.com/saemii-24" target="_blank">
              <SmallTitle className="smallTitle__parent">
                <Github />
              </SmallTitle>
              <div className="github smallTitle__text">@saemii-24</div>
            </Link>
          </div>
          <div className="blog">
            <Link to="https://saemii-24.github.io/" target="_blank">
              <SmallTitle className="smallTitle__parent">
                <Blog />
              </SmallTitle>
              <div className="blog smallTitle__text">saemii blog</div>
            </Link>
          </div>
        </BottomText>
      </div>
      <HomeCover className="homeCover" />
    </StyledContact>
  );
};

const StyledContact = styled.div`
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  position: relative;
  min-width: 1400px;
  min-height: 700px;
`;

const HomeCover = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #f8f8f8;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 10%, 75% 10%, 75% 100%, 0 100%);
  z-index: -1;
`;
const ContactLine = styled.svg`
  position: absolute;
  top: 0;
  right: 20%;
  path {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
`;
const ContactTitle = styled.h1`
  font-size: 11rem;
  font-weight: 600;
  top: 22%;
  position: absolute;
  margin-left: -10px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

const SmallTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h4 {
      font-weight: 600;
      margin-top: -1px;
    }
  }
`;
const BottomText = styled.div`
  max-width: 1200px;
  display: flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 10vh;
  font-weight: 400;
  gap: 100px;
  min-width: 1030px;
`;
const AboutText = styled.div`
  .splitChild {
    overflow: hidden;
  }
`;
export default Contact;
