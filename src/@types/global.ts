import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body { 
        background-color: ${(props) => props.theme['color-bg']};
        color: ${(props) => props.theme['color-bg-contrate']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        
    }

    section {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;   
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            height: 100%;
        }
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        color: ${(props) => props.theme['color-font']}; 
        transition: ${(props) => props.theme.transition}; 
        text-decoration: none;
    }

    a:hover {
        color: ${(props) => props.theme['color-bg-contrate']}; 
    }

    .MuiOutlinedInput-root fieldset {
        border-color: ${(props) => props.theme['color-font']};
    }

    .MuiStepLabel-iconContainer > svg {
        color: ${(props) => props.theme['color-font']}; 
    }
`
