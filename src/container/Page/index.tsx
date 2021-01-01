import React from "react";  
import { FlexView } from "../../components";

import {
  View,
  PageListMap,
  PageHeader
} from "..";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { PageState } from "../../redux/page/type";



const Page = () => {

  // state
  const { data, header } = useSelector<State, PageState>(state => state.page);

  return <View type="medium">
    {
      header &&
      <PageHeader
        {...header}
      />
    }

    <FlexView direction="column" gap="15px">
      {
        data
          ? data.map((value, index) =>
            <PageListMap key={index} {...value} />
          )
          : ""
      }
    </FlexView>
  </View>
}

export default Page;
