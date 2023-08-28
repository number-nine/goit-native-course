import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import {registerRootComponent} from 'expo';

import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./screens/CommentsScreen/CommentsScreen";

 function App() {
   return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.container}>
         <CommentsScreen />

         <StatusBar style="auto" />
       </View>
     </TouchableWithoutFeedback>
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
