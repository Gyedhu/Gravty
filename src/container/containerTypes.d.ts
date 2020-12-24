type ContainerTypes = "header" | "headerNparagraph" | "list";
type ListStyleType = "decimal" | "lower-alpha" | "upper-alpha" | "round";

interface PageHeaderTypes {
  title: string;
  description?: string;
  profileImageUrl?: string;
  auther: string;
  date: string;
};

interface HeaderNParagraphTypes {
  title: string;
  intent?: boolean;
  paragraph: string;
};

interface ImageNText {
  url?: string,
  titles: [string, string]
}

interface ListTypes {
  type?: ListStyleType;
  items: Array<string>;
};

interface ListItemTypes {
  size?: FontSize;
};

interface ParagraphTypes {
  intent?: boolean;
  data: string;
};
