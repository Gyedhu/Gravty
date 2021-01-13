import React, { useEffect, useRef } from "react";
import { TextAreaContainer } from "./style";


const TextArea = React.forwardRef<HTMLTextAreaElement | null, TextAreaProps>(({ size, readOnly, ...props }, ref) => {

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {

    const textArea = textAreaRef.current;

    if (textArea) {
      setTimeout(() => {
        textArea.style.height = `${textArea.scrollHeight}px`;
        textArea.style.maxHeight = "500px";
      }, 100);
    }

  }, [])

  return <TextAreaContainer
    {...readOnly &&
    {
      "aria-readonly": true,
      "disabled": true
    }}
    readOnly={readOnly}
    ref={ref ? ref : textAreaRef}
    rows={size}
    {...props}
  />
});

export default TextArea;