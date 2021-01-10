import React from "react";
import { Button } from "../../components";
import ButtonSet from "../ButtonSet";


const HomeNavBar = () => {
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

export default HomeNavBar;
