import styled from "styled-components";

export const TextContainer = styled.p<TextStylesTypes>`
  color: ${({primary}) => primary ? "#59886b" : "inherit"};
  font-family: ${({ fancy }) => fancy ? "Redressed" : "jost"};
  font-size: ${props => props.size ? props.size : "20px"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  margin: 0; 
  text-decoration: ${props => props.underline && "underline "};  
  text-align: ${props => props.align};
`;
