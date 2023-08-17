import React, { useState } from "react";
import { Pressable, Image, View } from "react-native";

import AvatarHolderStyles from "./AvatarHolder.styles";

export default AvatarHolder = (props) => {
  return (
    <View style={[AvatarHolderStyles.wrapper, props.style]}>
      <Pressable style={AvatarHolderStyles.button}></Pressable>
    </View>
  );
};
