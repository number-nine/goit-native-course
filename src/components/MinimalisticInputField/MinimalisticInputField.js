import React from "react";
import { View } from "react-native";

import InputField from "../InputField/InputField";

import minimalisticInputStyles from "./minimalisticInputField.styles";


export default ({ icon, ...props }) => {
    if (icon) {
        minimalisticInputStyles.input = {
            ...minimalisticInputStyles.input,
            paddingLeft: 28,
        }

}
    return (
      <View style={[minimalisticInputStyles.wrapper, props.style]}>
        <InputField {...props} style={minimalisticInputStyles.input} />
        {icon && <View style={minimalisticInputStyles.icon}>{icon}</View>}
      </View>
    );};
