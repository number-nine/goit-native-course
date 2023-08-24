import React from "react";
import { View, ScrollView } from "react-native";

import postsScreenStyles from "./postsScreen.styles";

import MainHeader from "../../components/Elements/MainHeader/MainHeader";
import ProfileBadge from "../../components/Elements/ProfileBadge/ProfileBadge";
import PostsFooter from "../../components/Elements/PostsFooter/PostsFooter";

import Grid from "../../../images/grid.svg";
import User from "../../../images/user.svg";
import LogOut from "../../../images/log-out.svg";

export default () => {
  return (
    <View style={postsScreenStyles.wrapper}>
      <MainHeader
        title={"Публікації"}
        rightControl={<LogOut width={24} height={24} />}
      />
      <ScrollView style={postsScreenStyles.main}>
        <ProfileBadge style={{ marginTop: 32 }} />
      </ScrollView>

      <PostsFooter leftControl={<Grid />} rightControl={<User />} />
    </View>
  );
};
