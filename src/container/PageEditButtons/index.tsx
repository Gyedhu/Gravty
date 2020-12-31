import React from "react";
import { ButtonSet } from "..";
import { Button } from "../../components";

const PageEditButtons = () => {
  return <ButtonSet

    leftSet={
      <React.Fragment>
        
        {/* Added Element Button */}
        <Button
          className="ri-add-circle-line"
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
