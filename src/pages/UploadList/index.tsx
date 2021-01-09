import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useHistory } from "react-router-dom";
import { Button, FlexView, Text } from "../../components";
import { View } from "../../container";
import { QuestionState } from "../../redux/question/type";


const QuestionTemplate: React.FC<QuestionState> = ({ comments, imageUrl, content, likes, timestamp, views }) => {

  return <FlexView
    fill="#ffffff"
    direction="column"
    gap="30px"
    paddingVertical="20px"
    popup
    shadow
  >

    {imageUrl && <img src={imageUrl} alt="template" width="100%" />}
    <FlexView direction="column" gap="30px" paddingHorizontal="20px">
      {/* Question */}
      <Text bold> {content} </Text>
      <FlexView align="center" gap="15px" justify="space-between" wrap="wrap">

        {/* Buttons */}
        <FlexView gap="10px">
          <Button size="15px" title={`${views} Views`} />
          <FlexView border />
          <Button size="15px" title={`${likes} Likes`} />
          <FlexView border />
          <Button size="15px" title={`${comments} Comments`} />
        </FlexView>

        <Text size="15px"> Uploaded : {timestamp.toDate().toLocaleString()} </Text>

        <FlexView gap="20px" justify="flex-end">
          <Button className="ri-pencil-line" />
          <Button className="ri-share-line" />
          <Button className="ri-delete-bin-3-line" />
        </FlexView>

      </FlexView>
    </FlexView>
  </FlexView>

}

interface UploadListProps {
  type: "questions" | "pages";
};

interface Quest extends QuestionState {
  id: number
}

const UploadList: React.FC<UploadListProps> = ({ type }) => {

  const [data, setData] = useState<Array<Quest> | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      try {
        const questions: Array<Quest> = [];

        const data = await firebase.firestore().collection("question").doc("gyedhumohanan@gmaill.com").collection("data").get();

        if (!data.empty) {
          data.forEach(doc => questions.push(doc.data() as Quest));
          setData(questions);
        }

      } catch (error) {
        alert(error.message);
      }

    }

    fetchData();

  }, []);

  const router = useHistory();

  const ChangeRoute = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.replace(`/upload-list/${event.currentTarget.value}`);
  }

  return <View type="medium">

    <FlexView align="center" direction="column" paddingVertical="20px">
      <Text bold size="32px">Your Uploads</Text>
      <Text fancy size="18px">Edit, Delete, Share your uploads</Text>
    </FlexView>

    <FlexView
      gap="30px"
    >
      <Button onClick={ChangeRoute} active={type === "questions"} value="questions" title="Questions" />
      <Button onClick={ChangeRoute} active={type === "pages"} value="pages" title="Pages" />

    </FlexView>
    {console.log(data)}

    {
      data?.map((value) =>
        <QuestionTemplate
          imageUrl={value.imageUrl}
          comments={value.comments}
          content={value.content}
          likes={value.likes}
          key={value.id}
          views={value.views}
          timestamp={value.timestamp}
        />
      )
    }

  </View>
}

export default UploadList;
