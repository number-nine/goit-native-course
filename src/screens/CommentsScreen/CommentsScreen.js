import React from "react";
import { View, ScrollView, Image } from "react-native";

import styles from "./styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import CommentsInput from "../../components/CommentsInput/CommentsInput";
import CommentsList from "../../components/CommentsList/CommentsList";

import Arrow from "../../images/arrow-left.svg";

export default function CommentsScreen({
  photo = require("../../images/photo1.jpg"),
}) {
  return (
    <View style={styles.wrapper}>
      <MainHeader title={"Коментарі"} leftControl={<Arrow />} />
      <ScrollView style={styles.main}>
        <Image style={styles.photo} source={photo} />

        <CommentsList style={styles.list} />

        <CommentsInput style={styles.input} />
      </ScrollView>
    </View>
  );
}
