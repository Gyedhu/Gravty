import React from 'react'
import { FloatBoxContainer } from './style'


const FloatingBox: React.FC<FloatingBoxProps> = ({ children, ...props }) => {
  return <FloatBoxContainer {...props}>
    {children}
  </FloatBoxContainer>
}

export default FloatingBox;
