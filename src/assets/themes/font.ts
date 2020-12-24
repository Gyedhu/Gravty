
type size = "15px" | "18px" | "20px" | "30px";

interface Shape {
  small: size;
  normal: size;
  medium: size;
  big: size;
};

const fontSize: Shape = {
  small: "15px",
  normal: "18px",
  medium: "20px",
  big: "30px"
};

export default fontSize;
