import React from "react";
import { useDispatch } from "react-redux";
import { useUserAuth } from "../../api/firebase/authApi";
import { logout } from "../../store/authSlice";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles from "./styles";
import screenOptions from "../screenOptions";

import OrangeButton from "../../components/OrangeButton/OrangeButton";
import LogOut from "../../images/log-out.svg";

import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import PostsScreen from "../../screens/PostsScreen/PostsScreen";

import TabBar from "../../components/TabBar/TabBar";

const Tabs = createBottomTabNavigator();

export default function HomeStack({ navigation }) {
  const globalDispatch = useDispatch();
  const { signOutUser } = useUserAuth();
  return (
    <Tabs.Navigator
      tabBar={(props) => TabBar(props)}
      screenOptions={{
        ...screenOptions.textHeaderStyle,
        tabBarShowLabel: false,
      }}
      backBehavior="history"
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <OrangeButton
              label={<LogOut />}
              style={[
                styles.footerButton,
                { backgroundColor: "#ffffff", borderColor: "#ffffff" },
              ]}
              onPress={async () => {
                try {
                  await signOutUser();
                  globalDispatch(logout());
                  navigation.navigate("Login");
                } catch (error) {
                  console.log("Something went wrong ", error.message);
                }
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
