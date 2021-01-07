import styled from "styled-components";

export const TextContainer = styled.p<TextStylesTypes>`
  color: inherit;
  font-family: ${({ fancy }) => fancy ? "Redressed" : "jost"};
  font-size: ${props => props.size ? props.size : "20px"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  margin: 0; 
  text-decoration: ${props => props.underline && "underline "}; 
  padding: ${props => props.underline ? "10px" : "none"} 0;
  text-align: ${props => props.align};
`;
