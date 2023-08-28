import React from "react";
import { View, ScrollView, Image } from "react-native";

import commentsScreenStyles from "./commentsScreen.styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import Comment from "../../components/Comment/Comment";
import CommentsInput from "../../components/CommentsInput/CommentsInput";

import Arrow from "../../images/arrow-left.svg";

export default ({ photo = require("../../images/photo1.jpg") }) => {
  return (
    <View style={commentsScreenStyles.wrapper}>
      <MainHeader title={"Коментарі"} leftControl={<Arrow />} />
      <ScrollView style={commentsScreenStyles.main}>
        <View style={commentsScreenStyles.photoWrapper}>
          <Image style={commentsScreenStyles.photo} source={photo} />
        </View>
        <Comment />
        <Comment even={true} />
        <Comment />
        <CommentsInput />
      </ScrollView>
    </View>
  );
};
