import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonContainer } from "./style";

const Button: React.FC<ButtonProps> = ({ title, to, onClick, ...props }) => {

  const history = useHistory();

  const _onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (to)
      history.push(to)
    if (typeof onClick === "function")
      onClick(event);
  }

  return <ButtonContainer onClick={_onClick}  {...props}>
    {title && <span>{title}</span>}
  </ButtonContainer>
}

export default Button;
