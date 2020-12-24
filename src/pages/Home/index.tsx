import React from "react";
import { Content, View } from "../../components";
import { PageHeader } from "../../container";

const Home = () => {
  return <View>
    <PageHeader
      title="Google"
      auther="Larry Page"
      profileImageUrl="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      date={new Date().toLocaleDateString()}
    />
  </View >
}

export default Home;
