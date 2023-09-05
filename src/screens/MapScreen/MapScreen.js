
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import MapView, { Marker } from "react-native-maps";

import styles from "./styles";


import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

const REGION_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function MapScreen() { 

    const {
      params: { title, location, spot },
    } = useRoute();

  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <MapView
          style={styles.mapStyle}
          region={{
            ...spot,
            ...REGION_DELTA,
          }}
          mapType="standard"
          minZoomLevel={15}
        >
          <Marker
            title={title}
            coordinate={{ ...spot }}
            description={location}
          />
        </MapView>
      </View>
    </ScreenLayout>
  );
}
