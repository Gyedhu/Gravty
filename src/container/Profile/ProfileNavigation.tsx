import React from "react";

// containers
import { ButtonSet } from "../../container";

// components
import { Button } from "../../components";


// Profile Navigation
const ProfileNavigation = () => {
  return <ButtonSet

    leftSet={
      <React.Fragment>
        <Button size="20px" className="ri-add-line" to="/write/question" />
        <Button size="20px" className="ri-message-line" />
        <Button size="20px" className="ri-search-2-line" />
        <Button size="20px" className="ri-upload-cloud-2-line" to="/upload-list/questions" />
        <Button size="20px" className="ri-team-line" />
      </React.Fragment>
    }
  />
}

export default ProfileNavigation;


