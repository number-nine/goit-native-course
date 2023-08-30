import React from "react";
import { Pressable } from "react-native";

import styles from "./styles";


import Camera from "../../images/camera.svg";


export default function PhotoButton(props) {
  return (
    <Pressable {...props} style={[styles.wrapper, props.style]}>
          <Camera/>
    </Pressable>
  );
};
