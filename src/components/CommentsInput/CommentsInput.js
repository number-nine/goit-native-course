import React, { useState } from "react";
import { View } from "react-native";
import { useFireStore } from "../../api/firebase/firestoreApi";

import InputField from "../InputField/InputField";
import OrangeButton from "../OrangeButton/OrangeButton";

import styles from "./styles";
import Arrow from '../../images/vector.svg'


export default function CommentsInput({pid, indicate, ...props}) {
  const [comment, setComment] = useState("");
  const {addComment} = useFireStore()
  
  const handleOnChange = ({payload}) => {
    setComment(payload.comment)
  }

  const handleSubmit = async () => {
    if (comment.trim().length === 0) return
    try {
      await addComment(pid, comment)
      setComment("");
      indicate((state)=>!state)
    } catch (error) {
      console.log("Something went wrong", error.message);
    }

    // console.log("New comment: ", comment);
    
  };
    return (
      <View style={[styles.wrapper, props.style]}>
        <InputField
          {...props}
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