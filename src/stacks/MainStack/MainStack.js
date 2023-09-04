import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import RegistrationScreen from "../../screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";

import CreatePostsScreen from "../../screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "../../screens/CommentsScreen/CommentsScreen";

import HomeStack from "../HomeStack/HomeStack";

import screenOptions from "../screenOptions";

const MainStack = createStackNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{ ...screenOptions.textHeaderStyle, headerShown: false }}
    >
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Registration" component={RegistrationScreen} />

      <MainStack.Screen name="HomeStack" component={HomeStack} />

      <MainStack.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          headerShown: true,
          title: "Створити публікацію",
        }}
      />
      <MainStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: true,
          title: "Коментарі",
        }}
      />
    </MainStack.Navigator>
  );
}
