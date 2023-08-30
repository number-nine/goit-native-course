import React, { useReducer } from "react";
import { View, ImageBackground } from "react-native";

import styles from "./styles";
import InputField from "../../components/InputField/InputField";
import PasswordField from "../../components/PasswordField/PasswordField";
import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import CredentialsLink from "../../components/CredentialsLink/CredentialsLink";
import Title from "../../components/Title/Title";

import BackgroundSource from "../../images/credentials-bg.jpg";

function reducer(state, action) {
  return { ...state, [action.type]: action.payload };
}

export default function LoginScreen() {
  const properties = {
    title: "Увійти",
    namePlaceholder: "Ім'я",
    emailPlaceholder: "Адреса електронної пошти",
    actionTitle: "Увійти",
    switchAction: ["Немає акаунту? ", "Зареєструватися"],
  };

  const handleSubmit = () => {
    console.log('Logging in...');
    console.log(state);
  }

  const handleChangeScreen = () => {
    console.log('Navigating to registration screen...');
  }

  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });

  return (
    <ImageBackground
      source={BackgroundSource}
      resizeMode="cover"
      style={styles.back}
    >
      <View style={styles.wrapper}>
        <AvatarHolder style={styles.avatar} />
        <Title style={{ fontSize: 30, fontWeight: 500 }}>
          {properties.title}
        </Title>
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
          style={styles.button}
          label={properties.actionTitle}
          onPress={handleSubmit}
        />
        <CredentialsLink
          label={properties.switchAction[0]}
          nestedLabel={properties.switchAction[1]}
          onPress={handleChangeScreen}
        />
      </View>
    </ImageBackground>
  );
};
