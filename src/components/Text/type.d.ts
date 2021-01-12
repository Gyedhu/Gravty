interface TextStylesTypes {
  align?: TextAlign;
  alignJustify?: boolean;
  bold?: boolean;
  fancy?: boolean;
  primary?: boolean;
  size?: FontSize;
  underline?: boolean;
}

interface TextProps extends TextStylesTypes {
  className?: string;
}