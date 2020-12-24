import React from "react";
import {
  ImageContainer
} from "./style";


const UrlImage: React.FC<UrlImageProps> = ({ children, ...props }) =>
  <ImageContainer {...props} />


export default UrlImage;
