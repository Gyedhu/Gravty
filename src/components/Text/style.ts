import styled from "styled-components";

export const TextContainer = styled.p<TextTypes>`
  font-size: ${props => props.size ? props.size : "20px"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  margin: 0; 
  border-bottom: ${props => props.underline ? "1px solid #bbb" : "none"};
  padding: ${props => props.underline ? "10px" : "none"} 0;
  text-align: ${props => props.align};
`;
