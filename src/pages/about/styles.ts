import { FaAward } from "react-icons/fa";
import styled from "styled-components";

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
    margin: 0 auto;
    padding-top: 3rem;
    width: ${(props) => props.theme.container_width_lg};
    
    @media (max-width: 1024px) {
        width: ${(props) => props.theme.container_width_md};
        grid-template-columns: 1fr;
        gap: 0;
        
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: ${(props) => props.theme.container_width_sm};
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

// export const AboutMe = styled.div`
//     width: 100%;
//     aspect-ratio: 1/1;
//     border-radius: 2rem;
//     background: linear-gradient(45deg, transparent, #c8c1b7, transparent);
//     display: grid;
//     place-items: center;

//     /* width: 350px; */
//     height: 475px;

//     @media (max-width: 1024px) {
//         width: 50%;
//         margin: 2rem auto 4rem;
//         height: 50%;
//     }
//     @media (max-width: ${({ theme }) => theme.mobile}) {
//         width: 50%;
//         margin: 2rem auto 4rem;
//         height: 50%;
//     }


// `;

export const AboutMeImage = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    aspect-ratio: 1/1;
    /* transform: rotate(10deg); */
    transition: all 400ms ease;
    margin: 0 auto;
    

    > img {
        display: block;
        width: 100%;
        object-fit: cover;    
        object-position: right bottom; 
    }

    :hover {
        /* -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        transform: scale(1.1) ;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 60%;
    }
`;

export const AboutCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const AboutCardsArticle = styled.article`
    background: transparent;
    color : ${(props) => props.theme["color-font"]};
    border: 1px solid ${(props) => props.theme["color-bg-contrate"]};;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 400ms ease;

    > h5 {
        font-weight: 500;
        margin-bottom: 10px;
    }


    :hover {
        background: ${(props) => props.theme["color-bg-contrate"]};
        border-color: ${(props) => props.theme["color-bg"]};
        color ${(props) => props.theme["color-bg"]};
        cursor: default;
    } 
`;

export const StyledText = styled.p`
    color: ${(props) => props.theme["color-font"]};
    margin-top: 1rem;
    margin-bottom: 4rem;
`;


export const StyledButtonLetsTalk = styled.a`
    background-color: ${(props) => props.theme["color-bg-contrate"]};
    border: 1px solid ${(props) => props.theme["color-bg-contrate"]};
    height: 200px;
    border-radius: 5px;
    padding: 1rem;
    color:${(props) => props.theme["color-bg"]};
    :hover {
        background-color: ${(props) => props.theme["color-bg"]};
        border: 1px solid ${(props) => props.theme["color-bg-contrate"]};
    }
`;

export const ContainerConteudo = styled.div`

`;