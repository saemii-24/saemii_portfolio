import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";
const ProjectBg = () => {
  const bgActive = useSelector((state: RootState) => state.projectBgSlice);
  //const [nowBgActive, setNowBgActive] = useState<boolean>(false);

  console.log(bgActive);

  const activeCheck = bgActive.every((bg) => bg.active === false);
  // setNowBgActive(!activeCheck);
  console.log(activeCheck);

  return <StyledProjectBg></StyledProjectBg>;
};

const StyledProjectBg = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default ProjectBg;
