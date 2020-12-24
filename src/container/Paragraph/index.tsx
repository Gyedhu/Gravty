import React from "react";
import { Text } from "../../components"; 

const Paragraph: React.FC<ParagraphTypes> = ({ intent, data }) => <>

  <Text size="18px">{intent && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}{data}</Text>
</>

export default Paragraph;
