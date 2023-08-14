import React from "react";
import { TextInput } from "react-native";

import inputFieldStyles from "../InputField.styles";

export default PasswordField = () => {
  return (
    <TextInput
      style={inputFieldStyles.input}
      placeholder="Пароль"
      textContentType="newPassword"
    />
  );
};
