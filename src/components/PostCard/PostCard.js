import React from "react";
import { View, Image, Text } from "react-native";

import Title from '../Title/Title';

import postCardStyles from "./postCard.styles";

import MessageCircle from '../../images/message-circle.svg';
import MapPin from '../../images/map-pin.svg';


export default () => {
  return (
    <View style={postCardStyles.wrapper}>
      <Image source={require("../../images/post-foto.jpg")} style={postCardStyles.photo}></Image>
      <Title style={postCardStyles.title}>{"Ліс"}</Title>
      <View style = {postCardStyles.details}>
        <View style={postCardStyles.detailsItem}>
          <MessageCircle />
          <Text style={postCardStyles.detailsCaption}>{0}</Text>
        </View>
        <View style={postCardStyles.detailsItem}>
          <MapPin />
          <Text style={postCardStyles.detailsCaption}>
            {"Ivano-Frankivs'k Region, Ukraine"}
          </Text>
        </View>
      </View>
    </View>
  );
};
