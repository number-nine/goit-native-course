import React from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";
import PostCard from "../../components/PostCard/PostCard";
import PostsFooter from "../../components/PostsFooter/PostsFooter";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

import Grid from "../../images/grid.svg";
import User from "../../images/user.svg";
import LogOut from "../../images/log-out.svg";

export default function PostsScreen({navigation}) {
  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <MainHeader
          
          title={"Публікації"}
          rightControl={ {icon: <LogOut width={24} height={24} />, navigator:()=>navigation.navigate("Login") }}
        />
        <ScrollView style={styles.main}>
          <ProfileBadge
            style={{ marginTop: 32 }}
            onPress={() => navigation.navigate("Profile")}
          />
          <View style={styles.postsContainer}>
            <PostCard />
            <PostCard />
          </View>
        </ScrollView>

        <PostsFooter
          leftControl={<Grid />}
          rightControl={<User stroke="#212121" />}
        />
      </View>
    </ScreenLayout>
  );
};
