import { Desktop, Mobile, User, Writer } from "../../assets/images";
import { Button, FlexView, Text, UrlImage } from "../../components";
import { HomeCard, ProfileCard, View } from "../../container";

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
    <HomeCard />

  </View>
}

export default Home;
