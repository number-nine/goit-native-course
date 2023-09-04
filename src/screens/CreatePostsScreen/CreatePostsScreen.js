import React, { useReducer, useState, useEffect, useRef } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import styles from "./styles";

import PhotoButton from "../../components/PhotoButton/PhotoButton";
import EditorFooter from "../../components/EditorFooter/EditorFooter";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

import MinimalisticInputField from "../../components/MinimalisticInputField/MinimalisticInputField";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

import MapPin from "../../images/map-pin.svg";

export default function CreatePostsScreen({ navigation }) {
  const [disabled, setDisabled] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === "granted");
        console.log("permissions granted");
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // function reducer(state, action) {
  //   let newState;
  //   switch (action.type) {
  //     case "reset":
  //       newState = { photo: "", title: "", location: "" };
  //       break;
  //     default:
  //       newState = { ...state, [action.type]: action.payload };
  //   }
  //   setDisabled(!(newState.title && newState.location));
  //   return newState;
  // }

  const onLocationFocusAction = () => {
    console.log("Location selection action -> opening google maps");
  };

  // const [state, dispatch] = useReducer(reducer, {
  //   photo: "",
  //   title: "",
  //   location: "",
  // });

  const handleSubmit = () => {
    // if (disabled) return;
    // console.log(state);
    handleReset();
    navigation.navigate("HomeStack");
  };

  const handleReset = () => {
    // console.log("Reseting form... ");
    setPhotoUri(null);
    // navigation.navigate("HomeStack");
    // dispatch({ type: "reset" });
  };

  const handleSelectPhoto = () => {
    console.log("Opening file explorer...");
  };

  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <ScrollView style={styles.main}>
          <View style={styles.photoView}>
            {!photoUri && (
              <Camera
                style={styles.photoWrapper}
                type={type}
                ref={setCameraRef}
              >
                <PhotoButton
                  style={styles.photoButton}
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      setPhotoUri(uri);
                      await MediaLibrary.createAssetAsync(uri);
                    }
                  }}
                  name="photo"
                />
              </Camera>
            )}
            {photoUri && (
              <Image style={styles.photoWrapper} source={{ uri: photoUri }} />
            )}
          </View>

          <Text style={styles.caption}>{"Завантажте фото"}</Text>

          <MinimalisticInputField
            placeholder={"Назва..."}
            style={styles.title}
            // value={state.title}
            // onChange={dispatch}
            name="title"
          />
          <MinimalisticInputField
            placeholder={"Місцевість..."}
            onFocusAction={onLocationFocusAction}
            icon={<MapPin />}
            style={styles.location}
            // value={state.location}
            // onChange={dispatch}
            name="location"
          />
          <OrangeButton
            label={"Опублікувати"}
            style={styles.button}
            // disabled={disabled}
            onPress={handleSubmit}
          />
        </ScrollView>

        <EditorFooter onPress={handleReset} />
      </View>
    </ScreenLayout>
  );
}
