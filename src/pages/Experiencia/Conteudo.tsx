import React from "react";
import { ContainerAtividades, ConteudoContainerStyled } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";

export interface ConteudoProps {
  title: string;
  subtitle: string;
  atividades: string[];
  empresa: EmpresaProps;
}

type EmpresaProps = {
    nome: string;
    site: string;
}

export const Conteudo = ({ title, subtitle, atividades,empresa }: ConteudoProps) => {
  return (
    <ConteudoContainerStyled>
    
      <h1>{title}  <a href={empresa.site} rel="noopener">{empresa.nome}</a></h1>
      
      <h4>{subtitle}</h4>
      {atividades.map((item, index) => (
        <ContainerAtividades key={index}>
          <AiFillCheckCircle fontSize={20} />
          <p>{item}</p>
        </ContainerAtividades>
      ))}
    </ConteudoContainerStyled>
  );
};
