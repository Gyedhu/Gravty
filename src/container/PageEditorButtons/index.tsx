import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Containers
import { ButtonSet } from "..";

// Components
import { Button, FlexView, FloatingBox } from "../../components";
import { PageState } from "../../redux/page/type";

// State, Reducers and actions
// import { State } from "../../redux/store";
// import { PageState } from "../../redux/page/type";
import { setCurrentWriting, setSelectElementBox, } from "../../redux/pageEditor/action";
import { State } from "../../redux/store";
import View from "../View";

const PageEditButtons = () => {

  // dispatch
  const dispatch = useDispatch();

  // state
  const { header } = useSelector<State, PageState>(state => state.page);

  // --- SelectElementBox Toggler ---
  const selectElementBoxToggler = () => {
    dispatch(setSelectElementBox(true));
  }

  // --- Add element --- 
  // It will open the selectElementBox
  const addElement = () => {
    if (!header) {
      dispatch(setCurrentWriting("main-header"));
    } else
      selectElementBoxToggler();
  }

  return <FloatingBox side="bottom" active>
    <View>
      <FlexView direction="column" minWidth="100%" popup>
        <ButtonSet

          leftSet={
            <React.Fragment>

              {/* Added Element Button */}
              <Button
                className="ri-add-circle-line"
                onClick={addElement}
                toolTip="Add Element"
              />

              {/* Preview Button */}
              <Button
                className="ri-slideshow-2-line"
                toolTip="Preview"
                to="/page"
              />
            </React.Fragment>
          }
        />
      </FlexView>
    </View>
  </FloatingBox>
}

export default PageEditButtons;
