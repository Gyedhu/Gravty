import React from "react";
import { TextAreaContainer } from "./style";

interface Props {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<Props> = ({ ...props }) => {
  return <TextAreaContainer    {...props}></TextAreaContainer>

}

export default TextArea;
