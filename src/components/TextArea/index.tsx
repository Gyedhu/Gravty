import React from "react";
import { TextAreaContainer } from "./style";


const TextArea = React.forwardRef<HTMLTextAreaElement | null, TextAreaProps>(({ size, ...props }, ref) => {
  return <TextAreaContainer
    ref={ref}
    rows={size}
    {...props}
  />
});

export default TextArea;