// components
import { FlexView } from "../../components";

// containers
import ProfileUserinfoCard from "./ProfileUserInfoCard";



// Page Title
const PageTitle = () => {
  return <FlexView
    align="center"
    delay={.1}
    justify="space-between"
    wrap="wrap"
  >
    <ProfileUserinfoCard />
  </FlexView>
}

export default PageTitle;
