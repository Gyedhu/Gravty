import styled from 'styled-components';

export const CheckBoxContainer = styled.span`
  display: flex;
  gap: 5px;
  padding: 10px 0;
  user-select: none;  

  & > * {
    cursor: pointer;
  }
`;
