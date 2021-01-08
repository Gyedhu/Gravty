import React, { useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import { Button, FlexView, UrlImage } from "../../components";
import { Header, View } from "../../container";
import { useGetUserData, usePushData, useUploadImage } from "../../firebase";
import { filePicker } from "../../utility";
import { useHistory } from "react-router-dom";

const ImagePicker = () => {

  const [file, setFile] = useState<Blob | null>(null);
  const { upload } = useUploadImage();
  const { pushTo } = usePushData();
  const { getData } = useGetUserData();
  const history = useHistory();

  // --- Read image ---
  const getFile = async () => {
    const file = await filePicker();
    setFile(file as Blob);
  }

  // --- OnSkip ---
  const onSkip = () => {
    history.replace("/");
    getData();
  }

  // --- Upload Image
  const _upload = async () => {

    const { currentUser } = firebase.auth();
    if (currentUser)
      if (file && currentUser.uid) {

        try {
          const url = await upload(`${currentUser.uid}/profile-image.jpg`, file);
          await pushTo(`global-users/${currentUser.email}`, { imageUrl: url });
          onSkip();
        } catch (error) {
          alert(error.message);
        }

      }
  }
  return <View type="small">

    <Header
      title="Select Profile Picture (Optional)"
      subTitle="By doing this other peoples can easely recognize you"
    />

    <FlexView justify="center">
      <UrlImage border url={file ? URL.createObjectURL(file) : ""} height="200px" width="200px" />
    </FlexView>
    <FlexView gap="10px">
      <Button border className="ri-image-line" fit onClick={getFile} title="Select" />
      <Button border className="ri-upload-cloud-line" onClick={_upload} title="Upload" />
      <Button border className="ri-skip-forward-line" onClick={onSkip} title="Skip" />
    </FlexView>
  </View>
}

export default ImagePicker
