import React from "react";

import me from "../../../public/assets/geral/me.png";
import {
  ContainerFadeInText,
  StyledBox,
  StyledRole,
  StyledScrolDown,
  StyledTitled,
} from "./styles";

export const Home = () => {
  return (
    <ContainerFadeInText id="#">
      <StyledBox>
        <StyledTitled>
          <span></span>
          <h1>
            Renato Roessler<span></span>
          </h1>
        </StyledTitled>

        <StyledRole>
          <div></div>
          <p>Software Developer</p>
        </StyledRole>
      </StyledBox>

      <StyledScrolDown href="#contact">Scroll Down</StyledScrolDown>
    </ContainerFadeInText>
  );
};
