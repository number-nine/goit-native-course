import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import Title from "../Title/Title";

import styles from "./styles";

import MessageCircle from "../../images/message-circle.svg";
import MapPin from "../../images/map-pin.svg";
import Like from "../../images/thumbs-up.svg";

export default function PostCard({ navigator, ...props }) {
  return (
    <View style={styles.wrapper}>
      <TouchableHighlight style={styles.photoWrapper} onPress={navigator}>
        <Image
          source={require("../../images/post-foto.jpg")}
          style={styles.photo}
        />
      </TouchableHighlight>
      <Title style={styles.title}>{"Ліс"}</Title>
      <View style={styles.details}>
        <View style={styles.statistic}>
          <View style={styles.detailsItem}>
            <MessageCircle />
            <Text style={styles.detailsCaption}>{0}</Text>
          </View>
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
