import React from "react";
import { View, ImageBackground, ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import { useUserAuth } from "../../api/firebase/authApi";

import styles from "./styles";

import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";
import PostCard from "../../components/PostCard/PostCard";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

import backgroundSource from "../../images/credentials-bg.jpg";

import LogOut from "../../images/log-out.svg";



export default function ProfileScreen({ navigation }) {
  const displayName = useSelector((state) => state.auth.displayName);
  const { signOutUser } = useUserAuth();

  return (
    <ScreenLayout>
      <ImageBackground
        source={backgroundSource}
        resizeMode="cover"
        // style={styles.back}
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
              onPress={async () => {
                try {
                  await signOutUser();
                } catch (error) {
                  console.log("Something went wrong ", error.message);
                }
                
              }}
            />
            <Text style={[styles.author, { fontWeight: 500 }]}>
              {displayName}
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
