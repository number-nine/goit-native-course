import React from "react";
import { View } from "react-native";

import InputField from "../InputField/InputField";

import minimalisticInputStyles from "./minimalisticInputField.styles";


export default ({ icon, ...props }) => {
    return (
      <View
        style={[
          minimalisticInputStyles.wrapper,
          props.style,
          icon ? { paddingLeft: 28 } : { paddingLeft: 0 },
        ]}
      >
        <InputField {...props} style={minimalisticInputStyles.input} />
        {icon && <View style={minimalisticInputStyles.icon}>{icon}</View>}
      </View>
    );};
