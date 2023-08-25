import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {registerRootComponent} from 'expo';

import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";

 function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default registerRootComponent(App)
