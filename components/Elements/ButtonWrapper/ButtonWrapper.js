import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import ButtonWrapperStyles from "./ButtonWrapper.style";

export default ButtonWrapper = ({title, ...transitProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Pressable {...transitProps} style={[ButtonWrapperStyles.wrapper]}>
      <Text>{title}</Text>
    </Pressable>
  );
};
