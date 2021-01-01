import React from "react";
import { useSelector } from "react-redux";
import { FlexView, Text } from "../../components";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";

// Dashcard
const DashCard: React.FC<{ title: string; value: number }> = ({ title, value }) =>
  <FlexView direction="column">
    <Text align="center" size="30px">{value}</Text>
    <Text align="center" size="15px">{title}</Text>
  </FlexView>


// Dashboard
const Dashboard = () => {

  // Get user data from state
  const { uploads, friends, stars } = useSelector<State, UserDataState>(state => state.userData);

  return <FlexView gap="30px" mobile>
    <DashCard title="Uploads" value={uploads} />
    <DashCard title="Friends" value={friends} />
    <DashCard title="Stars" value={stars} />
  </FlexView>
}

export default Dashboard;