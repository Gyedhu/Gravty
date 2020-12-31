import React from "react";
import { FlexView, Button } from "../../components";


const HomeNavBar = () => {
  return <FlexView gap="10px" mobile paddingHorizontal="15px" paddingVertical="15px" radius="10px" shadow>
    <Button className="ri-add-line" to="/write/question" />
    <Button className="ri-message-line" />
    <Button className="ri-search-2-line" />
    <Button className="ri-upload-cloud-2-line" />
    <Button className="ri-team-line" />
  </FlexView>
}

export default HomeNavBar;
