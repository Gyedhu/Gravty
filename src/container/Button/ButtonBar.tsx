import React, { useState } from 'react'
import { Button, FlexView } from '../../components'

interface Props {
  selectType: "normal" | "toggle";
  buttonType: "icon" | "text";
  leftSide: Array<string>;
  rightSide?: Array<string>;
  onClick?: (currentSelected: string) => void;
  filled?: boolean;
  defaultSelected?: string;
};

const ButtonBar: React.FC<Props> = ({ defaultSelected, selectType, filled, leftSide, buttonType, onClick, rightSide }) => {

  const [current, setCurrent] = useState<string | null>(defaultSelected ? defaultSelected : null  );

  const _onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const { value } = event.currentTarget;

    if (selectType === "toggle")
      setCurrent(value);

    if (onClick)
      onClick(value);
  }

  return <FlexView
    fill={filled ? "#59886b" : "#ffffff"}
    justify="space-between"
    {...filled && {
      paddingHorizontal: "20px",
      paddingVertical: "15px"
    }}
    radius="50px"
  >
    <FlexView gap="20px">
      {
        leftSide.map((value, index) => {

          let classAndLink: Array<string> = [];

          if (buttonType === "icon") {
            classAndLink = value.split(",");
          }

          return <Button
            active={current === value}
            title={buttonType === "text" ? value : undefined}
            className={classAndLink[0] ? classAndLink[0] : value}
            to={classAndLink[1] ? classAndLink[1].trim() : undefined}
            key={index}
            value={value}
            onClick={_onClick}
          />
        }
        )
      }
    </FlexView>

    <FlexView gap="20px">
      {
        rightSide?.map((value, index) =>
          <Button
            title={buttonType === "text" ? value : undefined}
            className={value}
            key={index}
            value={value}
            onClick={_onClick}
          />
        )
      }
    </FlexView>
  </FlexView >
}

export default ButtonBar
