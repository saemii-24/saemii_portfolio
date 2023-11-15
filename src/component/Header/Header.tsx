import React from "react";
import Menu from "component/Icon/Menu";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="inner">
        <Menu />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: absolute;
  z-index: 100;
`;

export default Header;
