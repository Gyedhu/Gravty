import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonSet } from "..";
import { Button } from "../../components";
import { PageState } from "../../redux/page/type";
import { setCurrentWriting, setSelectElementBox, setWriteBox } from "../../redux/pageEditor/action";
import { State } from "../../redux/store";

const PageEditButtons = () => {

  // dispatch
  const dispatch = useDispatch();

  // state
  const { header } = useSelector<State, PageState>(state => state.page);

  // --- selectElementBox toggler ---
  const selectElementBoxToggler = () => {
    dispatch(setSelectElementBox(true));
  }

  // --- Add element ---
  const addElement = () => {

    if (!header) {
      dispatch(setCurrentWriting("main-header"));
      dispatch(setWriteBox(true, "Write the Heading of content"));
    } else {
      selectElementBoxToggler();
    }

  }

  return <ButtonSet

    leftSet={
      <React.Fragment>

        {/* Added Element Button */}
        <Button
          className="ri-add-circle-line"
          onClick={addElement}
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
          to="/page"
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
