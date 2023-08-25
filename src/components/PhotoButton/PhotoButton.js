import React from "react";
import { Pressable } from "react-native";

import photoButtonStyles from "./photoButton.styles";


import Camera from "../../images/camera.svg";


export default (props) => {
  return (
      <Pressable style={[photoButtonStyles.wrapper, props.style]}>
          <Camera/>
    </Pressable>
  );
};
