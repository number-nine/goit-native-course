import React from "react";
import { View } from "react-native";

import OrangeButton from "../OrangeButton/OrangeButton";
import Trash from "../../images/trash.svg";
import postsFooterStyles from "./editorFooter.styles";

export default () => {
  return (
    <View style={postsFooterStyles.wrapper}>


      <OrangeButton
        style={postsFooterStyles.button}
        label={<Trash />}
      />

    </View>
  );
};
