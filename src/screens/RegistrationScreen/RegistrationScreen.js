import React, { useReducer } from "react";
import { View, ImageBackground } from "react-native";

import registrationScreenStyles from "./registrationScreen.styles";
import InputField from "../../Elements/InputField/InputField";
import PasswordField from "../../Elements/PasswordField/PasswordField";
import AvatarHolder from "../../Elements/AvatarHolder/AvatarHolder";
import OrangeButton from "../../Elements/OrangeButton/OrangeButton";
import CredentialsLink from "../../Elements/CredentialsLink/CredentialsLink";
import Title from "../../Elements/Title/Title";

import BackgroundSource from "../../../images/credentials-bg.jpg";

function reducer(state, action) {
  // console.log(state);
  return { ...state, [action.type]: action.payload };
}

export default () => {
  const properties = {
    title: "Реєстрація",
    namePlaceholder: "Ім'я",
    emailPlaceholder: "Адреса електронної пошти",
    actionTitle: "Зареєструватися",
    switchAction: ["Вже є акаунт? ", "Увійти"],
  };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
  });

  return (
    <ImageBackground
      source={BackgroundSource}
      resizeMode="cover"
      style={registrationScreenStyles.back}
    >
      <View style={registrationScreenStyles.wrapper}>
        <AvatarHolder style={registrationScreenStyles.avatar} />
        <Title style={{ fontSize: 30, fontWeight: 500 }}>
          {properties.title}
        </Title>
        <InputField
          onChange={dispatch}
          placeholder={properties.namePlaceholder}
          value={state.name}
          name="name"
        />
        <InputField
          onChange={dispatch}
          placeholder={properties.emailPlaceholder}
          value={state.email}
          name="email"
        />
        <PasswordField
          onChange={dispatch}
          value={state.password}
          name="password"
        />
        <OrangeButton
          style={registrationScreenStyles.button}
          label={properties.actionTitle}
        />
        <CredentialsLink
          label={properties.switchAction[0]}
          nestedLabel={properties.switchAction[1]}
        />
      </View>
    </ImageBackground>
  );
};
