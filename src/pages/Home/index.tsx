import { Desktop, Mobile, User, Writer } from "../../assets/images";
import { Button, FlexView, Text, UrlImage } from "../../components";

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

  return <FlexView justify="center" paddingHorizontal="20px" paddingVertical="30px">
    <FlexView bound="1024px" direction="column" gap="30px">

      {/* Profile */}
      <FlexView align="center" gap="20px" justify="space-between" paddingVertical="20px" wrap="wrap">

        {/* Userinfo */}
        <FlexView gap="10px" wrap="wrap" mobile>
          <UrlImage rounded url={User} height="100px" width="100px" />

          <FlexView direction="column" justify="center" mobile>
            <Text size="24px">Yedhumohanan.G</Text>
            <Text size="15px">gyedhumohanan@gmail.com</Text>
            <Text size="15px">Fullstack develoepr</Text>
          </FlexView>
        </FlexView>

        {/* Dashboard */}
        <FlexView gap="30px" mobile>

          <FlexView direction="column">
            <Text align="center" size="30px">20</Text>
            <Text align="center" size="15px">Uploads</Text>
          </FlexView>

          <FlexView direction="column">
            <Text align="center" size="30px">63</Text>
            <Text align="center" size="15px">Friendss</Text>
          </FlexView>

          <FlexView direction="column">
            <Text align="center" size="30px">28</Text>
            <Text align="center" size="15px">Stars</Text>
          </FlexView>

        </FlexView>

      </FlexView>

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

    </FlexView>
  </FlexView >
}

export default Home;
