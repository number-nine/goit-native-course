import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function CredentialsLink({ label, nestedLabel, ...props }) {
  return (
    <TouchableOpacity {...props} style={[props.style]} activeOpacity={0.6}>
      <Text style={styles.label}>
        {label}
        <Text style={styles.nestedLabel}>{nestedLabel}</Text>
      </Text>
    </TouchableOpacity>
  );
}
