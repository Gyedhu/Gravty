import styled, { css } from 'styled-components';

export const FloatBoxContainer = styled.div<FloatingBoxStyleType>`   
  left: 0;
  position: fixed; 
  transition: .5s;
  width: 100%;
  z-index: 2; 

  ${({ active, side }) => (side === "center") && css` 
    background-color: #fff8;
    align-items: center;
    display: ${active ? "flex" : "none"};
    justify-content: center;
    left: 50%;
    min-height: 100%;
    top: 50%;
    transform: translate(-50% , -50%);
    transition: background 1s;
  `};

  ${({ active, side }) => (side === "top" || side === undefined) && css`
    top: 0;
    transform: ${active ? "translateY(0%)" : "translateY(-100%)"};
  `};

  ${({ active, side }) => side === "bottom" && css`
    bottom: 0;
    transform: ${active ? "translateY(0%)" : "translateY(100%)"};
  `};
`;
