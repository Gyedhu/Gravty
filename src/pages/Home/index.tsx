import { User } from "../../assets/images";
import { HomeCard, HomeNavBar, ProfileCard, View } from "../../container";

// User data to be fetched
// Temperarly hardcoded
const userdata = {
  name: "Yedhumohanan.G",
  email: "gyedhumohanan@gmail.com",
  profession: "Fullstack developer",
  imageUrl: User,
  uploads: 0,
  friends: 0,
  stars: 0
};

const Home = () => {

  return <View>

    {/* Profile Card */}
    <ProfileCard {...userdata} />

    {/* NavBar */}
    <HomeNavBar />

    {/* HomeCard */}
    <HomeCard />

  </View>
}

export default Home;
