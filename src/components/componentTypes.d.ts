type FontSize = "15px" | "18px" | "20px" | "24px" | "30px" | "40px";
type ImageSize = "50px" | "75px" | "100px" | "150px";
type TextAlignTypes = "left" | "center" | "right";

interface ContentTypes {
  border?: boolean;
  background?: boolean;
  gap?: boolean;
}

interface TextTypes {
  align?: TextAlignTypes;
  size?: FontSize;
  underline?: boolean;
  bold?: boolean;
  right?: boolean;
}

interface UrlImageProps {
  url: string;
  rounded?: boolean;
  height?: ImageSize;
  width?: ImageSize;
} 
