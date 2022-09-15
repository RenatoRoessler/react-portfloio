import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin-top: 5rem;
  width: 80%;
  /* height: 600px; */
`;

export const ConteudoContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme["color-font"]};
  > h1 > a  {
    color: ${(props) => props.theme["color-bg-contrate"]};
    :hover {
      color: ${(props) => props.theme["color-font"]};
    }
  }
`;

export const ContainerAtividades = styled.div`
  display: flex ;
  gap: 1rem;
  margin-top: 0.8rem;

  
`;