import React from 'react'
import { FlexView, UrlImage, Text } from '../../components'

interface Props {
  url: string;
  header?: string;
  footer?: string;
}

const Image: React.FC<Props> = ({ url, header, footer }) => {
  return <FlexView direction="column" gap="10px">
    <Text>{header}</Text>
    <UrlImage url={url}
      height="200px"
    />
    <Text size="15px">{footer}</Text>
  </FlexView>
}

export default Image;
