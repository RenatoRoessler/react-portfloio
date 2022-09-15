import styled from "styled-components";

export const Container = styled.div`
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12%;
    padding-top: 5rem;
    margin: 0 auto;

    @media (max-width: 768px) {
        
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

`;

export const ContainerCards = styled.div`
    width: 100%;

    > article {
        background: transparent;
        padding: 1.2rem;
        border-radius: 1.2rem;
        text-align: center;
        border: 1px solid ${(props) => props.theme["color-bg-contrate"]};
        transition:  all 400ms ease;
        margin: 10px;

        > a {
            margin-top: 0.7rem;
            display: inline-block;
            /* font-size: 0.8rem; */
        }

        :hover {
            background-color: ${(props) => props.theme["color-bg-contrate"]};
            color: ${(props) => props.theme["color-bg"]};
            cursor: pointer;

            > a {
                color: white;
            }
        }
    }
`

export const ContainerForm= styled.div`
  
`