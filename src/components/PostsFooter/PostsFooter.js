import React from "react";
import { View, Pressable } from "react-native";

import OrangeButton from "../../components/OrangeButton/OrangeButton";
import Plus from "../../images/plus.svg";
import styles from "./styles";

export default function PostsFooter({
  leftControl,
  rightControl,
  centralControl = <Plus width={14} height={14} fill={"#ffffff"} />,
}) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.controlWrapper}
        onPress={() => {
          console.log(
            "Footer left control. Usualy changes view to grid (but can be dispatched by name)"
          );
        }}
      >
        {leftControl}
      </Pressable>

      <OrangeButton
        style={styles.button}
        label={centralControl}
        onPress={() => {
          console.log("Navigate/PostEditorScreen");
        }}
      />
      <Pressable
        style={styles.controlWrapper}
        onPress={() => {
          console.log(
            "Footer right control. Usualy Navigate/PROFILE (but can be dispatched by name)"
          );
        }}
      >
        {rightControl}
      </Pressable>
    </View>
  );
}
