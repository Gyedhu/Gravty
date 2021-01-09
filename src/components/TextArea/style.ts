import styled, { css, keyframes } from "styled-components";

export const TextAreaContainer = styled.textarea<TextAreaStyle>`
  border: 1px solid #59886b;
  border-radius: 5px;
  font-family: "jost"; 
  font-size: ${({ fontSize }) => fontSize ? fontSize : "20px"}; 
  outline: 0;
  padding: 20px;
  text-align: ${({ align }) => align};
  width: 100%;   
  
  ${({ type }) => type === "dashed" && css`
    animation: ${keyframes`
      0% {
        border-color: #ccc;
      }
      50% {
        border-color: #fff;
      }
      100% {
        border-color: #ccc;
      }
    `} 1s infinite;
    border: 1px ${type}; 
  `};

  ${({ size }) => size === 1 && css`
    overflow: hidden;
    resize: none;
  `}  

  &:focus {
    outline: 1px dashed dodgerblue;
  }
`;
