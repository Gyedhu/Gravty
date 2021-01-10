import styled, { css } from "styled-components";

export const FlexViewContainer = styled.div<FlexView>`
  align-items: ${({ align }) => align};
  align-self: ${({ self }) => self}; 
  background-color: ${({ fill }) => fill};
  border: ${({ border }) => border && "1px solid #ddd"}; 
  box-shadow: ${({ shadow }) => shadow && "0 1px 5px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .1)"}; 
  color: ${({ fill }) => (fill === "#59886b" || fill === "#101010" || fill === "#1e90ff" || fill === "#454545") ? "#ffffff" : "inherit"};
  border-radius: ${({ radius }) => radius};
  display: flex; 
  flex-basis: ${({ bound }) => bound};
  flex-direction: ${({ direction }) => direction};
  flex-grow: ${({ grow }) => grow};
  flex-wrap: ${({ wrap }) => wrap}; 
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};  
  max-height: ${({ maxHeight }) => maxHeight}; 
  max-width: ${({ maxWidth }) => maxWidth}; 
  min-height: ${({ minHeight }) => minHeight}; 
  min-width: ${({ minWidth }) => minWidth};
  padding: ${({ paddingVertical }) => paddingVertical ? paddingVertical : 0} ${({ paddingHorizontal }) => paddingHorizontal ? paddingHorizontal : 0};
 

  ${({ popup, delay }) => popup && css`
    animation: popup .5s ${delay ? delay : 0}s forwards;
    opacity: 0; 
    transform: translateY(50px);
  `}; 

  ${({ maxHeight, maxWidth }) => (maxHeight || maxWidth) && css`  
    overflow: auto;
  `}

  ${({ sticky }) => sticky && css`  
    position:  sticky;
    top: 0;
    z-index:  1;  
  `} 
  
  @media (max-width: 599px) {  
    ${({ mobile }) => mobile && css` 
      align-items: center; 
      justify-content: space-around;
      width: 100%;
    `}
  }
`;
