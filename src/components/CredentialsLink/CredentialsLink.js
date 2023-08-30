import React from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";

export default function CredentialsLink({ label, nestedLabel, ...props }) {
  return (
    <Pressable {...props} style={[props.style]}>
      <Text style={styles.label}>
        {label}
        <Text style={styles.nestedLabel}>{nestedLabel}</Text>
      </Text>
    </Pressable>
  );
}
