import React from "react";
import { Pressable, Image, View, Text } from "react-native";

import profileBadgeStyles from "./ProfileBadge.styles";
import profilePhoto from '../../../images/user-badge-photo.jpg';
// import Pin from '../SVGPin/SVGPin';
import Pin1 from '../../../images/map-pin.svg'

export default (props) => {
// console.log(Pin);

  return (
    <Pressable style={[profileBadgeStyles.wrapper, props.style]}>
      <Image style={profileBadgeStyles.photo} source={profilePhoto} />
      <View style={profileBadgeStyles.info}>
        <Text style={[profileBadgeStyles.name]}>Natali Romanova</Text>
        <Text style={[profileBadgeStyles.email]}>email@example.com</Text>
      </View>
          <Pin1 width={ 60 } height = {60} />
    </Pressable>
  );
};
