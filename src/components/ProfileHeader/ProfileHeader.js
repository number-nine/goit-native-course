import React from "react";
import {
  View,
  ImageBackground,
  Text,
} from "react-native";

import styles from "./styles";

import AvatarHolder from "../../components/AvatarHolder/AvatarHolder";


import BackgroundSource from "../../images/credentials-bg.jpg";


export default function ProfileHeader({ navigation }) {
    return (
        <ImageBackground
            source={BackgroundSource}
            resizeMode="cover"
            style={styles.back}
        >
            <View style={styles.wrapper}>
                <AvatarHolder style={styles.avatar} />
                <Text style={[styles.author, { fontWeight: 500 }]}>
                    Natali Romanova
                </Text>
            </View>
        </ImageBackground> 
    )
}