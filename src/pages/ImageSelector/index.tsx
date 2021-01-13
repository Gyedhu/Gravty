import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Component
import { Button, FlexView, UrlImage } from "../../components";

// Container
import { Title, View } from "../../container";

// Firebase
import { useUploadImage } from "../../firebase";

// Utility
import { filePicker } from "../../utility";

const ImagePicker = () => {

  const [file, setFile] = useState<File | null>(null);
  const { uploadImage } = useUploadImage();
  const history = useHistory();

  // --- Read image ---
  const getFile = async () => {
    const file = await filePicker();
    setFile(file as File);
  }

  // --- OnSkip ---
  const onSkip = () => {
    history.replace("/profile");
  }

  // --- Upload Image
  const _upload = async () => {

    const { currentUser } = firebase.auth();

    // checking for current user is exist or not
    if (!currentUser)
      return;

    else if (file && currentUser.uid && currentUser.email) {

      try {
        const url = await uploadImage(`${currentUser.uid}/profile-image.jpg`, file);
        await firebase.firestore()
          .collection("global-users")
          .doc(currentUser.email)
          .set({ imageUrl: url }, { merge: true });

        onSkip();
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return <View type="small">

    <Title
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

export default ImagePicker;
