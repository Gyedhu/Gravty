type Width = "100px" | "150px" | "200px";

interface ButtonStyleTypes {
  fill?: boolean;
  fit?: boolean;
  link?: boolean;
  to?: string;
  width?: Width;
};

interface ButtonProps extends ButtonStyleTypes {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
};
