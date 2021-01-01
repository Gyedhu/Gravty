type TextAreaSize = "small" | "medium" | "big";

interface TextAreaStyle {
  size?: TextAreaSize;
};

interface TextAreaProps extends TextAreaStyle {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
