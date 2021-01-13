import React from "react";
import { Button, FlexView, Text } from "../../components";

// Containers
import {
  ButtonSet,
  TextWithImageTemplate,
  View
} from "../../container";


// Home
const Home = () => {

  return <View type="medium" noPadding>

    {/* Title */}
    <FlexView direction="column" fill="#f5f5f5" gap="10px" paddingHorizontal="20px" paddingVertical="40px">
      <FlexView direction="column">
        <Text fancy size="24px">"You are the creator of you own destiny"</Text>
        <Text align="right">- Swami Vivekanadan</Text>
      </FlexView>
    </FlexView>

    <ButtonSet
      leftSet={
        <React.Fragment>
          <Button size="20px" className="ri-gallery-line" />
          <Button size="20px" className="ri-questionnaire-line" />
          <Button size="20px" className="ri-pages-line" />
        </React.Fragment>
      }

      rightSet={
        <React.Fragment>
          <Button size="20px" className="ri-history-line" />
          <Button size="20px" className="ri-pages-line" />
        </React.Fragment>
      }

    />

    <FlexView shadow paddingHorizontal="10px" paddingVertical="25px" gap="10px" direction="column">

      <TextWithImageTemplate
        title="Cristian Justin"
        url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        subTitle="Web developer"
      />

      <img src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Template" width="100%" />

      <FlexView align="center" gap="10px" wrap="wrap" paddingVertical="10px">
        <Button background size="15px" title={`${20} Likes`} />
        <Button background size="15px" title={`${3} Comments`} />
        <Text size="15px">Upload: {new Date().toLocaleString()}</Text>
      </FlexView>
    </FlexView>

    <FlexView shadow paddingHorizontal="10px" paddingVertical="25px" gap="10px" direction="column">

      <TextWithImageTemplate
        title="Jim thomas"
        url="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        subTitle="Web developer"
      />

      <img src="https://images.unsplash.com/photo-1602697572836-46d3d78299ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=887&q=80" alt="Template" width="100%" />

      <FlexView align="center" gap="10px" wrap="wrap" paddingVertical="10px">
        <Button background size="15px" title={`${20} Likes`} />
        <Button background size="15px" title={`${3} Comments`} />
        <Text size="15px">Upload: {new Date().toLocaleString()}</Text>
      </FlexView>

    </FlexView>


  </View >
}

export default Home;
