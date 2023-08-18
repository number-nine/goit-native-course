import React, { useState } from "react";
import { Text } from "react-native";

import registrationScreenStyles from "./RegistrationScreen.styles";
import InputField from "../../Elements/InputField/InputField";
import PasswordField from "../../Elements/PasswordField/PasswordField";
import AvatarHolder from "../../Elements/AvatarHolder/AvatarHolder";
import OrangeButton from "../../Elements/OrangeButton/OrangeButton";

import { View } from "react-native";

export default RegistrationScreen = () => {
  return (
    <View style={registrationScreenStyles.wrapper}>
      <AvatarHolder style={registrationScreenStyles.avatar} />
      <Text>Реєстрація</Text>
      <InputField placeholder="Логін" />
      <InputField placeholder="Адреса електронної пошти" />
      <PasswordField />
      <OrangeButton title="Зареєструватися" />
    </View>
  );
};
