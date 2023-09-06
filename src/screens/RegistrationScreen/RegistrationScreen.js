import React from "react";
import { View, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import InputField from "../../components/InputField/InputField";
import PasswordField from "../../components/PasswordField/PasswordField";
import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import CredentialsLink from "../../components/CredentialsLink/CredentialsLink";
import Title from "../../components/Title/Title";

import BackgroundSource from "../../images/credentials-bg.jpg";

import { useUserAuth } from '../../api/firebase/authApi';

export default function RegistrationScreen({ navigation }) {
  const { register } = useUserAuth();
  const {name, email, password} = useSelector(state => state.auth);

  const properties = {
    title: "Реєстрація",
    namePlaceholder: "Ім'я",
    emailPlaceholder: "Адреса електронної пошти",
    actionTitle: "Зареєструватися",
    switchAction: ["Вже є акаунт? ", "Увійти"],
  };

  const handleSubmit = async () => {
    console.log(name, email, password);
    const currentUser = await register({ email, password, displayName: name })
    console.log(currentUser.uid);
    
    // navigation.navigate("HomeStack");
  };

  const handleChangeScreen = () => {
    navigation.navigate("Login");
  };


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
            // onChangeDispatch={dispatch}
            placeholder={properties.namePlaceholder}
            value={name}
            name="name"
          />
          <InputField
            // onChangeDispatch={dispatch}
            placeholder={properties.emailPlaceholder}
            value={email}
            name="email"
          />
          <PasswordField
            // onChangeDispatch={dispatch}
            value={password}
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
