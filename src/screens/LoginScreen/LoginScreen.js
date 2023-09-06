import React from "react";
import { View, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";


import styles from "./styles";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import InputField from "../../components/InputField/InputField";
import PasswordField from "../../components/PasswordField/PasswordField";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import CredentialsLink from "../../components/CredentialsLink/CredentialsLink";
import Title from "../../components/Title/Title";

import BackgroundSource from "../../images/credentials-bg.jpg";

// function reducer(state, action) {
//   return { ...state, [action.type]: action.payload };
// }

export default function LoginScreen({ navigation }) {
  
  const { email, password } = useSelector((state) => state.auth);


  const properties = {
    title: "Увійти",
    namePlaceholder: "Ім'я",
    emailPlaceholder: "Адреса електронної пошти",
    actionTitle: "Увійти",
    switchAction: ["Немає акаунту? ", "Зареєструватися"],
  };

  const handleSubmit = async () => {
    console.log(password, email);
    console.log('clearing store');
    await AsyncStorage.clear();
    // dispatch({
    //   type: "email", payload: ""
    // })
    // dispatch({
    //   type: "password", payload: ""
    // })
    //  navigation.navigate("HomeStack");
  }

  const handleChangeScreen = () => {
    navigation.navigate("Registration");
  }

  // const [state, dispatch] = useReducer(reducer, {
  //   email: null,
  //   password: null,
  // });
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
};
