import React from "react";
import { View, Text } from "react-native";

import TitleStyles from "./Title.styles";

export default ({ children, ...props }) => {
  return (
    <View>
      <Text style={[TitleStyles.text, props.style]}>{children}</Text>
    </View>
  );
};
