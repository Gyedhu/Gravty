import styled, { css } from 'styled-components';

export const FloatBoxContainer = styled.div<FloatingBoxStyleType>`  
  left: 0;
  position: fixed; 
  transition: .5s;
  width: 100%;
  z-index: 2;

  ${({ active, side }) => (side === "top" || side === undefined) && css`
    top: 0;
    transform: ${active ? "traslateY(0%)" : "translateY(-100%)"};
  `};

  ${({ active, side }) => side === "bottom" && css`
    bottom: 0;
    transform: ${active ? "traslateY(0%)" : "translateY(100%)"};
  `};
`;
