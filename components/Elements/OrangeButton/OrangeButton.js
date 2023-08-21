import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import orangeButtonStyles from "./OrangeButton.style";

export default ({ title, ...props }) => {

  return (
    <Pressable {...props} style={[orangeButtonStyles.wrapper, props.style]}>
      <Text style={orangeButtonStyles.label}>{title}</Text>
    </Pressable>
  );
};
