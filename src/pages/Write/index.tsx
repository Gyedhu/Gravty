import React from "react";
import { Button, FlexView, Text, TextArea } from "../../components";
import { View } from "../../container";

const Write = () => {

  const [active, setActive] = React.useState([true, false]);

  const toggleActive = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const newList = active.map((_, index) => {
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

    <FlexView direction="column" gap="10px">
      <TextArea placeholder="Write your question" />
      <FlexView gap="10px">
        <Button fit background title="Upload" />
        <Button className="ri-link" title="Attach" />
        <Button className="ri-delete-bin-line" title="Clear" />
      </FlexView>
    </FlexView>

  </View>
}

export default Write;