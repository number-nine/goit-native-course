import React, { useReducer, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

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
    let newState;
    switch (action.type) {
      case "reset":
        newState = { photo: "", title: "", location: "" };
        break;
      default:
        newState = { ...state, [action.type]: action.payload };
    }
    // console.log(newState);
    setDisabled(!(newState.title && newState.location));
    return newState;
  }

  const onLocationFocusAction = () => {
    console.log("Location selection action -> opening google maps");
  };

  const [state, dispatch] = useReducer(reducer, {
    photo: "",
    title: "",
    location: "",
  });

  const handleSubmit = () => {
    if (disabled) return;
    console.log("Submitting form...");
    console.log(state);
    handleReset();
  };

  const handleReset = () => {
    console.log("Reseting form... ");
    dispatch({ type: "reset" });
  };

  const handleSelectPhoto = () => {
    console.log('Opening file explorer...');
  }

  return (
    <View style={createScreenStyles.wrapper}>
      <MainHeader title={"Створити публікацію"} leftControl={<Arrow />} />
      <ScrollView style={createScreenStyles.main}>
        <View style={createScreenStyles.photoWrapper}>
          {state.photo && (
            <Image style={createScreenStyles.photo} source={state.photo} />
          )}
          <PhotoButton
            style={createScreenStyles.photoButton}
            onPress={handleSelectPhoto}
            name="photo"
          />
        </View>
        <Text style={createScreenStyles.caption}>{"Завантажте фото"}</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
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
        </KeyboardAvoidingView>
      </ScrollView>

      <EditorFooter onPress={handleReset} />
    </View>
  );
};
