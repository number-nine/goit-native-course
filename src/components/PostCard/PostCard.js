import React from "react";
import { View, Image, Text } from "react-native";

import Title from "../Title/Title";

import styles from "./styles";

import MessageCircle from "../../images/message-circle.svg";
import MapPin from "../../images/map-pin.svg";
import Like from "../../images/thumbs-up.svg";

export default function PostCard(props) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../images/post-foto.jpg")}
        style={styles.photo}
      ></Image>
      <Title style={styles.title}>{"Ліс"}</Title>
      <View style={styles.details}>
        <View style={styles.statistic}>
          <View style={styles.detailsItem}>
            <MessageCircle />
            <Text style={styles.detailsCaption}>{0}</Text>
          </View>
          <View style={styles.detailsItem}>
            <Like fill={"#bdbdbd"} />
            <Text style={styles.detailsCaption}>{100}</Text>
          </View>
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
