import React from "react";
import { Text, UrlImage } from "../../components";

const ImageNText: React.FC<ImageNText> = ({ url, titles }) =>
  <div style={{ alignItems: "center", display: "flex", gap: "10px" }}>
    {url && <UrlImage rounded url={url} height="50px" width="50px" />}
    <div>
      <Text size="18px">{titles[0]}</Text>
      <Text size="18px">{titles[1]}</Text>
    </div> 
  </div>

export default ImageNText;
