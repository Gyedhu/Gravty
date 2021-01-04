type TextAlign = "left" | "center" | "right";
type FontSize = "15px" | "18px" | "20px" | "22px" | "24px" | "30px" | "32px" | "42px";
type TextAreaSize = 1 | 2 | 5 | 8;
type Type = "solid" | "dashed";

interface TextAreaStyle {
  align?: TextAlign;
  fontSize?: FontSize;
  size?: TextAreaSize;
  type?: Type;
};

interface TextAreaProps extends TextAreaStyle {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  name?: string;
}
