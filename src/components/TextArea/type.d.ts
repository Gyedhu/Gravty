type TextAreaSize = 1 | 2 | 5 | 8;
type Type = "solid" | "dashed";

interface TextAreaStyle {
  size?: TextAreaSize;
  type?: Type;
};

interface TextAreaProps extends TextAreaStyle {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
