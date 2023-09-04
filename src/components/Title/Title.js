import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function Title({ children, ...props }) {
  return (
    <View>
      <Text style={[styles.text, props.style]}>{children}</Text>
    </View>
  );
};
