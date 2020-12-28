import { Desktop, Mobile, User, Writer } from "../../assets/images";
import { Button, FlexView, Text, UrlImage } from "../../components";
import { ProfileCard, View } from "../../container";

const userdata = {
  name: "Yedhumohanan.G",
  email: "gyedhumohanan@gmail.com",
  profession: "Fullstack developer",
  imageUrl: User,
  uploads: 0,
  friends: 0,
  stars: 0
}

const Home = () => {

  return <View>

    <ProfileCard {...userdata} />

    {/* NavBar */}
    <FlexView fill="#59886b" gap="10px" paddingHorizontal="15px" paddingVertical="15px" radius="10px" mobile>
      <Button background className="ri-add-line" />
      <Button background className="ri-message-line" />
      <Button background className="ri-search-2-line" />
      <Button background className="ri-upload-cloud-2-line" />
      <Button background className="ri-team-line" />
    </FlexView>

    {/* Card */}
    <FlexView gap="10px" wrap="wrap">

      <FlexView direction="column" gap="20px" grow="1" minWidth="200px">
        <UrlImage fit height="200px" url={Writer} />

        <FlexView direction="column" maxWidth="300px">
          <Text size="20px">Write</Text>
          <Text size="15px">Write your question ideas and thoughts</Text>
        </FlexView>

      </FlexView>

      <FlexView direction="column" gap="20px" grow="1" minWidth="200px">
        <UrlImage fit height="200px" url={Mobile} />

        <FlexView direction="column" maxWidth="300px">
          <Text size="20px">Chat</Text>
          <Text size="15px">Chat with your friends and share resources</Text>
        </FlexView>
      </FlexView>

      <FlexView direction="column" gap="20px" grow="1" minWidth="200px">
        <UrlImage fit height="200px" url={Desktop} />

        <FlexView direction="column" maxWidth="300px">
          <Text size="20px">Search</Text>
          <Text size="15px">Search and frind resources and help peoples with answer questions</Text>
        </FlexView>
      </FlexView>

    </FlexView>

  </View>
}

export default Home;
