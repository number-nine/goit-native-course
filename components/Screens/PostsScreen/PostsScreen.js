import React from "react";
import { View } from "react-native";

import postsScreenStyles from "./PostsScreen.styles";

import OrangeButton from "../../Elements/OrangeButton/OrangeButton";
import Title from "../../Elements/Title/Title";


export default () => {
  const properties = {
    title: "Увійти",
    namePlaceholder: "Ім'я",
    emailPlaceholder: "Адреса електронної пошти",
    actionTitle: "Увійти",
    switchAction: ["Немає акаунту? ", "Зареєструватися"],
  };


  return (
    <View style={postsScreenStyles.wrapper}>
      <AvatarHolder style={postsScreenStyles.avatar} />
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
        style={loginScreenStyles.button}
        title={properties.actionTitle}
      />
      <CredentialsLink
        label={properties.switchAction[0]}
        nestedLabel={properties.switchAction[1]}
      />
    </View>
  );
};
