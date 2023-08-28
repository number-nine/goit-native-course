import React from "react";
import { Image, View, Text } from "react-native";

import commentStyle from "./comment.style";

export default ({ even = false }) => {
  return (
    <View
      style={[
        commentStyle.wrapper,
        even ? { flexDirection: "row" } : { flexDirection: "row-reverse" },
      ]}
    >
      <View
        style={[
          even ? commentStyle.avatarWrapperEven : commentStyle.avatarWrapperOdd,
        ]}
      >
        <Image source={require("../../images/user-avatar.jpg")} />
      </View>

      <View
        style={[
          commentStyle.content,
          even ? commentStyle.contentEven : commentStyle.contentOdd,
        ]}
      >
        <Text style={commentStyle.text}>
          Really love your most recent photo. I’ve been trying to capture the
          same thing for a few months and would love some tips!
        </Text>
        <Text style={commentStyle.date}>09 червня, 2020 | 08:40</Text>
      </View>
    </View>
  );
};
