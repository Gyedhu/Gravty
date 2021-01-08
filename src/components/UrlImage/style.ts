import styled, { css } from "styled-components";

export const ImageContainer = styled.div<UrlImageStyleTypes>`
  background: url(${({ url }) => url}) center center no-repeat;
  background-size: ${({ fit }) => fit ? "contain" : "cover"}; 
  border-radius: ${props => props.rounded ? "25%" : "0"}; 
  height: ${({ height }) => height ? height : "100%"};
  width: ${({ width }) => width ? width : "100%"}; 

  ${({ border }) => border && css`
    border: 4px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2); 
  `};
`; 
