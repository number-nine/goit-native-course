import React, { useReducer, useState, useEffect } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useFireStore } from "../../api/firebase/firestoreApi";

import styles from "./styles";

import PhotoButton from "../../components/PhotoButton/PhotoButton";
import EditorFooter from "../../components/EditorFooter/EditorFooter";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

import MinimalisticInputField from "../../components/MinimalisticInputField/MinimalisticInputField";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

import MapPin from "../../images/map-pin.svg";
import { useSelector } from "react-redux";

const INITIAL_STATE = {
  photo: null,
  title: null,
  location: null,
  spot: { longitude: 0, latitude: 0 },
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "update":
      return { ...state, ...payload };
    case "clear":
      return { ...state, ...INITIAL_STATE };
  }
}


export default function CreatePostsScreen({ navigation }) {
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const uid = useSelector(state => state.auth.uid)
  const { addPost } = useFireStore();

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = async () => {
    if (!isFilled) return;
    try {
      const spot = await getSpot();
      dispatch({ type: "update", payload: { spot } });
      await addPost(uid, state);
      handleReset();
      navigation.navigate("Posts");
    } catch (error) {
      console.log("Something went wrong: ", error.message);
    }
    
  };

  const handleReset = () => {
    dispatch({ type: "clear" });
  };

  const getSpot = async () => {
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
    } catch (error) {
      console.log(error.message);
      return {
        latitude: 0,
        longitude: 0,
      };
    }
  };

  const { photo, title, location } = state;
  const isFilled = photo && title && location;

  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <ScrollView style={styles.main}>
          <View style={styles.photoView}>
            {!state.photo && (
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
                      await MediaLibrary.createAssetAsync(uri);
                      dispatch({ type: "update", payload: { photo: uri } });
                    }
                  }}
                  name="photo"
                />
              </Camera>
            )}
            {state.photo && (
              <Image
                style={styles.photoWrapper}
                source={{ uri: state.photo }}
              />
            )}
            <Text style={styles.caption}>{"Завантажте фото"}</Text>
          </View>

          <MinimalisticInputField
            placeholder={"Назва..."}
            style={styles.title}
            value={state.title}
            onChange={dispatch}
            name="title"
          />
          <MinimalisticInputField
            placeholder={"Місцевість..."}
            icon={<MapPin />}
            style={styles.location}
            value={state.location}
            onChange={dispatch}
            name="location"
          />
          <OrangeButton
            label={"Опублікувати"}
            style={styles.button}
            disabled={!isFilled}
            onPress={handleSubmit}
          />
        </ScrollView>

        <EditorFooter onPress={handleReset} />
      </View>
    </ScreenLayout>
  );
}
