import React, { useEffect, useState } from "react";
import { View, ImageBackground, ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import { useUserAuth } from "../../api/firebase/authApi";
import { useFireStore } from "../../api/firebase/firestoreApi";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";

import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";
import PostCard from "../../components/PostCard/PostCard";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

import backgroundSource from "../../images/credentials-bg.jpg";

import LogOut from "../../images/log-out.svg";

export default function ProfileScreen({ navigation }) {
  const displayName = useSelector((state) => state.auth.displayName);
  const uid = useSelector((state) => state.auth.uid);
  const { signOutUser } = useUserAuth();
  const { getPostsByUserId } = useFireStore();
  const [posts, setPosts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await getPostsByUserId(uid);
        setPosts(data);
      }
      fetchData();
    },
    [isFocused]
  );

  return (
    <ScreenLayout>
      <ImageBackground
        source={backgroundSource}
        resizeMode="cover"
        style={{
          width: "100%",
          flex:1,

        }}
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
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </ScreenLayout>
  );
}
