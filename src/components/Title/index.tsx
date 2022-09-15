import { Button, Divider } from "@mui/material";
import React from "react";
import { ContainerTitleStyled, Texto1Styled, Texto2Styled } from "./styles";

interface TitleProps {
  texto1: string;
  texto2: string;
}
export const Title = ({ texto1, texto2 }: TitleProps) => {
  return (
    <ContainerTitleStyled>
      <Texto1Styled>{texto1}</Texto1Styled>
      <Texto2Styled>{texto2}</Texto2Styled>
    </ContainerTitleStyled>
  );
};
