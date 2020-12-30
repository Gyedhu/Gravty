import { UserDataCard, Dashboard } from "..";
import { FlexView } from "../../components";


// Profile card
const ProfileCard = () => {
  return <FlexView
    align="center"
    justify="space-between"
    wrap="wrap"
  >
    <UserDataCard />
    <Dashboard />
  </FlexView>
}

export default ProfileCard
