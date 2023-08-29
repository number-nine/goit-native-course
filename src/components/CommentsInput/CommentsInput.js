import React from "react";
import { View } from "react-native";

import InputField from "../InputField/InputField";
import OrangeButton from "../OrangeButton/OrangeButton";

import commentsInputStyle from "./commentsInput.style";
import Arrow from '../../images/vector.svg'


export default (props) => {

    return (
      <View style={[commentsInputStyle.wrapper, props.style]}>
        <InputField
          placeholder={"Коментувати..."}
          style={commentsInputStyle.input}
        />
        <View style={commentsInputStyle.buttonWrapper}>
          <OrangeButton style={commentsInputStyle.button} label={<Arrow/>} />
        </View>
      </View>
    );
}