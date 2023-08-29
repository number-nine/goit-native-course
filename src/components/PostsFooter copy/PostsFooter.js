import React from "react";
import { View, Pressable } from "react-native";

import OrangeButton from "../OrangeButton/OrangeButton";
import Plus from "../../images/plus.svg";
import postsFooterStyles from "./postsFooter.styles";

export default ({ leftControl, rightControl }) => {
  return (
    <View style={postsFooterStyles.wrapper}>
      <Pressable style={postsFooterStyles.controlWrapper}>
        {leftControl}
      </Pressable>

      <OrangeButton
        style={postsFooterStyles.button}
        label={<Plus width={14} height={14} fill={"#ffffff"} />}
      />
      <Pressable style={postsFooterStyles.controlWrapper}>
        {rightControl}
      </Pressable>
    </View>
  );
};
