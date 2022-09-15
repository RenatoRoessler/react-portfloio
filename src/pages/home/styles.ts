import styled, { keyframes } from "styled-components";


const mainBlock = keyframes`
    0% {
        width: 0%;
        left: 0;

    }
    50% {
        width: 100%;
        left: 0;

    }
    100% {
        width: 0;
        left: 100%;
    }
`;

const mainFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const popIn = keyframes`
    0% {
        width: 0px;
        height: 0px;
        background: #e9d856;
        border: 0px solid #ddd;
        opacity: 0;
    }
    50% {
        width: 10px;
        height: 10px;
        background: #e9d856;
        opacity: 1;
        bottom: 45px;
    }
    65% {
        width: 7px;
        height: 7px;
        bottom: 0px;
        width: 15px
    }
    80% {
        width: 10px;
        height: 10px;
        bottom: 20px
    }
    100% {
        width: 7px;
        height: 7px;
        background: #e9d856;
        border: 0px solid #222;
        bottom: 13px;
    }
`;

const secBlock = keyframes`
    0% {
        width: 0%;
        left: 0;
    }
    50% {
        width: 100%;
        left: 0;
    }
    100% {
        width: 0;
        left: 100%;
    }
`;

const secFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;


export const ContainerFadeInText = styled.header`
    width: 100%;
    height: 100vh;
    /* background: #232323; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledBox = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const StyledTitled = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;

    > span {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: ${mainBlock} 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
    }

    > h1 {
        font-family: 'Poppins';
        color: ${(props) => props.theme['color-font']};
        font-size: 32px;
        -webkit-animation: ${mainFadeIn} 2s forwards;
        -o-animation: ${mainFadeIn} 2s forwards;
        animation: ${mainFadeIn} 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        > span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          background: #ffb510;
          /* -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards; */
          animation: ${popIn} 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

    }
    }
`;

export const StyledRole = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    margin-top: -10px;

    > div {
        width: 0%;
        height: inherit;
        background: #1967d2;
        position: absolute;
        animation: ${secBlock} 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
    }
    >  p {
        animation: ${secFadeIn} 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
         font-weight: 400;
        font-family: 'Lato';
        color: ${(props) => props.theme['color-font']};
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 5px;
    }
`;

export const StyledScrolDown = styled.a`
    position: absolute;
    right: 0rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-family: 0.9rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
`;

