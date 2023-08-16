import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";

import passwordFieldStyles from "./PasswordField.style";

import InputField from "../InputField/InputField";

export default PasswordField = () => {
  const [secureField, setSecureField] = useState(true);

  const handlePressIn = () => {
    setSecureField(false);
  };

  const handlePressOut = () => {
    setSecureField(true);
  };

  return (
    <View style={passwordFieldStyles.wrapper}>
      <InputField
        placeholder="Пароль"
        textContentType="password"
        secureTextEntry={secureField}
        maxLength={24}
      />
      <Pressable
        style={passwordFieldStyles.switch}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={passwordFieldStyles.text}>Показати</Text>
      </Pressable>
    </View>
  );
};
