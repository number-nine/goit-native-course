import React from "react";
import { View, ScrollView, Image } from "react-native";

import commentsScreenStyles from "./commentsScreen.styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import CommentsInput from "../../components/CommentsInput/CommentsInput";
import CommentsList from "../../components/CommentsList/CommentsList";

import Arrow from "../../images/arrow-left.svg";

export default ({ photo = require("../../images/photo1.jpg") }) => {
  return (
    <View style={commentsScreenStyles.wrapper}>
      <MainHeader title={"Коментарі"} leftControl={<Arrow />} />
      <ScrollView style={commentsScreenStyles.main}>
       
          <Image style={commentsScreenStyles.photo} source={photo} />
      
          <CommentsList style={commentsScreenStyles.list} />
      
          <CommentsInput style={commentsScreenStyles.input} />
      </ScrollView>
    </View>
  );
};
