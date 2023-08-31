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

export default function ProfileHeader({ navigation }) {
    return (
        <ImageBackground
            source={BackgroundSource}
            resizeMode="cover"
            style={styles.back}
        >
            <View style={styles.wrapper}>
                <AvatarHolder style={styles.avatar} />
                <Pressable
                    style={styles.logout}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Logout />
                </Pressable>
                <Text style={[styles.author, { fontWeight: 500 }]}>
                    Natali Romanova
                </Text>
            </View>
        </ImageBackground>)
}