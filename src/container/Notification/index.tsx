import React from 'react'
import { FlexView, FloatingBox, Text } from '../../components'

interface Props {
  message: string;
  title?: string;
};

const Notificaion: React.FC<Props> = ({ title, message }) => {
  return <FloatingBox
    side="top"
    active={message.trim() !== ""}
  >
    <FlexView
      align="center"
      direction="column"
      fill="#59886b"
      paddingHorizontal="20px"
      paddingVertical="20px"
      shadow
    >
      <Text size="18px"> {title}</Text>
      <Text size="18px"> {message}</Text>
    </FlexView>
  </FloatingBox >
}

export default Notificaion;
