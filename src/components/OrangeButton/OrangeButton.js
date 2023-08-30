import React from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";

export default function OrangeButton({ label, disabled, ...props }) {
  const isText = typeof label === "string";

  return (
    <Pressable
      {...props}
      style={[
        styles.wrapper,
        disabled
          ? { borderWidth: 0, backgroundColor: "#F6F6F6" }
          : { borderColor: "#FF6C00", backgroundColor: "#FF6C00" },
        props.style,
      ]}
    >
      {isText && (
        <Text
          style={[
            styles.label,
            disabled
              ? { color: "#bdbdbd" }
              : { color: "#ffffff" },
          ]}
        >
          {label}
        </Text>
      )}
      {!isText && label}
    </Pressable>
  );
};
