import React from "react";
import { View, Image } from "react-native";

import avatarMock from '../../images/default-avatar.png'
import styles from "./styles";


export default function ProfileAvatar({ avatar = avatarMock, ...props }) {
  return (
    <View style={[styles.wrapper, props.style]}>
      <Image style={ styles.avatar} source={avatar} />
    </View>
  );
};
