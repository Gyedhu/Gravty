import React from "react";
import { FlexView, UrlImage, Text, Button } from "../../components";


const HomeNavBar = () => {
  return <FlexView fill="#59886b" gap="10px" paddingHorizontal="15px" paddingVertical="15px" radius="10px" mobile>
    <Button background className="ri-add-line" />
    <Button background className="ri-message-line" />
    <Button background className="ri-search-2-line" />
    <Button background className="ri-upload-cloud-2-line" />
    <Button background className="ri-team-line" />
  </FlexView>
}

export default HomeNavBar;
