import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../api/firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import RegistrationScreen from "../../screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";

import CreatePostsScreen from "../../screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "../../screens/CommentsScreen/CommentsScreen";

import HomeStack from "../HomeStack/HomeStack";

import screenOptions from "../screenOptions";
import MapScreen from "../../screens/MapScreen/MapScreen";
import { logout, login } from "../../store/authSlice";
import { useNavigation } from "@react-navigation/native";

const MainStack = createStackNavigator();

export default function Main() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, handleAuthStateChanged);
    return subscriber;
  }, []);

  function handleAuthStateChanged(user) {
    if (!user) {
      dispatch(logout());
      return;
    }
    //  console.log(user);
    dispatch(
      login({
        login: user.email,
        displayName: user.displayName,
        uid: user.uid,
        avatarUri: user.photoURL,
      })
    );
  }

  return (
    <MainStack.Navigator
      // initialRouteName="Login"
      screenOptions={{ ...screenOptions.textHeaderStyle, headerShown: false }}
    >
      {!isLoggedIn ? (
        <MainStack.Group>
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
        </MainStack.Group>
      ) : (
        <MainStack.Group>
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
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: true,
              title: "Мапа",
            }}
          />
        </MainStack.Group>
      )}
    </MainStack.Navigator>
  );
}
