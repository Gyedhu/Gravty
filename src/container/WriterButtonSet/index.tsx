import React from 'react'
import { Button, FlexView } from '../../components';

interface Props {
  onSubmit: () => void;
  onClear: () => void;
};

const WriterButtonSet: React.FC<Props> = ({ onClear, onSubmit }) => {
  return <FlexView gap="10px">
    <Button
      border
      onClick={onSubmit}
      className="ri-check-double-line"
      title="DONE"
    />
    <Button
      border
      onClick={onClear}
      className="ri-delete-bin-line"
      title="CLEAR"
    />
  </FlexView>
}

export default WriterButtonSet;
