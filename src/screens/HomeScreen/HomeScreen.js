import React from "react";
import { View, ScrollView, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";

import styles from "./styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";
import PostCard from "../../components/PostCard/PostCard";
import PostsFooter from "../../components/PostsFooter/PostsFooter";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

import Grid from "../../images/grid.svg";
import User from "../../images/user.svg";
import LogOut from "../../images/log-out.svg";
import Plus from "../../images/plus.svg";
import PostsScreen from "../PostsScreen/PostsScreen";

const Tabs = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 17, fontWeight: 500 },
        headerStyle: {
          height: 88,
          borderBottomColor: "rgba(33, 33, 33, 0.3)",
          borderBottomWidth: 1,
        },

        tabBarButton: ({ accessibilityState, ...props }) => {
          let icon;
          const focused = accessibilityState.selected;
          switch (route.name) {
            case "Posts":
              icon = <Grid stroke={focused ? "#ffffff" : "#212121"} />;
              break;
            case "Create":
              icon = <Plus fill={focused ? "#ffffff" : "rgba(33,33,33,0.8)"} />;
              break;
            case "Profile":
              icon = (
                <User stroke={focused ? "#ffffff" : "rgba(33,33,33,0.8)"} />
              );
              break;
          }
          return (
            <OrangeButton
              {...props}
              label={icon}
              style={[
                styles.footerButton,
                {
                  backgroundColor: focused ? "#FF6C00" : "#ffffff",
                  borderColor: focused ? "#FF6C00" : "#ffffff",
                },
              ]}
            />
          );
        },
        // tabBarItemStyle: styles.tabBarItemWrapper,
        tabBarStyle: styles.tabBarWrapper,
      })}
      backBehavior="history"
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <OrangeButton
              label={<LogOut />}
              style={[
                styles.footerButton,
                { backgroundColor: "#ffffff", borderColor: "#ffffff" },
              ]}
              onPress={() => navigation.navigate("Login")}
            />
          ),
          title: "Публікації",
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          headerRight: () => (
            <OrangeButton
              label={<LogOut />}
              style={[
                styles.footerButton,
                { backgroundColor: "#ffffff", borderColor: "#ffffff" },
              ]}
              onPress={() => navigation.navigate("Login")}
            />
          ),
          title: "Створити публікацію",
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <ProfileHeader />,
        

          // headerStyle: { height: 500 },
          // headerShown:false,
        }}
      />
    </Tabs.Navigator>
  );
}
