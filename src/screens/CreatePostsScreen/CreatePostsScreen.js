import React, { useReducer, useState, useEffect } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import styles from "./styles";

import PhotoButton from "../../components/PhotoButton/PhotoButton";
import EditorFooter from "../../components/EditorFooter/EditorFooter";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

import MinimalisticInputField from "../../components/MinimalisticInputField/MinimalisticInputField";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

import MapPin from "../../images/map-pin.svg";

function reducer(state, action) {
  let update;
  switch (action.type) {
    case "reset":
      update = {
        photo: null,
        title: null,
        location: null,
        spot: { longitude: 0, latitude: 0 },
      };
      break;
    default:
      update = { ...state, [action.type]: action.payload };
  }
  return update;
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

  const [state, dispatch] = useReducer(reducer, {
    photo: null,
    title: null,
    location: null,
    spot: {longitude:0, latitude:0}
  });

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = async () => {
    if (!isFilled) return;
    const spot = await getSpot();

    handleReset();
    navigation.navigate("Posts");
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
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
    
  }

const {photo, title, location } = state
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
                      dispatch({ type: "photo", payload: uri });
                      await MediaLibrary.createAssetAsync(uri);
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
            onChangeDispatch={dispatch}
            name="title"
          />
          <MinimalisticInputField
            placeholder={"Місцевість..."}
            icon={<MapPin />}
            style={styles.location}
            value={state.loaction}
            onChangeDispatch={dispatch}
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
