import React from "react";
import { View, ScrollView, Image } from "react-native";

import styles from "./styles";

import CommentsInput from "../../components/CommentsInput/CommentsInput";
import CommentsList from "../../components/CommentsList/CommentsList";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";


export default function CommentsScreen({
  photo = require("../../images/photo1.jpg"),
}) {


  return (
    <ScreenLayout>
      <View style={styles.wrapper}>

        <ScrollView style={styles.main}>
          <Image style={styles.photo} source={photo} />

          <CommentsList style={styles.list} />

          <CommentsInput style={styles.input}  />
        </ScrollView>
      </View>
    </ScreenLayout>
  );
}
