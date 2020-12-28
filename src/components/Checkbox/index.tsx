import React from 'react'
import { CheckBoxContainer } from './style';

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  title: string;
}

const Checkbox: React.FC<Props> = ({ title, ...props }) => {
  return <CheckBoxContainer>
    <input {...props} type="checkbox" id="check" />
    <label htmlFor="check">{title}</label>
  </CheckBoxContainer>
}

export default Checkbox;
