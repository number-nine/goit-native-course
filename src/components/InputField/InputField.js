import React, { useState } from "react";
import { TextInput } from "react-native";
// import { useDispatch } from "react-redux";

import styles from "./styles";

// import { update } from "../../store/authSlice";



export default function InputFields({
  placeholder,
  name,
  onChange,
  ...props
}) {
  // const dispatch = useDispatch();
  
  const [isFocused, setIsFocused] = useState(false);

  const handleOnchange = (text) => {
    onChange({type:"update", payload: {[name]: text} });
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      style={[
        styles.input,
        props.style,
        { borderColor: isFocused ? "#FF6C00" : "#e8e8e8" },
      ]}
      onFocus={handleOnFocus}
      onBlur={() => setIsFocused(false)}
      onChangeText={handleOnchange}
    ></TextInput>
  );
}
