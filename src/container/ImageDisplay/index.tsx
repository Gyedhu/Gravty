
// components
import { useDispatch, useSelector } from "react-redux";
import { Button, FlexView, FloatingBox } from "../../components";
import { setImageDisplayUrl } from "../../redux/imageDisplay/action";
import { ImageDisplayState } from "../../redux/imageDisplay/type";
import { State } from "../../redux/store";

const ImageDisplayer = () => {

  const { url } = useSelector<State, ImageDisplayState>(state => state.imageDisplay);

  // dispatch
  const dispatch = useDispatch();

  const closeImage = () => dispatch(setImageDisplayUrl(""));

  return <FloatingBox active={Boolean(url)} side="center">
    <FlexView justify="center" paddingHorizontal="10px">
      <FlexView align="flex-end" direction="column" gap="10px" maxWidth="420px" paddingHorizontal="10px" popup>
        <img src={url !== null ? url : ""} alt="Display" width="100%" />

        <Button
          className="ri-close-line"
          onClick={closeImage}
          size="20px"
          width="fit-content"
        />
      </FlexView>
    </FlexView>

  </FloatingBox >
}

export default ImageDisplayer;
