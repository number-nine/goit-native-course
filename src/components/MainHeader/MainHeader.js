import React from "react";
import { Pressable, View } from "react-native";

import mainHeaderStyles from "./mainHeader.styles";

import Title from "../../components/Title/Title";

export default ({ leftControl, rightControl, title }) => {
  return (
    <View style={mainHeaderStyles.wraper}>
      <Pressable
        style={mainHeaderStyles.controlWrapper}
        onPress={() => {
          console.log(
            "Header left control. Usualy Navigate/BACK (but can be dispatched by name)"
          );
        }}
      >
        {leftControl}
      </Pressable>
      <Title style={{ fontSize: 17, fontWeight: 500 }}>{title}</Title>
      <Pressable
        style={mainHeaderStyles.controlWrapper}
        onPress={() => {
          console.log(
            "Header left control. Usualy Navigate/LOGOUT (but can be dispatched by name)"
          );
        }}
      >
        {rightControl}
      </Pressable>
    </View>
  );
};
