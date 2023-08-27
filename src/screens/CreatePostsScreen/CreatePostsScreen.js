import React, { useReducer, useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";

import createScreenStyles from "./createPostsScreen.styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import PhotoButton from "../../components/PhotoButton/PhotoButton";
import EditorFooter from "../../components/EditorFooter/EditorFooter";

import MinimalisticInputField from "../../components/MinimalisticInputField/MinimalisticInputField";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

import Arrow from "../../images/arrow-left.svg";
import MapPin from "../../images/map-pin.svg";

export default () => {
  const [disabled, setDisabled] = useState(true);
  
  function reducer(state, action) {
    const newState = { ...state, [action.type]: action.payload }
    if (newState.title && newState.location) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    return newState;
  }
  

  const onLocationFocusAction = () => {
    console.log("Location selection action -> opening google maps");
  };

  const [state, dispatch] = useReducer(reducer, {
    photo: require("../../images/photo-mock.jpg"),
    title: "",
    location: "",
  });

  const handleSubmit = () => {
    if (disabled) return;
    console.log(state);
  };

  return (
    <View style={createScreenStyles.wrapper}>
      <MainHeader title={"Створити публікацію"} leftControl={<Arrow />} />
      <ScrollView style={createScreenStyles.main}>
        <View style={createScreenStyles.photoWrapper}>
          <Image style={createScreenStyles.photo} source={state.photo}></Image>
          <PhotoButton
            style={createScreenStyles.photoButton}
            onPress={dispatch}
            name="photo"
          />
        </View>
        <Text style={createScreenStyles.caption}>{"Завантажте фото"}</Text>
        <MinimalisticInputField
          placeholder={"Назва..."}
          style={createScreenStyles.title}
          value={state.title}
          onChange={dispatch}
          name="title"
        />
        <MinimalisticInputField
          placeholder={"Місцевість..."}
          onFocusAction={onLocationFocusAction}
          icon={<MapPin />}
          style={createScreenStyles.location}
          value={state.location}
          onChange={dispatch}
          name="location"
        />
        <OrangeButton
          label={"Опублікувати"}
          style={createScreenStyles.button}
          disabled={disabled}
          onPress={handleSubmit}
        />
      </ScrollView>

      <EditorFooter />
    </View>
  );
};
