import React from "react";
import { View, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles from "./styles";

import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";
import PostCard from "../../components/PostCard/PostCard";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";


const Tabs = createBottomTabNavigator();


export default function PostsScreen({ navigation }) {
  return (
    <ScreenLayout>
      <ScrollView style={styles.main}>
        <ProfileBadge
          style={{ marginTop: 32 }}
          onPress={() => navigation.navigate("Profile")}
        />
        <View style={styles.postsContainer}>
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
