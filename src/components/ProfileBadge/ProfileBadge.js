import React from "react";
import { Pressable, Image, View, Text } from "react-native";

import styles from "./styles";
import profilePhoto from '../../images/user-badge-photo.jpg';

export default function ProfileBadge(props) {
  return (
    <Pressable style={[styles.wrapper, props.style]}>
      <Image style={styles.photo} source={profilePhoto} />
      <View style={styles.info}>
        <Text style={[styles.name]}>Natali Romanova</Text>
        <Text style={[styles.email]}>email@example.com</Text>
      </View>

    </Pressable>
  );
};
