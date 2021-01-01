import React from "react";
import { TextAreaContainer } from "./style";


const TextArea = React.forwardRef<HTMLTextAreaElement | null, TextAreaProps>(({ ...props }, ref) => {
  return <TextAreaContainer ref={ref}   {...props} />
});

export default TextArea;