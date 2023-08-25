import React from "react";
import { View, Text } from "react-native";

import titleStyles from "./title.styles";

export default ({ children, ...props }) => {
  return (
    <View>
      <Text style={[titleStyles.text, props.style]}>{children}</Text>
    </View>
  );
};
