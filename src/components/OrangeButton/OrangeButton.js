import React from "react";
import { Pressable, Text } from "react-native";

import orangeButtonStyles from "./orangeButton.style";

export default ({ label, disabled, ...props }) => {
  const isText = typeof label === "string";

  return (
    <Pressable
      {...props}
      style={[
        orangeButtonStyles.wrapper,
        disabled
          ? { borderWidth: 0, backgroundColor: "#F6F6F6" }
          : { borderColor: "#FF6C00", backgroundColor: "#FF6C00" },
        props.style,
      ]}
    >
      {isText && (
        <Text
          style={[
            orangeButtonStyles.label,
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
