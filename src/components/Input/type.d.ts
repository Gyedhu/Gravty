type Width = "100px" | "150px" | "200px";

interface InputStyleTypes {
  fill?: boolean;
  fit?: boolean;
  link?: boolean;
  to?: string;
  width?: Width;
};

interface InputProps extends InputStyleTypes {
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  label?: string;
  name?: string;
  options?: Array<string>;
  placeholder?: string;
  select?: boolean;
  type?: string;
  // type?: "input" | "select";
  value?: string;
};

