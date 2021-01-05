import React from "react";

const PageWriter = (Writer) => {

  // --- On Fucus --- 
  // On focus we are setting the current typing field in the state
  // On the clear button click the element stored in the 'currentTypingField' will be cleared
  const focus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
  }


  // --- Submit ---
  const submit = () => {
  }

  return (
    <Writer
      onFocus={focus}
    />
  )
}

export default PageWriter;
