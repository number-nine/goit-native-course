import React, { useState } from "react";
import { Pressable, View, Image } from "react-native";

import styles from "./styles";
import Plus from "../../images/plus.svg";
import Cross from "../../images/cross.svg";
import avatarMock from "../../images/default-avatar.png";

export default function AvatarHolder({ avatar = avatarMock, ...props }) {
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
    <View style={[styles.wrapper, props.style]}>
      <Image style={styles.avatar} source={avatar} />
      <Pressable
        style={[styles.button, { borderColor: selectorColor }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {!avatarSelector && (
          <Cross fill={selectorColor} width={14} height={14} />
        )}
        {avatarSelector && <Plus fill={selectorColor} width={14} height={14} />}
      </Pressable>
    </View>
  );
};
