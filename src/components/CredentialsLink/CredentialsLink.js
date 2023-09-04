import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { View } from "react-native";

export default function CredentialsLink({ label, nestedLabel, ...props }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity {...props} style={[props.style]} activeOpacity={0.6}>
        <Text style={styles.nestedLabel}>{nestedLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
