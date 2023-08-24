import React from "react";
import { Pressable, Image, View, Text } from "react-native";

import profileBadgeStyles from "./profileBadge.styles";
import profilePhoto from '../../../images/user-badge-photo.jpg';

export default (props) => {
  return (
    <Pressable style={[profileBadgeStyles.wrapper, props.style]}>
      <Image style={profileBadgeStyles.photo} source={profilePhoto} />
      <View style={profileBadgeStyles.info}>
        <Text style={[profileBadgeStyles.name]}>Natali Romanova</Text>
        <Text style={[profileBadgeStyles.email]}>email@example.com</Text>
      </View>

    </Pressable>
  );
};
