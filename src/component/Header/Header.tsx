import React, { useState } from "react";
import Menu from "component/Icon/Menu";
import styled from "styled-components";
import classNames from "classnames";

type S$clickProps = {
  $click: boolean;
};

const Header = () => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <StyledHeader
      $click={click}
      className={classNames("container", { headerClick: click })}
    >
      <div className="inner">
        <Menu click={click} setClick={setClick} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div<S$clickProps>`
  position: absolute;
  z-index: 100;
`;

export default Header;
