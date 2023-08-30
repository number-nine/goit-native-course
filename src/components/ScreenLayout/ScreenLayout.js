import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";


import styles from './styles';

export default function ScreenLayout({ children }) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {children}
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    );
}
