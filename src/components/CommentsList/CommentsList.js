import React from "react";

import Comment from "../Comment/Comment";
import { View } from "react-native";

import commentsListStyle from "./commentsList.style";

export default (props) => {

    return (
      <View style={[commentsListStyle.wrapper, props.style]}>
        <Comment />
        <Comment even={true} />
        <Comment />
      </View>
    );
}