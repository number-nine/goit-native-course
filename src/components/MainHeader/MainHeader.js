import React from "react";
import { Pressable, View } from "react-native";

import mainHeaderStyles from "./mainHeader.styles";

import Title from "../../Elements/Title/Title";


export default ({ leftControl, rightControl, title}) => {

  return (
    <View style={mainHeaderStyles.wraper}>
      <Pressable style={mainHeaderStyles.controlWrapper}>
        {leftControl}
      </Pressable>
      <Title
        style={{ fontSize: 17, fontWeight: 500 }}
      >
        {title}
      </Title>
      <Pressable style={mainHeaderStyles.controlWrapper}>
        {rightControl}
      </Pressable>
    </View>
  );
};
