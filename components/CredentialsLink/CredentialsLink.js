import React from "react";
import { Pressable, Text } from "react-native";

import credentialsLinkStyles from "./CredentialsLink.styles";

export default ({ label, nestedLabel, ...props }) => {
  return (
    <Pressable {...props} style={[props.style]}>
      <Text style={credentialsLinkStyles.label}>
        {label}
        <Text style={credentialsLinkStyles.nestedLabel}>{nestedLabel}</Text>
      </Text>
    </Pressable>
  );
};
