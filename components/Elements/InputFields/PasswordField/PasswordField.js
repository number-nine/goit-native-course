import React, { useState } from "react";
import { TextInput, Text, Pressable, View } from "react-native";

import inputFieldStyles from "../InputField.styles";
import passwordFieldStyles from "./PasswordField.style";

import InputField from "../InputField";

export default PasswordField = () => {
  const [secureField, setSecureField] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handlePressIn = () => {
    setSecureField(false);
    console.log("pressed");
  };

  const handlePressOut = () => {
    setSecureField(true);
  };

  // const handleOnFocus = () => {
  //   // setIsFocused(true);
  // };

  // const handleOnBlur = () => {
  //   // setIsFocused(false);
  // };

  return (
    <View style={passwordFieldStyles.wrapper}>
      <TextInput
        style={{
          ...inputFieldStyles.input,
          ...passwordFieldStyles.input,
          borderColor: isFocused ? "#FF6C00" : "#e8e8e8",
        }}
        placeholder="Пароль"
        textContentType="password"
        secureTextEntry={secureField}
        maxLength={24}
        // onFocus={handleOnFocus}
        // onBlur={handleOnBlur}
      />

      <Pressable
        style={passwordFieldStyles.switch}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={passwordFieldStyles.text}>Показати</Text>
      </Pressable>

      <InputField
        placeholder="Пароль"
        textContentType="password"
        secureTextEntry={secureField}
        maxLength={24}
 
      />
    </View>
  );
};
