import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button <ButtonStyleTypes>`
  align-items: center;
  background-color: transparent;
  border: 0; 
  border-bottom: ${({ active }) => active && "4px solid #5b886b"}; 
  color: inherit;
  cursor: pointer;
  display: flex;
  font-size: ${({ size }) => size ? size : "18px"};
  flex-grow: ${({ fit }) => fit && 1};
  gap: 5px;
  justify-content: center;
  max-height: 100px;
  outline: 0;
  padding: 0;
  position: relative;
  transition: opacity .2s;
  width: ${({ width }) => width};  

  ${({ border }) => border && css`
    border: 1px solid #59886b; 
    border-radius: 5px; 
    color: #59886b; 
    padding: 5px 10px;
  `}

  ${({ shadow }) => shadow && css`
    box-shadow:  0 2px 5px rgba(0, 0, 0, .25); 
    border-radius: 5px;   
    padding: 5px 10px;
  `}

  ${({ background }) => background && css`
    background-color: #59886b;  
    border-radius: 5px; 
    color: white; 
    padding: 5px 10px;
  `}

  ${({ link }) => link && css` 
    color: #59886b; 

    & > span {
      text-decoration: underline;
    }
  `} 

  ${({ rounded }) => rounded && css` 
    border-radius: 50px;  
  `}  

  & > span {
    font-family: 'Jost';
  }

  &:active {
    opacity: .2;
  }

  &:focus {   
     ${({ background, border }) => (background || border) && css`
        outline: 1px dashed dodgerblue;
     `};  
      
     ${({ background, border }) => (!background || !border) && css`
        outline: 1px dashed #ddd;
     `};  
  }  
  
`;

