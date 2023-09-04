import React from "react";
import {
  View,
  ImageBackground,
  Text,
} from "react-native";

import styles from "./styles";

import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";
import OrangeButton from "../OrangeButton/OrangeButton";

import LogOut from "../../images/log-out.svg";
import BackgroundSource from "../../images/credentials-bg.jpg";


export default function ProfileHeader({ navigation, title }) {
    return (
      <ImageBackground
        source={BackgroundSource}
        resizeMode="cover"
        style={styles.back}
      >
        <View style={styles.wrapper}>
          <AvatarHolder style={styles.avatar} />
          <Text style={[styles.author, { fontWeight: 500 }]}>{title}</Text>
          <OrangeButton
            label={<LogOut />}
            style={[
              styles.logout,
              { backgroundColor: "#ffffff", borderColor: "#ffffff" },
            ]}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    );
}