import React from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
} from "react-native";

import styles from "./styles";

import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";
import PostCard from "../../components/PostCard/PostCard";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import OrangeButton from "../../components/OrangeButton/OrangeButton"

import BackgroundSource from "../../images/credentials-bg.jpg";


import LogOut from "../../images/log-out.svg";

export default function ProfileScreen({ navigation }) {
  return (
    <ScreenLayout>
      <ImageBackground
        source={BackgroundSource}
        resizeMode="cover"
        style={styles.back}
      >
        <ScrollView style={styles.main}>
          <View style={styles.wrapper}>
            <AvatarHolder style={styles.avatar} />
            <OrangeButton
              label={<LogOut />}
              style={[
                styles.logout,
                { backgroundColor: "#ffffff", borderColor: "#ffffff" },
              ]}
              onPress={() => navigation.navigate("Login")}
            />
            <Text style={[styles.author, { fontWeight: 500 }]}>
              Natali Romanova
            </Text>

            <View style={styles.postsContainer}>
              <PostCard />
              <PostCard />
              <PostCard />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </ScreenLayout>
  );
}
