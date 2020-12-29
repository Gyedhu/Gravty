import React from "react";
import { Button, FlexView, Text } from "../../components";
import { View } from "../../container";

const Write = () => {

  const [active, setActive] = React.useState([true, false]);

  const toggleActive = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const newList = active.map((value, index) => {
      if (`${index}` === event.currentTarget.value)
        return true;
      else
        return false;
    });

    setActive(newList);

  }

  return <View>

    {/* Header */}
    <FlexView direction="column">
      <Text size="30px">Write</Text>
      <Text size="18px">Write your questions, ideas and thoughts</Text>
    </FlexView>

    {/* Button set question ~ pages */}
    <FlexView gap="20px">
      <Button active={active[0]} onClick={toggleActive} title="Questions" value="0" />
      <Button active={active[1]} onClick={toggleActive} title="Pages" value="1" />
    </FlexView>
    {/* Text area */}
    {/* Submit Button */}

  </View>
}

export default Write;