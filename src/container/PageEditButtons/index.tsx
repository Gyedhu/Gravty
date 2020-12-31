import React from "react";
import { useDispatch } from "react-redux";
import { ButtonSet } from "..";
import { Button } from "../../components";
import { setSelectElementBox } from "../../redux/pageEditor/action";

const PageEditButtons = () => {

  // dispatch
  const dispatch = useDispatch();

  // --- selectElementBox toggler ---
  const selectElementBoxToggler = () => {
    dispatch(setSelectElementBox(true));
  }

  return <ButtonSet

    leftSet={
      <React.Fragment>

        {/* Added Element Button */}
        <Button
          className="ri-add-circle-line"
          onClick={selectElementBoxToggler}
          toolTip="Add Element"
        />
      </React.Fragment>
    }

    rightSet={
      <React.Fragment>

        {/* Preview Button */}
        <Button
          className="ri-slideshow-2-line"
          toolTip="View page"
        />

        {/* Help Button */}
        <Button
          className="ri-question-line"
          toolTip="help"
        />

      </React.Fragment>
    }
  />
}

export default PageEditButtons;
