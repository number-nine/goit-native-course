import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";

import styles from "./styles";

import InputField from "../InputField/InputField";

export default function PasswordField(props) {
  const [secureField, setSecureField] = useState(true);

  const handlePressIn = () => {
    setSecureField(false);
  };

  const handlePressOut = () => {
    setSecureField(true);
  };

  return (
    <View style={styles.wrapper}>
      <InputField
        {...props}
        placeholder="Пароль"
        textContentType="password"
        secureTextEntry={secureField}
        maxLength={24}
      />
      <Pressable
        style={styles.switch}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.text}>Показати</Text>
      </Pressable>
    </View>
  );
}
