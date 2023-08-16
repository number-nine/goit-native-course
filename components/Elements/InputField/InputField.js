import React, { useState } from "react";
import { TextInput } from "react-native";

import inputFieldStyles from "./InputField.styles";

export default InputField = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      {...props}
      style={[
        inputFieldStyles.input,
        { borderColor: isFocused ? "#FF6C00" : "#e8e8e8" },
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
