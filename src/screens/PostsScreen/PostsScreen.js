import React from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";
import PostCard from "../../components/PostCard/PostCard";
import PostsFooter from "../../components/PostsFooter/PostsFooter";

import Grid from "../../images/grid.svg";
import User from "../../images/user.svg";
import LogOut from "../../images/log-out.svg";

export default () => {
  return (
    <View style={styles.wrapper}>
      <MainHeader
        title={"Публікації"}
        rightControl={<LogOut width={24} height={24} />}
      />
      <ScrollView style={styles.main}>
        <ProfileBadge style={{ marginTop: 32 }} />
        <View style={styles.postsContainer}>
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>

      <PostsFooter leftControl={<Grid />} rightControl={<User stroke="#212121"/>} />
    </View>
  );
};
