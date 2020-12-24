import styled from "styled-components";

export const ContentContainer = styled.p<ContentTypes>`
  background-color: ${props => props.background && "#f5f5f5"};
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap && 15}px;
  padding: ${props => props.background ? 10 : 0}px;
`;
