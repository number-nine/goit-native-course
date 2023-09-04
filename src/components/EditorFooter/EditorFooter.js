import React from "react";
import { View } from "react-native";

import OrangeButton from "../OrangeButton/OrangeButton";
import Trash from "../../images/trash.svg";
import styles from "./styles";

export default function EditorFooter({onPress}) {
  return (
    <View style={styles.wrapper}>
      <OrangeButton
        style={styles.button}
        label={<Trash />}
        onPress={onPress}
      />
    </View>
  );
};
