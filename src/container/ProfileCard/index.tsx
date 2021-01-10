import { UserDataCard } from "..";
import { FlexView } from "../../components";


// Profile card
const ProfileCard = () => {
  return <FlexView
    align="center"
    delay={.1}
    justify="space-between"
    wrap="wrap"
  >
    <UserDataCard />
  </FlexView>
}

export default ProfileCard
