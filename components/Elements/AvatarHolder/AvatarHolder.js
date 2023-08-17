import React, { useState } from "react";
import { Pressable, Image, View } from "react-native";

import AvatarHolderStyles from "./AvatarHolder.styles";

export default AvatarHolder = (props) => {
    return (
      <View style={[AvatarHolderStyles.wrapper, props.style]}>
        <Pressable style={AvatarHolderStyles.button}>
          <Image
            style={AvatarHolderStyles.logo}
            source={{
              uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
            }}
          />
        </Pressable>
      </View>
    );
};
