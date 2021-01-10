import React from "react";
import { useSelector } from "react-redux";

// Components
import { FlexView } from "../../components";

// Containers 
import {
  View,
  PageListMap,
  PageTitle
} from "..";

// State and Actions
import { State } from "../../redux/store";
import { PageState } from "../../redux/page/type";

// Types
import { PageMapables } from "../../types/pageMapables";

const Page = () => {

  // state
  const { data, header } = useSelector<State, PageState>(state => state.page);

  return <View type="medium">
    {
      header &&
      <PageTitle
        {...header}
      />
    }

    <FlexView direction="column" gap="15px">
      {
        data
          ? data.map((value: PageMapables, index: number) =>
            <PageListMap key={index}   {...value} />
          )
          : ""
      }
    </FlexView>
  </View>
}

export default Page;
