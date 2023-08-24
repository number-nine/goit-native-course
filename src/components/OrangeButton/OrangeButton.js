import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import orangeButtonStyles from "./orangeButton.style";

export default ({ label, ...props }) => {
  const isText = typeof label === "string";
  return (
    <Pressable {...props} style={[orangeButtonStyles.wrapper, props.style]}>
      {isText && <Text style={orangeButtonStyles.label}>{label}</Text>}
      {!isText && label}
    </Pressable>
  );
};
