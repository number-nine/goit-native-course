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
    <ScreenLayout>
      {/* <ImageBackground
        source={BackgroundSource}
        resizeMode="cover"
        style={styles.back}
      >
        <View style={styles.wrapper}>
          <AvatarHolder style={styles.avatar} />
          <Pressable
            style={styles.logout}
            onPress={()=>navigation.navigate("Login")}
          >
            <Logout />
          </Pressable>
          <Text style={[styles.author, { fontWeight: 500 }]}>
            Natali Romanova
          </Text> */}
      <ScrollView style={styles.main}>
        <View style={styles.postsContainer}>
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>
      {/* <PostsFooter
            leftControl={{
              icon: <Grid />,
              navigator: () => console.log("Changing view to grid"),
            }}
            centralControl={{
              icon: <User stroke="#ffffff" />,
              navigator: () => navigation.navigate("Profile"),
            }}
            rightControl={{
              icon: <Plus width={14} height={14} fill={"rgba(33,33,33,0.8)"} />,
              navigator: () => navigation.navigate("Create"),
            }}
          /> */}
      {/* </View> 
       </ImageBackground>*/}
    </ScreenLayout>
  );
}
