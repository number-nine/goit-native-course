import React from "react";
import {View, Pressable} from "react-native";

import OrangeButton from "../../components/OrangeButton/OrangeButton";
import Plus from "../../images/plus.svg";
import postsFooterStyles from "./postsFooter.styles";

export default ({ leftControl, rightControl }) => {
  return (
    <View style={postsFooterStyles.wrapper}>
      <Pressable
        style={postsFooterStyles.controlWrapper}
        onPress={() => {
          console.log(
            "Footer left control. Usualy changes view to grid (but can be dispatched by name)"
          );
        }}
      >
        {leftControl}
      </Pressable>

      <OrangeButton
        style={postsFooterStyles.button}
        label={<Plus width={14} height={14} fill={"#ffffff"} />}
        onPress={() => {
          console.log(
            "Navigate/PostEditorScreen"
          );
        }}
      />
      <Pressable
        style={postsFooterStyles.controlWrapper}
        onPress={() => {
          console.log(
            "Footer right control. Usualy Navigate/PROFILE (but can be dispatched by name)"
          );
        }}
      >
        {rightControl}
      </Pressable>
    </View>
  );
};
