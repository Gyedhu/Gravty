
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type AlignItems = "center" | "flex-start" | "flex-end";
type JustifyContent = "center" | "flex-start" | "flex-end" | "space-evenly" | "space-between" | "space-around" | null;
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexGrow = "1" | ".75" | ".5" | ".25";
type SizeInPixel = "5px" | "10px" | "15px" | "20px" | "25px" | "30px" | "35px" | "40px" | "45px" | "50px";
type Fill = "#ffffff" | "#f5f5f5" | "#59886b" | "#101010" | "#454545" | "#1e90ff";
type Dimensions = "100px" | "150px" | "200px" | "250px" | "300px" | "350px" | "400px" | "450px" | "500px" | "100%";
type Bound = "400px" | "750px" | "1024px";

interface FlexView {
  align?: AlignItems;
  fill?: Fill;
  border?: boolean;
  bound?: Bound;
  direction?: FlexDirection;
  gap?: SizeInPixel;
  grow?: FlexGrow;
  hideInMobile?: boolean;
  justify?: JustifyContent;
  maxHeight?: Dimensions;
  maxWidth?: Dimensions;
  minHeight?: Dimensions;
  minWidth?: Dimensions;
  mobile?: boolean;
  paddingHorizontal?: SizeInPixel;
  paddingVertical?: SizeInPixel;
  popup?: boolean;
  self?: AlignItems;
  sticky?: boolean;
  radius?: SizeInPixel;
  shadow?: boolean;
  wrap?: FlexWrap;
};
