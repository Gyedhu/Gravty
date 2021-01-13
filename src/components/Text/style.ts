import styled from "styled-components";

export const TextContainer = styled.p<TextStylesTypes>`
  align-items: center;
  color: ${({ primary }) => primary ? "#59886b" : "inherit"};
  display: flex;
  font-size: ${props => props.size ? props.size : "20px"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  gap: 5px;
  margin: 0; 
  text-decoration: ${props => props.underline && "underline "};   
  text-align: ${({ alignJustify, align }) => alignJustify ? "justify" : align};  

  & > span { 
    font-family: ${({ fancy }) => fancy ? "Redressed" : "jost"}; 
    width: 100%;
  }
`;
