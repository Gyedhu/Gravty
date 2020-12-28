import styled from "styled-components"; 

export const ImageContainer = styled.div<UrlImageStyleTypes>`
  background: url(${({ url }) => url}) center center no-repeat;
  background-size: ${({ fit }) => fit ? "contain" : "cover"}; 
  border-radius: ${props => props.rounded ? "50%" : "0"}; 
  height: ${({ height }) => height ? height : "100%"};
  width: ${({ width }) => width ? width : "100%"}; 
`; 
