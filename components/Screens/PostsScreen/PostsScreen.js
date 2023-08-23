import React from "react";
import { View } from "react-native";

import postsScreenStyles from "./PostsScreen.styles";

import OrangeButton from "../../Elements/OrangeButton/OrangeButton";
import Title from "../../Elements/Title/Title";
import ProfileBadge from "../../Elements/ProfileBadge/ProfileBadge";


export default () => {
  const properties = {
    title: "Публікації",
    actionTitle: "Увійти",
  };


  return (
    <View style={postsScreenStyles.screenWrapper}>
      <View style={postsScreenStyles.headerWrapper}>
        <Title style={{ fontSize: 17, fontWeight: 500 }}>
          {properties.title}
        </Title>
      </View>

      <View style={postsScreenStyles.wrapper}>
        <ProfileBadge />
        <OrangeButton
          style={postsScreenStyles.button}
          title={properties.actionTitle}
        />
      </View>
    </View>
  );
};
