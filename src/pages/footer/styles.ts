import styled from "styled-components";


export const StylesFooter = styled.footer`
    background: ${(props) => props.theme['color-bg-light']};
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;   

    > a  {
        color: ${(props) => props.theme['color-font']};
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 2rem;
        display: inline-block;
        text-decoration: none; 
    }
`;

export const StylesUL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;
    list-style: none;
    > li > a {
        text-decoration: none;
        color: ${(props) => props.theme['color-font']};       
    }

    > li > a:hover {
        text-decoration: none;
        color: ${(props) => props.theme['color-bg-contrate']};       
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const StylesFooterSocials = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;

    > a {
        background: ${(props) => props.theme['color-bg']};
        color:  ${(props) => props.theme.white};
        padding:0.8rem;
        border-radius: 0.7rem;
        display: flex;
        border: 1px solid transparent;
    }

    > a:hover {
        background: transparent;
        color: ${(props) => props.theme['color-bg-contrate']};
        border-color: ${(props) => props.theme['color-bg-contrate']};
    }
`;

export const StyledFooterCopyright = styled.div`
    margin-bottom: 4rem;
    color: ${(props) => props.theme['color-font']};
`;