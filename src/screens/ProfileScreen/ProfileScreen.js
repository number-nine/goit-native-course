import React from "react";
import {
  View,
  ScrollView,

} from "react-native";

import styles from "./styles";

import PostCard from "../../components/PostCard/PostCard";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";



export default function ProfileScreen({ navigation }) {
  return (
    <ScreenLayout>
      <ScrollView style={styles.main}>
        <View style={styles.postsContainer}>
          <PostCard
            navigator={() => {
              navigation.navigate("Comments");
            }}
          />
          <PostCard
            navigator={() => {
              navigation.navigate("Comments");
            }}
          />
          <PostCard
            navigator={() => {
              navigation.navigate("Comments");
            }}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
