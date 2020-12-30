import styled from 'styled-components';

export const TextAreaContainer = styled.textarea`
  border: 1px solid #59886b;
  border-radius: 5px;
  font-family: "jost";
  font-size: 18px;
  min-height: 200px;  
  outline: 0;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: 1px dashed dodgerblue;
  }
`;
