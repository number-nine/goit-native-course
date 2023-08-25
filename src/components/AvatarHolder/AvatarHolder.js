import React, { useState } from "react";
import { Pressable, View } from "react-native";

import avatarHolderStyles from "./avatarHolder.styles";
import Plus from "../../images/plus.svg";
import Cross from "../../images/cross.svg";

export default (props) => {
  const [avatarSelector, setAvatarSelector] = useState(true);
  const [selectorColor, setSelectorColor] = useState("#FF6C00");

  const handlePressIn = () => {
    setAvatarSelector(false);
    setSelectorColor("#E8E8E8");
  };

  const handlePressOut = () => {
    setAvatarSelector(true);
    setSelectorColor("#FF6C00");
  };
  return (
    <View style={[avatarHolderStyles.wrapper, props.style]}>
      <Pressable
        style={[avatarHolderStyles.button, { borderColor: selectorColor }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {!avatarSelector && 
          <Cross
            fill={selectorColor}
            width={14}
            height={14} />
        }
        {avatarSelector &&
          <Plus
            fill={selectorColor}
            width={14}
            height={14} />}
      </Pressable>
    </View>
  );
};
