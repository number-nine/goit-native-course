import React, { useState } from "react";
import { TextInput } from "react-native";

import styles from "./styles";

export default function InputFields({
  onChange,
  onFocusAction,
  placeholder,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnchange = (text) => {
    onChange({ type: props.name, payload: text });
  };

  const handleOnFocus = () => {
    setIsFocused(true);
    if (typeof onFocusAction === "function") {
      onFocusAction();
    }
  };

  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      style={[
        styles.input,
        props.style,
        { borderColor: isFocused ? "#FF6C00" : "#e8e8e8" },
      ]}
      onFocus={handleOnFocus}
      onBlur={() => setIsFocused(false)}
      onChangeText={handleOnchange}
    ></TextInput>
  );
}
