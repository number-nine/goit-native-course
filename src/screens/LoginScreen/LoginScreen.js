import React, { useReducer } from "react";
import { View, ImageBackground } from "react-native";

import styles from "./styles";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import InputField from "../../components/InputField/InputField";
import PasswordField from "../../components/PasswordField/PasswordField";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import CredentialsLink from "../../components/CredentialsLink/CredentialsLink";
import Title from "../../components/Title/Title";

import BackgroundSource from "../../images/credentials-bg.jpg";

import { useUserAuth } from "../../api/firebase/authApi";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const INITIAL_STATE = {
  email: null,
  password: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "update":
      return { ...state, ...payload };
    case "clear":
      return { ...state, ...INITIAL_STATE };
  }
}

export default function LoginScreen({ navigation }) {
  const { signInUser } = useUserAuth();
  const globalDispatch = useDispatch();
  const [{ email, password }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  const properties = {
    title: "Увійти",
    namePlaceholder: "Ім'я",
    emailPlaceholder: "Адреса електронної пошти",
    actionTitle: "Увійти",
    switchAction: ["Немає акаунту? ", "Зареєструватися"],
  };

  const handleSubmit = async () => {
     try {
       const user = await signInUser({
         login: email,
         password,
       });
       globalDispatch(
         login({
           login: user.email,
           displayName: user.displayName,
           uid: user.uid,
         })
       );
       dispatch({ type: "clear" });
     } catch (error) {
       console.log("Something went wrong: ", error.message);
     }
  };

  const handleChangeScreen = () => {
    navigation.navigate("Registration");
  };

  return (
    <ScreenLayout>
      <ImageBackground
        source={BackgroundSource}
        resizeMode="cover"
        style={styles.back}
      >
        <View style={styles.wrapper}>
          <Title style={[styles.title, { fontSize: 30, fontWeight: 500 }]}>
            {properties.title}
          </Title>
          <InputField
            onChange={dispatch}
            placeholder={properties.emailPlaceholder}
            value={email}
            name="email"
          />
          <PasswordField onChange={dispatch} value={password} name="password" />
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
