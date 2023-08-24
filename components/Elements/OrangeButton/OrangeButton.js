import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import orangeButtonStyles from "./OrangeButton.style";

export default ({ label, ...props }) => {
  const isText = typeof title === "string";
  return (
    <Pressable {...props} style={[orangeButtonStyles.wrapper, props.style]}>
      {isText && <Text style={orangeButtonStyles.label}>{label}</Text>}
      {!isText && label}
    </Pressable>
  );
};
