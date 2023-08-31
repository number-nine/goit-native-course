import React from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  Pressable,
} from "react-native";

import styles from "./styles";

import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";
import PostsFooter from "../../components/PostsFooter/PostsFooter";
import PostCard from "../../components/PostCard/PostCard";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

import BackgroundSource from "../../images/credentials-bg.jpg";

import User from "../../images/user.svg";
import Plus from "../../images/plus.svg";
import Grid from "../../images/grid.svg";
import Logout from '../../images/log-out.svg';

export default function ProfileScreen({navigation}) {
  return (
    <ScreenLayout >
      
      <ScrollView style={styles.main}>
        <View style={styles.postsContainer}>
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>

    </ScreenLayout>
  );
}
