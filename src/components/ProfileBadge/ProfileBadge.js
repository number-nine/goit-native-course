import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import profilePhoto from '../../images/user-badge-photo.jpg';

export default function ProfileBadge(props) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.wrapper, props.style]}
      activeOpacity={0.6}
    >
      <Image style={styles.photo} source={profilePhoto} />
      <View style={styles.info}>
        <Text style={[styles.name]}>Natali Romanova</Text>
        <Text style={[styles.email]}>email@example.com</Text>
      </View>
    </TouchableOpacity>
  );
};
