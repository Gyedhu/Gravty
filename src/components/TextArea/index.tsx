import React from "react";
import { TextAreaContainer } from "./style";

interface Props {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement | null, Props>(({ ...props }, ref) => {
  return <TextAreaContainer ref={ref}   {...props}></TextAreaContainer>
});

export default TextArea;