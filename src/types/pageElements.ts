
// page title
export interface PageTitleProps {
  imageUrl?: string;
  auther: string;
  date: string;
  title: string;
  subTitle?: string;
};

// paragraph
export interface ParagraphProps {
  header?: string;
  content: string;
  intent?: boolean;
};


// list
export interface ListProps {
  title?: string;
  listItems: Array<string>;
  type?: ListStyleTypes;
};


// image
export interface ImageProps {
  url: string;
  header?: string;
  footer?: string;
  fit?: FitStyleTypes;
  file: FileList;
};


// TextWithImageTemplate
export interface TextWithImageTemplateProps {
  url?: string;
  title: string;
  subTitle?: string;
  side?: Sides;
};

