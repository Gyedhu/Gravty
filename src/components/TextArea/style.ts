import styled, { css, keyframes } from "styled-components";

export const TextAreaContainer = styled.textarea<TextAreaStyle>`
  /* border: 1px solid #59886b; */
  border: 0;
  border-radius: 5px;
  box-shadow: inset 1px 1px 8px rgba(0, 0, 0, .15), inset -1px -1px 8px rgba(0, 0, 0, .15);
  font-family: "jost"; 
  font-size: ${({ fontSize }) => fontSize ? fontSize : "20px"}; 
  outline: 0;
  padding: 10px;
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
