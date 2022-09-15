import styled from "styled-components";


export const ContainerTitleStyled = styled.div`
    width: 100%;
    margin-left: 10rem;
`;

export const Texto1Styled = styled.span`

`;

export const Texto2Styled = styled.span`
    position: relative;
    display: inline-block;
    font-size: 1rem;
    margin: 8px;
    &:after {
        content: "";
        position: absolute;
        top: 0.65em;
        width: 20rem;
        height: 0.05em;
        background-color: ${(props) => props.theme["color-bg-contrate"]};
        margin-left: 1rem;
        /* left: -1.25em; */
    }

`;