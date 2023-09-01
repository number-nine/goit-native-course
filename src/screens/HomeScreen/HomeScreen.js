import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";


import styles from "./styles";


import OrangeButton from "../../components/OrangeButton/OrangeButton";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import CommentsScreen from "../CommentsScreen/CommentsScreen";

import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

import Grid from "../../images/grid.svg";
import User from "../../images/user.svg";
import LogOut from "../../images/log-out.svg";
import Plus from "../../images/plus.svg";
import PostsScreen from "../PostsScreen/PostsScreen";

const Tabs = createBottomTabNavigator();
const PostsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function PostsStackScreen({ navigation }) {
  return (
    <PostsStack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 17, fontWeight: 500 },
        headerStyle: {
          height: 88,
          borderBottomColor: "rgba(33, 33, 33, 0.3)",
          borderBottomWidth: 1,
        },
      }}
    >
      <PostsStack.Screen
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
          headerLeft: null,
        }}
      />
      <PostsStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
        }}
      />
    </PostsStack.Navigator>
  );
}

function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 17, fontWeight: 500 },
        headerStyle: {
          height: 88,
          borderBottomColor: "rgba(33, 33, 33, 0.3)",
          borderBottomWidth: 1,
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Коментарі" }}
      />
    </ProfileStack.Navigator>
  );
}

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
            case "PostsStackScreen":
              icon = <Grid stroke={focused ? "#ffffff" : "#212121"} />;
              break;
            case "Create":
              icon = <Plus fill={focused ? "#ffffff" : "rgba(33,33,33,0.8)"} />;
              break;
            case "ProfileStackScreen":
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
        name="PostsStackScreen"
        component={PostsStackScreen}
        options={{
          headerShown: false,
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
        name="ProfileStackScreen"
        component={ProfileStackScreen}
        options={{
          header: ({ options, navigation }) => (
            <ProfileHeader title={options.title} navigation={navigation} />
          ),
          title: "Natali Romanova",
        }}
      />
    </Tabs.Navigator>
  );
}
