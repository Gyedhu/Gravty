import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { addPageData, addPageHeader } from "../../redux/page/action";
import { setCurrentWriting } from "../../redux/pageEditor/action";
import { PageListType } from "../PageElementTypes";

const useWriterMethods = () => {

  // Local State
  const [current, setCurrent] = useState<HTMLTextAreaElement | null>(null);

  // --- State and Dispatch ---    
  const dispatch = useDispatch();

  // onFocus
  const onFocus = (event: ChangeEvent<HTMLTextAreaElement>) => {

    // Set current Writing element in the state
    setCurrent(event.currentTarget);

  }

  // onClear
  const onClear = () => {

    // Reset the value of the current writing element 
    // First create a setter
    const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;

    // call the call method of setter with the changed value
    setter?.call(current, "");

    // Trigger an onchange event
    const event = new Event("change", { bubbles: true });
    current?.dispatchEvent(event);

  }

  // onClose
  const onClose = () => {

    // Reset the PageEditorTool
    dispatch(setCurrentWriting(""));
  }

  // onSubmit 
  const onSubmit = (data: PageListType) => {

    // Set data in redux
    if (data.contentType === "PAGE_HEADER") {
      dispatch(addPageHeader(data));
    } else {
      dispatch(addPageData(data));
    }

    // Reset the PageEditorTool
    onClose();
  }

  return { onFocus, onClear, onSubmit, onClose };

}

export default useWriterMethods;