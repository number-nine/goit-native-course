import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useFireStore } from "../../api/firebase/firestoreApi";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";

import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";
import PostCard from "../../components/PostCard/PostCard";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

export default function PostsScreen({ navigation }) {
  const { getAllPosts } = useFireStore();
  const [posts, setPosts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await getAllPosts();
        setPosts(data);
      }
      fetchData();
    },
    [isFocused]
  );
  return (
    <ScreenLayout>
      <ScrollView style={styles.main}>
        <ProfileBadge
          style={{ marginTop: 32 }}
          onPress={() => navigation.navigate("Profile")}
        />
        <View style={styles.postsContainer}>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
