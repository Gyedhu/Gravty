type Width = "100px" | "150px" | "200px" | "fit-content";

interface ButtonStyleTypes {
  active?: boolean;
  background?: boolean;
  border?: boolean;
  fit?: boolean;
  link?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  to?: string;
  width?: Width;
};

interface ButtonProps extends ButtonStyleTypes {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
  value?: string;
  toolTip?: string;
};

