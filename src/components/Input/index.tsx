import React, { forwardRef } from "react";
import {
  InputContainer, SelectContainer
} from "./style";

const Input = forwardRef<HTMLInputElement & HTMLSelectElement | null, InputProps>(({ select, options, ...props }, ref) => {
  if (select)
    return <SelectContainer ref={ref}  {...props}>
      {
        options !== undefined &&
        options.map((value, index) =>
          <option key={index}>{value}</option>
        )
      }
    </SelectContainer>
  else
    return <InputContainer ref={ref}   {...props} />
});

export default Input;
