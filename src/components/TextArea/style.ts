import styled, { css } from "styled-components";

export const TextAreaContainer = styled.textarea<TextAreaStyle>`
  border: 1px solid #59886b;
  border-radius: 5px;
  font-family: "jost";
  font-size: 18px; 
  outline: 0;
  padding: 10px;
  width: 100%;

  ${({ size }) => size === "small" && css`  
    height: 50px;
  `};

  ${({ size }) => size === "medium" && css`  
    height: 100px;
  `};

  ${({ size }) => size === "big" && css`  
    height: 200px;
  `};

  &:focus {
    outline: 1px dashed dodgerblue;
  }
`;
