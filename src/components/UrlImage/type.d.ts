
type ImageSize = "50px" | "100px" | "150px" | "200px" | "250px";

interface UrlImageStyleTypes {
  border?: boolean;
  fit?: boolean;
  height?: ImageSize;
  rounded?: boolean;
  url: string;
  width?: ImageSize
}

interface UrlImageProps extends UrlImageStyleTypes { };
