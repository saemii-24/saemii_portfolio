import React from "react";
import styled from "styled-components";

const Prepare = () => {
  return (
    <StyledPrepare>
      <h4>
        &ldquo;사용자에게 긍정적인 첫인상을 만들 수 있는 프론트엔드 개발자가
        되겠습니다.&rdquo;
      </h4>
    </StyledPrepare>
  );
};

const StyledPrepare = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  min-height: 700px;
  min-width: 1400px;
  h4 {
    position: absolute;
    top: 50%;
    left: 50vw;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: 300;
    color: #f8f8f8;
    word-break: keep-all;
    text-align: center;
  }
`;
export default Prepare;
