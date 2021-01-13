interface TextAreaStyle {
  align?: TextAlign;
  fontSize?: FontSize;
  readOnly?: boolean;
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
