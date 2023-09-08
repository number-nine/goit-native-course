import React, { useState, useEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useFireStore } from "../../api/firebase/firestoreApi";

import styles from "./styles";

import CommentsInput from "../../components/CommentsInput/CommentsInput";
import CommentsList from "../../components/CommentsList/CommentsList";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

export default function CommentsScreen({
  route,
  photo = require("../../images/photo1.jpg"),
}) {
  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(true);
  const isFocused = useIsFocused();
  const { getCommentsByPostId } = useFireStore();

  const { id } = route.params;

  useEffect(
    (isFocused) => {
      async function fetchData() {
        const data = await getCommentsByPostId(id);
        setComments(data);
        // console.log(data);
      }
      fetchData();
    },
    [isFocused]
  );

  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <ScrollView style={styles.main} keyboardShouldPersistTaps="handled">
          <Image style={styles.photo} source={photo} />

          <CommentsList style={styles.list} data={comments} />

          <CommentsInput style={styles.input} pid={id} indicate={setFlag} />
        </ScrollView>
      </View>
    </ScreenLayout>
  );
}
