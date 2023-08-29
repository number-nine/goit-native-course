import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";

import styles from "./styles";

import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar"; 
import PostsFooter from '../../components/PostsFooter/PostsFooter';
import PostCard from "../../components/PostCard/PostCard";

import BackgroundSource from "../../images/credentials-bg.jpg";

import User from '../../images/user.svg';
import Plus from '../../images/plus.svg';
import Grid from '../../images/grid.svg'


export default function ProfileScreen() {




  return (
    <ImageBackground
      source={BackgroundSource}
      resizeMode="cover"
      style={styles.back}
    >
      <View style={styles.wrapper}>
        <ProfileAvatar style={styles.avatar} />
        <ScrollView>
          <PostCard />
           <PostCard />
          <PostCard /> 
        </ScrollView>
        <PostsFooter
          leftControl={<Grid />}
          centralControl={<User />}
          rightControl={<Plus stroke="rgba(33,33,33, 0.8)" />}
        />
      </View>
    </ImageBackground>
  );
};
