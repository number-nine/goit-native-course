import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../Title/Title";

import styles from "./styles";

import MessageCircle from "../../images/message-circle.svg";
import MapPin from "../../images/map-pin.svg";
import Like from "../../images/thumbs-up.svg";

export default function PostCard() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
        <Image
          source={require("../../images/post-foto.jpg")}
          style={styles.photo}
        />
      <Title style={styles.title}>{"Ліс"}</Title>
      <View style={styles.details}>
        <View style={styles.statistic}>
          <TouchableOpacity
            style={styles.detailsItem}
            activeOpacity={0.6}
            onPress={() => {navigation.navigate("Comments")
            }}
          >
              <MessageCircle />
              <Text style={styles.detailsCaption}>{0}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.detailsItem}
            activeOpacity={0.6}
            onPress={() => {
              console.log("Like!");
            }}
          >
            <Like fill={"#bdbdbd"} />
            <Text style={styles.detailsCaption}>{100}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsItem}>
          <MapPin />
          <Text style={styles.detailsCaption}>
            {"Ivano-Frankivs'k Region, Ukraine"}
          </Text>
        </View>
      </View>
    </View>
  );
}
