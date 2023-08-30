import React, { useState } from "react";
import { Text, Pressable, View, TouchableOpacity } from "react-native";

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
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.switch}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.text}>Показати</Text>
      </TouchableOpacity>
    </View>
  );
}
