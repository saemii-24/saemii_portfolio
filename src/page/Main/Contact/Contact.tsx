import React from "react";
import styled from "styled-components";
import Github from "component/Icon/Github";
import Mail from "component/Icon/Mail";

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
        <ContactTitle className="type contactTitle">CONTACT</ContactTitle>

        <BottomText>
          <div className="mail">
            <SmallTitle className="smallTitle__parent">
              <Mail />
            </SmallTitle>
            <AboutText className="mail smallTitle__text">
              hims2419@gmail.com
            </AboutText>
          </div>
          <div className="github">
            <SmallTitle className="smallTitle__parent">
              <Github />
            </SmallTitle>
            <div className="github smallTitle__text">@saemii-24</div>
          </div>
        </BottomText>
      </div>
      <HomeCover className="homeCover" />
    </StyledContact>
  );
};

const StyledContact = styled.div`
  margin-left: 100vw;
  /* position: absolute; */
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  position: relative;
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
