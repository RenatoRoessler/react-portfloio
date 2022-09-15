import styled from "styled-components";


export const Container = styled.div`
    width: ${(props) => props.theme.container_width_lg};
    height: 100%;
    margin-top: 5rem;
    text-align: center;
    display: flex;
    align-items: center ;
    justify-content: flex-start;
    flex-direction: column;

    
    @media (max-width: 768px) {
        width: ${(props) => props.theme.container_width_sm};        
    }
`

export const ContainerConhecimentos = styled.div`
    background: transparent ;
    margin-top: 1rem;
    border: 1px solid ${(props) => props.theme["color-bg-contrate"]};
    border-radius: 2rem;
    padding: 2.4rem 5rem;   
    transition: all 400ms ease;
    width: 80%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;  


    > article {
        display: flex;
        gap: 1rem;
        color: ${(props) => props.theme["color-font"]}
    }

    :hover {
        background: ${(props) => props.theme["color-bg-contrate"]};
        > article {
            color: ${(props) => props.theme["color-bg"]} ;
        }         
    }

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        padding: 2rem 1rem;   
    }

    @media (max-width: 768px) {
        width: ${(props) => props.theme.container_width_sm};
        display: grid;
        grid-template-columns: 1fr 1fr ;
        padding: 2rem 1rem;   
        width: 90%;
        height: 100%;
        gap: 0.5rem;
        
    }
`;

