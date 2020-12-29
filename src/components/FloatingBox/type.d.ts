
type FloatSide = "top" | "bottom";

interface FloatingBoxStyleType {
  active?: boolean;
  side?: FloatSide;
};

interface FloatingBoxProps extends FloatingBoxStyleType {};
