import React, { useState } from "react";
import { TextInput } from "react-native";

import inputFieldStyles from "./InputField.styles";

export default InputField = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  console.log(props);
  return (
    <TextInput
      style={[
        inputFieldStyles.input,
        { borderColor: isFocused ? "#FF6C00" : "#e8e8e8" },
      ]}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
  );
};
