import React from "react";
import { User } from "../../assets/images";
import { FlexView } from "../../components";

import {
  View,
  PageListMap,
  PageHeader
} from "..";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { PageState } from "../../redux/page/type";


const header = {
  imageUrl: User,
  auther: "Yedhumohanan.G",
  date: new Date().toLocaleString(),
  title: "How should you setup your working desk",
};


const Page = () => {

  const data = useSelector<State, PageState["data"]>(state => state.page.data)

  return <View type="medium">
    <PageHeader
      {...header}
    />

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
