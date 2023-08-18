import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import orangeButtonStyles from "./OrangeButton.style";

export default OrangeButton = ({ title, ...transitProps }) => {

  return (
    <Pressable {...transitProps} style={orangeButtonStyles.wrapper}>
      <Text style={orangeButtonStyles.label}>{title}</Text>
    </Pressable>
  );
};
