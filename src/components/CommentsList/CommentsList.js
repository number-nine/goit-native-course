import React from "react";

import Comment from "../Comment/Comment";
import { View } from "react-native";

import styles from "./styles";

export default function CommentsList(props) {

    return (
      <View style={[styles.wrapper, props.style]}>
        <Comment />
        <Comment even={true} />
        <Comment />
      </View>
    );
}