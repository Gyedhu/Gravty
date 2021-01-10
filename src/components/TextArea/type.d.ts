interface TextAreaStyle {
  align?: TextAlign;
  fontSize?: FontSize;
  size?: TextAreaSize;
  type?: TextAreaType;
};

interface TextAreaProps extends TextAreaStyle {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  name?: string;
}
