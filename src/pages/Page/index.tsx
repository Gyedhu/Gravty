import React from "react";
import { useSelector } from "react-redux";

// Components
import { FlexView } from "../../components";

// Containers 
import {
  View,
  PageMap,
  PageTitle,
} from "../../container";

// State and Actions
import { State } from "../../redux/store";
import { PageState } from "../../redux/page/type";

// Types
import { PageMapables } from "../../types/pageMapables";

const Page = () => {

  // state
  const { data, header } = useSelector<State, PageState>(state => state.page);

  return <View type="medium" noPadding>
    {
      header &&
      <PageTitle
        {...header}
      />
    }

    <FlexView direction="column" gap="15px" paddingHorizontal="10px">
      {
        data
          ? data.map((value: PageMapables, index: number) =>
            <PageMap key={index}   {...value} />
          )
          : ""
      }
    </FlexView>

    <FlexView paddingVertical="20px" />
  </View>
}

export default Page;
