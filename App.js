import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import PostsScreen from "./src/screens/PostsScreen/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <PostsScreen />

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
