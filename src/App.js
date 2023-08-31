import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";

import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const MainStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          // options={{ headerShown: false }}
        />
        {/* <MainStack.Screen name="Profile" component={ProfileScreen} />
        <MainStack.Screen name="Create" component={CreatePostsScreen} /> */}
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ headerShown: false }}
        />
        {/* <MainStack.Screen name="Comments" component={CommentsScreen} />
        <MainStack.Screen name="Posts" component={PostsScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
