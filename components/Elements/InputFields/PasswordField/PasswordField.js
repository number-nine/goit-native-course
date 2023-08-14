import React, { useState } from "react";
import { TextInput, Text, Pressable } from "react-native";

import inputFieldStyles from "../InputField.styles";
import passwordFieldStyles from "./PasswordField.style";

export default PasswordField = () => {
  const [secureField, setSecureField] = useState(true);
  return (
    <>
      <TextInput
        style={{ ...inputFieldStyles.input, ...passwordFieldStyles.input }}
        placeholder="Пароль"
        textContentType="password"
        secureTextEntry={secureField}
      />
      <Pressable onPress={()=> 5}>
        <Text>Показати</Text>
      </Pressable>
    </>
  );
};
