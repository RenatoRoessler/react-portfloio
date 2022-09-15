import styled from "styled-components";


export const Input = styled.input`
    display: none;
`;

type darkMode = {
    darkMode: boolean
}

export const Label = styled.label<darkMode>`
    display: block;
    position: absolute;
    top: 20px;
    right: 10px;
    /* left: 0; */
    width: 75px;
    height: 36px;
    margin: 0 auto;
    background-color: ${(props) => props.darkMode ? '#000' : '#77b5fe'} ;
    border-radius: 56px;
    transform: translateY(-33%);
    cursor: pointer;
    transition: 0.3s ease background-color;
    overflow: hidden;
`

export const BaseStar = styled.div<darkMode>`
    position: absolute;
    top: ${(props) => props.darkMode ? '2px' : '8.45px'}  ;
    left: ${(props) => props.darkMode ? '35px' : '8.45px'}  ;
    width: 19.5px;
    height: 19.5px;
    background-color:${(props) => props.darkMode ? 'yellow' : '#fafd0f'}  ;
    transform:  ${(props) => props.darkMode ? 'scale(0.3)' : 'scale(1)'}  ;
    border-radius: 50%;
    transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
    z-index: 1;
`;


export const Start1 = styled.div<darkMode>`
    top: 0;
    left: -4.55px;
    font-size: 35.1px;
    line-height: 18.2px;
    color: ${(props) => props.darkMode ? 'yellow' : '#fafd0f'}  ;
    transition: 0.3s ease color;
    position: relative;
`;

export const Start2 = styled.div<darkMode>`
    top: 0;
    left: -4.55px;
    font-size: 35.1px;
    line-height: 18.2px;
    color: #fafd0f;
    transition: 0.3s ease color;
    position: absolute;
    transform: rotateZ(36deg);
    bottom: ${(props) => props.darkMode ? '5.2px' : ''}  ;
`;

export const Moon = styled.div<darkMode>`
 
        position: absolute;
        bottom: ${(props) => props.darkMode ? '5.2px' : '-33.8px'};;
        right: 5.2px;
        width: 26px;
        height: 26px;
        background-color: ${(props) => props.darkMode ? '#fff' : '#fff'};
        border-radius: 50%;
        transition: 0.3s ease bottom;
  

    &:before {
        content: "";
        position: absolute;
        top: -7.8px;
        left: -11.05px;
        width: 26px;
        height: 26px;
        background-color: ${(props) => props.darkMode ? '#000' : '#03a9f4'};
        border-radius: 50%;
        transition: 0.3s ease background-color;
    }
`;