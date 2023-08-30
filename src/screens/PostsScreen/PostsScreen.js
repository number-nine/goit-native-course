import React from "react";
import { View, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";
import PostCard from "../../components/PostCard/PostCard";
import PostsFooter from "../../components/PostsFooter/PostsFooter";
import ScreenLayout from "../../components/ScreenLayout/ScreenLayout";

import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

import Grid from "../../images/grid.svg";
import User from "../../images/user.svg";
import LogOut from "../../images/log-out.svg";
import Plus from '../../images/plus.svg';

const Tabs = createBottomTabNavigator();


export default function PostsScreen({ navigation }) {
  return (
//     <ScreenLayout>
//       <View style={styles.wrapper}>
//         <MainHeader
//           title={"Публікації"}
//           rightControl={{
//             icon: <LogOut width={24} height={24} />,
//             navigator: () => navigation.navigate("Login"),
//           }}
//         />
//         <ScrollView style={styles.main}>
//           <ProfileBadge
//             style={{ marginTop: 32 }}
//             onPress={() => navigation.navigate("Profile")}
//           />
//           <View style={styles.postsContainer}>
//             <PostCard
//               navigator={() => {
//                 navigation.navigate("Comments");
//               }}
//             />
//             <PostCard
//               navigator={() => {
//                 navigation.navigate("Comments");
//               }}
//             />
//           </View>
//         </ScrollView>

//         <PostsFooter
//           leftControl={{
//             icon: <Grid />,
//             navigator: () => console.log("Changing view to grid"),
//           }}
//           centralControl={{
//             icon: <Plus width={14} height={14} fill={"#ffffff"} />,
//             navigator: () => navigation.navigate("Create"),
//           }}
//           rightControl={{
//             icon: <User stroke="#212121" />,
//             navigator: () => navigation.navigate("Profile"),
//           }}
//         />
//       </View>

//  </ScreenLayout>

      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Create") {
              iconName = focused ? "ios-list" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Profile" component={ProfileScreen} />
        <Tabs.Screen name="Create" component={CreatePostsScreen} />
      </Tabs.Navigator>
   
  );
}
