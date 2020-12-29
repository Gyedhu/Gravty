import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button <ButtonStyleTypes>`
  align-items: center;
  background-color: transparent;
  border: 0; 
  border-bottom: ${({ active }) => active && "4px solid #59886b"};
  color: #252525;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  flex-grow: ${({ fit }) => fit && 1};
  gap: 5px;
  justify-content: center;
  outline: 0;
  transition: opacity .2s;
  width: ${({ width }) => width};

  ${({ background: fill }) => fill && css`
    background-color: #59886b;
    border-radius: 5px;
    color: white; 
    padding: 5px 10px;
  `}

  ${({ link }) => link && css` 
    color: #59886b; 

    & > span {
      text-decoration: underline;
    }
  `}

  & > span {
    font-family: 'Jost';
  }

  &:active {
    opacity: .2;
  }
  
`;
