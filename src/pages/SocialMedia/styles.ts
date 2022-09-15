import styled from "styled-components";

export const ContainerSocialMedia = styled.div`

    position: fixed;
    bottom: 0rem;
    left: 5rem;
    height: 200px;
    
    > ul {
        list-style-type: none;
        
        > li {
            padding-bottom: 1.2rem;
        }
    }      

    &:after {
        content: '';
        width: 1px;
        height: 6rem;
        background: ${(props) => props.theme["color-font"]};
        position: absolute;
        left: 10px;
        bottom: 0px;
    }   

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }

    @media (max-width: 1024px) {
        left: 1rem;
    }


  
`;