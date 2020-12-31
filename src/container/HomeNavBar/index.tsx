import React from "react";
import { Button } from "../../components";
import ButtonSet from "../ButtonSet";


const HomeNavBar = () => {
  return <ButtonSet>
    <Button className="ri-add-line" to="/write/question" />
    <Button className="ri-message-line" />
    <Button className="ri-search-2-line" />
    <Button className="ri-upload-cloud-2-line" />
    <Button className="ri-team-line" />
  </ButtonSet>
}

export default HomeNavBar;
