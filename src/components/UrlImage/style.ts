import styled from "styled-components";

export const ImageContainer = styled.div<UrlImageProps>`
  background: url(${props => props.url}) center center;
  background-size: cover;
  border-radius: ${props => props.rounded ? "50%" : "0"};
  height: ${props => props.height ? props.height : "100px"};
  width: ${props => props.width ? props.width : "100px"};
`; 
