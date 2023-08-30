import React from "react";
import { View, Pressable } from "react-native";

import OrangeButton from "../../components/OrangeButton/OrangeButton";
import styles from "./styles";

export default function PostsFooter({
  leftControl,
  rightControl,
  centralControl,
}) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.controlWrapper}
        onPress={leftControl.navigator}
      >
        {leftControl.icon}
      </Pressable>

      <OrangeButton
        style={styles.button}
        label={centralControl.icon}
        onPress={centralControl.navigator}
      />
      <Pressable
        style={styles.controlWrapper}
        onPress={rightControl.navigator}
      >
        {rightControl.icon}
      </Pressable>
    </View>
  );
}
