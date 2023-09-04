import React from "react";
import { Image, View, Text } from "react-native";

import styles from "./styles";

export default function Comment({ even = false }) {
  return (
    <View
      style={[
        styles.wrapper,
        even ? { flexDirection: "row" } : { flexDirection: "row-reverse" },
      ]}
    >
      <View
        style={[
          even ? styles.avatarWrapperEven : styles.avatarWrapperOdd,
        ]}
      >
        <Image source={require("../../images/user-avatar.jpg")} />
      </View>

      <View
        style={[
          styles.content,
          even ? styles.contentEven : styles.contentOdd,
        ]}
      >
        <Text style={styles.text}>
          Really love your most recent photo. I’ve been trying to capture the
          same thing for a few months and would love some tips!
        </Text>
        <Text style={styles.date}>09 червня, 2020 | 08:40</Text>
      </View>
    </View>
  );
};
