import React from "react";
import { useDispatch } from "react-redux";
import { Button, FlexView, Input, Text, TextArea } from "../../components";
import { addPageData } from "../../redux/page/action";
import { setCurrentWriting } from "../../redux/pageEditor/action";
import { filePicker } from "../../utility";
import Image from "../Image";
import { FitStyleTypes, IMAGE, ImageTypes } from "../PageElementTypes";
import View from "../View";

const ImageWriter = () => {

  // --- Local State ---
  const [header, setHeader] = React.useState("");
  const [footer, setFooter] = React.useState("");
  const [file, setFile] = React.useState<FileList | null>();
  const [fitType, setFitType] = React.useState<FitStyleTypes>("fit-in-both");
  const [currentTypingField, setCurrentTypingField] = React.useState<EventTarget & HTMLTextAreaElement | null>(null);


  // --- State and Dispatch ---    
  const dispatch = useDispatch();

  // --- On Fucus --- 
  // On focus we are setting the current typing field in the state
  // On the clear button click the element stored in the 'currentTypingField' will be cleared
  const focus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setCurrentTypingField(event.currentTarget);
  }

  // --- Read header --- 
  const readHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setHeader(event.currentTarget.value);

  // --- Read Image ---
  const readImage = async () => {
    const file = await filePicker();
    setFile(file as FileList);
  }

  // --- Remove image ---
  const removeImage = () => {
    setFile(null);
  }

  // --- Read Footer ---  
  const readFooter = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFooter(event.currentTarget.value);

  // --- Read Image Fit Type
  const readImageFitType = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFitType(event.currentTarget.value as FitStyleTypes);
  }

  // --- Submit ---
  const submit = () => {

    if (file) {

      const newImage: ImageTypes = {
        contentType: IMAGE,
        file: file,
        url: URL.createObjectURL(file),
        footer: footer,
        fit: fitType,
        header: header,
      }

      // Set data in state
      dispatch(addPageData(newImage));
      // Close all fields
      dispatch(setCurrentWriting(""));

    }
  }

  // Clear field
  const clearField = () => {
    // Clearing the currentFocused field
    // It would be stored in the currentTypingField variable in state
    // We can use name property of the element
    if (currentTypingField?.name === "paragraph") {
      // setParagraph("");
    } else {
      setHeader("");
    }
  }


  return <View type="medium">


    <FlexView direction="column" gap="10px">

      {/* Selected image previe */}
      {
        file && <Image fit={fitType} file={file} url={URL.createObjectURL(file)} />
      }

      {/* Fit type of image */}
      <Text>Select the fit type of image</Text>
      <Input
        select
        onChange={readImageFitType}
        options={[
          "fit-in-both",
          "fit-in-height",
          "fit-in-width"
        ]}

      />

      {/* Heading */}
      <TextArea
        name="header"
        onChange={readHeader}
        onFocus={focus}
        placeholder="Heading (optional)"
        size={1}
        type="dashed"
      />

      {/* Image Reader */}
      <Button
        border
        className="ri-image-line"
        title={file ? "Remove image" : "Select an image"}
        onClick={file ? removeImage : readImage}
      />

      {/* Footer */}
      <TextArea
        name="footer"
        onChange={readFooter}
        onFocus={focus}
        placeholder="Footer (optional)"
        size={1}
        type="dashed"
      />


      <FlexView gap="10px">
        <Button
          border
          onClick={submit}
          className="ri-check-double-line"
          title="DONE"
        />
        <Button
          border
          onClick={clearField}
          className="ri-delete-bin-line"
          title="CLEAR"
        />
      </FlexView>

    </FlexView>
  </View>
}

export default ImageWriter;
