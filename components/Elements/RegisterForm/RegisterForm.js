import React, { useState } from "react";
import { Text } from "react-native";

import RegisterFormStyles from "./RegisterForm.styles";
import InputField from "../InputField/InputField";
import PasswordField from "../PasswordField/PasswordField";
import { View } from "react-native";

export default RegisterForm = (props) => {

    return (
      <View style={RegisterFormStyles.wrapper}>
        <Text>Реєстрація</Text>
        <InputField placeholder="Логін" />
        <InputField placeholder="Адреса електронної пошти" />
        <PasswordField />
      </View>
    );
};
