import React from "react";
import {TouchableOpacity } from "react-native";

import styles from "./styles";


import Camera from "../../images/camera.svg";


export default function PhotoButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...props}
      style={[styles.wrapper, props.style]}
    >
      <Camera />
    </TouchableOpacity>
  );
};
