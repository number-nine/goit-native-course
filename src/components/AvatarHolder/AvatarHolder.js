import React, { useState } from "react";
import { Pressable, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";
import Plus from "../../images/plus.svg";
import Cross from "../../images/cross.svg";
// import avatarMock from "../../images/default-avatar.png";



export default function AvatarHolder({ avatar, onAvatarSelect, ...props }) {
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

  const handlePress = async () => {
    // console.log(avatar);
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      onAvatarSelect({
        type: "update",
        payload: { avatarUri: uri },
      });
      
    } else {
      alert("Nothing selected");
    }
    
  };
// console.log(avatar);
  return (
    <View style={[styles.wrapper, props.style]}>
      <Image style={styles.avatar} source={avatar} />
      <Pressable
        style={[styles.button, { borderColor: selectorColor }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
      >
        {!avatarSelector && (
          <Cross fill={selectorColor} width={14} height={14} />
        )}
        {avatarSelector && <Plus fill={selectorColor} width={14} height={14} />}
      </Pressable>
    </View>
  );
}
