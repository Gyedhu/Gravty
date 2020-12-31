import React from "react";
import { User } from "../../assets/images";
import { FlexView } from "../../components";
import {
  View,
  PageListMap,
  Image,
  PageHeader
} from "..";
import {
  LIST,
  ListTypes,
  PARAGRAPH,
  ParagraphTypes
} from "../PageListMap/types";

type Data = Array<ParagraphTypes | ListTypes>

const header = {
  imageUrl: User,
  auther: "Yedhumohanan.G",
  date: new Date().toLocaleString(),
  title: "Quick Sort",
  subTitle: "The king in the middle"
};

const data: Data = [
  {
    contentType: PARAGRAPH,
    header: "Introduction",
    content: "Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways."
  },
  {
    contentType: LIST,
    type: "decimal",
    listItems: [
      "Always pick first element as pivot.",
      "Always pick last element as pivot (implemented below)",
      "Pick a random element as pivot.",
      "Pick median as pivot.",
    ]
  },
  {
    contentType: PARAGRAPH,
    content: "The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time."
  }
]

const Page = () => {
  return <View type="medium">
    <PageHeader
      {...header}
    />

    <Image
      footer="Quick sort working diagram!"
      url="https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png"
    />

    <FlexView direction="column" gap="15px">
      {
        data.map((value, index) =>
          <PageListMap key={index} {...value} />
        )
      }
    </FlexView>
  </View>
}

export default Page;
