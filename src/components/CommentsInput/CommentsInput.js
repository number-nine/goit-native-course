import React from "react";
import { View } from "react-native";

import InputField from "../InputField/InputField";
import OrangeButton from "../OrangeButton/OrangeButton";

import commentsInputStyle from "./commentsInput.style";


export default () => {

    return (
      <View style={commentsInputStyle.wrapper}>
        <InputField
          placeholder={"Коментувати..."}
          style={commentsInputStyle.input}
        />
        <View stytle={commentsInputStyle.buttonWrapper}>
          <OrangeButton stytle={commentsInputStyle.button} label='ddd' />
        </View>
      </View>
    );
}