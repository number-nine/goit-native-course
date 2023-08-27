import React from "react";
import { Pressable, Text } from "react-native";

import orangeButtonStyles from "./orangeButton.style";

export default ({ label, disabled, ...props }) => {
  const isText = typeof label === "string";
  if (disabled) {
    orangeButtonStyles.wrapper = {
      ...orangeButtonStyles.wrapper,
      ...orangeButtonStyles.disabled,
    };
    orangeButtonStyles.label = {
      ...orangeButtonStyles.label,
      color: '#bdbdbd',
    };
  }
  return (
    <Pressable {...props} style={[orangeButtonStyles.wrapper, props.style]}>
      {isText && <Text style={orangeButtonStyles.label}>{label}</Text>}
      {!isText && label}
    </Pressable>
  );
};
