import React from "react";

// Components
import { FlexView, TextArea, Input, Text, Button } from "../../components";

// Containers
import { WriterButtonSet, View, Image } from "..";

// Utility
import { filePicker } from "../../utility";

// Hooks
import { useWriterMethods } from "../hooks";
import { IMAGE } from "../../types/pageMapables";

// Types  

const ImageWriter = () => {

  // Get write method
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State ---
  const [header, setHeader] = React.useState("");
  const [footer, setFooter] = React.useState("");
  const [file, setFile] = React.useState<FileList | null>();
  const [fitType, setFitType] = React.useState<FitStyleTypes>("fit-in-both");

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

  // --- Read Image Fit Type ---
  const readImageFitType = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFitType(event.currentTarget.value as FitStyleTypes);
  }

  // --- Submit ---
  const _onSubmit = () => {

    if (file) {
      onSubmit({
        contentType: IMAGE,
        file: file,
        url: URL.createObjectURL(file),
        footer: footer,
        fit: fitType,
        header: header,
      });
    }
  }

  return <View type="medium">


    <FlexView direction="column" gap="10px">

      {/* Selected image preview */}
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
          "fit-in-width"
        ]}

      />

      {/* Heading */}
      <TextArea
        onChange={readHeader}
        onFocus={onFocus}
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
        onChange={readFooter}
        onFocus={onFocus}
        placeholder="Footer (optional)"
        size={1}
        type="dashed"
      />


      {/* Submit and Clear */}
      <WriterButtonSet
        onClear={onClear}
        onSubmit={_onSubmit}
      />


    </FlexView>
  </View>
}

export default ImageWriter;
