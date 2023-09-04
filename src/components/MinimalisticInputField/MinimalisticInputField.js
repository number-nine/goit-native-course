import React from "react";
import { View } from "react-native";

import InputField from "../InputField/InputField";

import styles from "./styles";

export default function MinimalisticInputField({ icon, ...props }) {
  return (
    <View
      style={[
        styles.wrapper,
        props.style,
        icon ? { paddingLeft: 28 } : { paddingLeft: 0 },
      ]}
    >
      <InputField {...props} style={styles.input} />
      {icon && <View style={styles.icon}>{icon}</View>}
    </View>
  );
}
