import styled, { css } from "styled-components";

export const TextAreaContainer = styled.textarea<TextAreaStyle>`
  border: 1px solid #59886b;
  border-radius: 5px;
  font-family: "jost"; 
  font-size: 18px; 
  outline: 0;
  padding: 10px;
  width: 100%;   
  
  ${({ type }) => type === "dashed" && css`
    border: 1px ${type} #ccc; 
  `};

  ${({ size }) => size === 1 && css`
    overflow: hidden;
    resize: none;
  `}  

  &:focus {
    outline: 1px dashed dodgerblue;
  }
`;
