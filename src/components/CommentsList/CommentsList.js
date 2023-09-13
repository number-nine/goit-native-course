import React, {useState, useEffect} from "react";


import Comment from "../Comment/Comment";
import { View } from "react-native";

import styles from "./styles";

export default function CommentsList({data, ...props}) {

    return (
      <View style={[styles.wrapper, props.style]}>
        {data.map((comment, index) => (
          <Comment key={comment.id} even={(index % 2 == 0)} {...comment} />
        ))}
      </View>
    );
}