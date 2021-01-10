import React from 'react'
import { Button, FlexView } from '../../components';
import { useWriterMethods } from '../hooks';

interface Props {
  onSubmit: () => void;
  onClear: () => void;
};

const WriterButtonSet: React.FC<Props> = ({ onClear, onSubmit }) => {

  // Get writer tool
  const { onClose } = useWriterMethods();

  return <FlexView gap="10px">
    <Button
      background
      fit
      onClick={onSubmit}
      className="ri-check-double-line"
      title="Done"
    />

    <Button
      background
      onClick={onClear}
      className="ri-eraser-line"
      title="Clear"
    />

    <Button
      background
      onClick={onClose}
      className="ri-close-line"
    />
  </FlexView>
}

export default WriterButtonSet;
