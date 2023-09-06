import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import profilePhoto from '../../images/user-badge-photo.jpg';
import { useSelector } from "react-redux";

export default function ProfileBadge(props) {
  const { login, displayName } = useSelector(state => { console.log(state);return state.auth })
  return (
    <TouchableOpacity
      {...props}
      style={[styles.wrapper, props.style]}
      activeOpacity={0.6}
    >
      <Image style={styles.photo} source={profilePhoto} />
      <View style={styles.info}>
        <Text style={[styles.name]}>{ displayName}</Text>
        <Text style={[styles.email]}>{ login }</Text>
      </View>
    </TouchableOpacity>
  );
};
