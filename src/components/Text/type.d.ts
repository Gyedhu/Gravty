type TextAlign = "left" | "center" | "right";
type Size = "15px" | "18px" | "20px" | "22px" | "24px" | "30px" | "32px" | "42px";

interface TextStylesTypes {
  align?: TextAlign;
  bold?: boolean;
  fancy?: boolean;
  size?: Size;
  underline?: boolean;
}

interface TextProps extends TextStylesTypes {
  value?: string;
}