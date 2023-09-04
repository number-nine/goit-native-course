import React, { useState } from "react";
import { View } from "react-native";

import InputField from "../InputField/InputField";
import OrangeButton from "../OrangeButton/OrangeButton";

import styles from "./styles";
import Arrow from '../../images/vector.svg'


export default function CommentsInput(props) {
  const [comment, setComment] = useState("");
  
  const handleOnChange = ({type, payload}) => {
    setComment(payload)
  }

  const handleSubmit = () => {
    console.log("New comment: ", comment);
    setComment("");
  };
    return (
      <View style={[styles.wrapper, props.style]}>
        <InputField
          placeholder={"Коментувати..."}
          style={styles.input}
          onChange={handleOnChange}
          name="comment"
          value={comment}
        />
        <View style={styles.buttonWrapper}>
          <OrangeButton style={styles.button} label={<Arrow />} onPress={handleSubmit } />
        </View>
      </View>
    );
}