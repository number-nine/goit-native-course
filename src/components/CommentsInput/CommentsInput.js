import React from "react";
import { View } from "react-native";

import InputField from "../InputField/InputField";
import OrangeButton from "../OrangeButton/OrangeButton";

import styles from "./styles";
import Arrow from '../../images/vector.svg'


export default function CommentsInput(props) {

    return (
      <View style={[styles.wrapper, props.style]}>
        <InputField
          placeholder={"Коментувати..."}
          style={styles.input}
        />
        <View style={styles.buttonWrapper}>
          <OrangeButton style={styles.button} label={<Arrow/>} />
        </View>
      </View>
    );
}