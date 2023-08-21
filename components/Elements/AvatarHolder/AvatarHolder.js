import React, { useState } from "react";
import { Pressable, Image, View } from "react-native";
import Svg, { Line, Circle, G } from "react-native-svg";

import AvatarHolderStyles from "./AvatarHolder.styles";

export default (props) => {
  const [avatarSelector, setAvatarSelector] = useState(true);

  const handlePressIn = () => {
    setAvatarSelector(false);
  };

  const handlePressOut = () => {
    setAvatarSelector(true);
  };
  return (
    <View style={[AvatarHolderStyles.wrapper, props.style]}>
      <Pressable
        style={AvatarHolderStyles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {!avatarSelector && <Svg height="24" width="24">
          <G rotation="45" origin="12, 12">
            <Circle
              cx="12"
              cy="12"
              r="11"
              stroke="#E8E8E8"
              strokeWidth="1.5"
              fill="transparent"
            />
            <Line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              stroke="#E8E8E8"
              strokeWidth="1.5"
            />
            <Line
              x1="12"
              y1="5"
              x2="12"
              y2="19"
              stroke="#E8E8E8"
              strokeWidth="1.5"
            />
          </G>
        </Svg>}
        {avatarSelector && <Svg height="24" width="24">
          <Circle
            cx="12"
            cy="12"
            r="11"
            stroke="#FF6C00"
            strokeWidth="1.5"
            fill="transparent"
          />
          <Line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            stroke="#FF6C00"
            strokeWidth="1.5"
          />
          <Line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            stroke="#FF6C00"
            strokeWidth="1.5"
          />
        </Svg> }
      </Pressable>
    </View>
  );
};
