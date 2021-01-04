// --- Constants ---
export const PARAGRAPH = "PARAGRAPH";
export const LIST = "LIST";
export const IMAGE = "IMAGE";


// Types
export type ListStyleTypes = "decimal" | "rounded" | "square" | "upper-alpha" | "lower-alpha";
export type FitStyleTypes = "fit-in-both" | "fit-in-width" | null;

// Interfaces 

// Paragraph 
export interface ParagraphProps {
  header?: string;
  content: string;
};

export interface ParagraphTypes extends ParagraphProps {
  contentType: typeof PARAGRAPH;
};

// Image
export interface ImageProps {
  url: string;
  header?: string;
  footer?: string;
  fit?: FitStyleTypes;
  file: FileList;
};

export interface ImageTypes extends ImageProps {
  contentType: typeof IMAGE;
};

// List
export interface ListProps {
  title?: string;
  listItems: Array<string>;
  type?: ListStyleTypes;
};

export interface ListTypes extends ListProps {
  contentType: typeof LIST;
};

// PageListPropsType
export type PageListType = ParagraphTypes | ListTypes | ImageTypes;

// Data 
export type Data = Array<PageListType>
