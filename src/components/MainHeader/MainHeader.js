import React from "react";
import { Pressable, View } from "react-native";

import styles from "./styles";

import Title from "../../components/Title/Title";

export default function MainHeader({ leftControl, rightControl, title }) {
  return (
    <View style={styles.wraper}>
      <Pressable
        style={styles.controlWrapper}
        onPress={leftControl?.navigator}
      >
        {leftControl?.icon}
      </Pressable>
      <Title style={{ fontSize: 17, fontWeight: 500 }}>{title}</Title>
      <Pressable
        style={styles.controlWrapper}
        onPress={rightControl?.navigator}
      >
        {rightControl?.icon}
      </Pressable>
    </View>
  );
}
