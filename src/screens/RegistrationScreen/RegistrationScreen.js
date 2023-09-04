import React, { useReducer } from "react";
import { View, ImageBackground } from "react-native";

import styles from "./styles";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
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

export default function RegistrationScreen({ navigation }) {
  const properties = {
    title: "Реєстрація",
    namePlaceholder: "Ім'я",
    emailPlaceholder: "Адреса електронної пошти",
    actionTitle: "Зареєструватися",
    switchAction: ["Вже є акаунт? ", "Увійти"],
  };

  const handleSubmit = () => {
    console.log(state);
    dispatch({
      type: "name",
      payload: "",
    });
    dispatch({
      type: "email",
      payload: "",
    });
    dispatch({
      type: "password",
      payload: "",
    });
    navigation.navigate("HomeStack");
  };

  const handleChangeScreen = () => {
    navigation.navigate("Login");
  };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScreenLayout>
      <ImageBackground
        source={BackgroundSource}
        resizeMode="cover"
        style={styles.back}
      >
        <View style={styles.wrapper}>
          <AvatarHolder style={styles.avatar} />
          <Title style={[styles.title, { fontSize: 30, fontWeight: 500 }]}>
            {properties.title}
          </Title>
          <InputField
            onChangeDispatch={dispatch}
            placeholder={properties.namePlaceholder}
            value={state.name}
            name="name"
          />
          <InputField
            onChangeDispatch={dispatch}
            placeholder={properties.emailPlaceholder}
            value={state.email}
            name="email"
          />
          <PasswordField
            onChangeDispatch={dispatch}
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
    </ScreenLayout>
  );
}
