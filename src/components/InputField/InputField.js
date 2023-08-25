import React, { useState } from "react";
import { TextInput } from "react-native";

import inputFieldStyles from "./inputField.styles";

export default ({ onChange, placeholder, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnchange = (text) => {
    onChange({ type: props.name, payload: text });
  };

  return (
    <TextInput
      placeholder={placeholder}
      style={[
        inputFieldStyles.input,
        props.style,
        { borderColor: isFocused ? "#FF6C00" : "#e8e8e8" },
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={handleOnchange}
    ></TextInput>
  );
};
