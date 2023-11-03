import React from "react";
import styled from "styled-components";
import { DataType } from "../../../data/data";

const SubTopText = ({ thisData }: { thisData: DataType }) => {
  console.log(thisData);
  return (
    <StyledTextContainer>
      <div>
        <div>
          <StyledTextTitle>작업기간: 주</StyledTextTitle>
          <StyledContentTitle>
            법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써
            효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운
            회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는
            국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도
            예산에 준하여 집행할 수 있다. 국회의원은 그 지위를 남용하여
            국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의
            권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수
            없다.
          </StyledContentTitle>
        </div>
        <div>
          <StyledTextTitle>주요 기능</StyledTextTitle>
          <StyledContentTitle>
            법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써
            효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운
            회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는
            국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도
            예산에 준하여 집행할 수 있다. 국회의원은 그 지위를 남용하여
            국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의
            권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수
            없다.
          </StyledContentTitle>
        </div>
        <div>
          <StyledTextTitle>개발 비화</StyledTextTitle>
          <StyledContentTitle>
            법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써
            효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운
            회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는
            국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도
            예산에 준하여 집행할 수 있다. 국회의원은 그 지위를 남용하여
            국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의
            권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수
            없다.
          </StyledContentTitle>
        </div>
        <div>
          <StyledTextTitle>개발에 사용된 언어/라이브러리</StyledTextTitle>
          <StyledContentTitle>
            법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써
            효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운
            회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는
            국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도
            예산에 준하여 집행할 수 있다. 국회의원은 그 지위를 남용하여
            국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의
            권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수
            없다.
          </StyledContentTitle>
        </div>
      </div>
    </StyledTextContainer>
  );
};

const StyledTextContainer = styled.div`
  width: 1400px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  & > div {
    padding-left: calc(30vw - ((100vw - 1400px - -17px) / 2));
    position: relative;
    right: 0;
  }
`;

const StyledTextTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #aa8c5a;
  font-weight: 400;
`;

const StyledContentTitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
`;
export default SubTopText;
