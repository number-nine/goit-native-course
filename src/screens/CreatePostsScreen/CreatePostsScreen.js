import React from "react";
import { View, ScrollView, Image, Text } from "react-native";

import createScreenStyles from "./createPostsScreen.styles";

import MainHeader from "../../components/MainHeader/MainHeader";
import PhotoButton from "../../components/PhotoButton/PhotoButton";
import PostsFooter from "../../components/PostsFooter/PostsFooter";
import Title from "../../components/Title/Title";
import InputField from "../../components/InputField/InputField";
import OrangeButton from "../../components/OrangeButton/OrangeButton";

import Grid from "../../images/grid.svg";
import User from "../../images/user.svg";
import Arrow from "../../images/arrow-left.svg";
import MapPin from "../../images/map-pin.svg";

export default () => {
  return (
    <View style={createScreenStyles.wrapper}>
      <MainHeader title={"Створити публікацію"} leftControl={<Arrow />} />
      <ScrollView style={createScreenStyles.main}>
        <View style={createScreenStyles.photoWrapper}>
          <Image style={createScreenStyles.photo}></Image>
          <PhotoButton style={createScreenStyles.photoButton} />
        </View>
        <Title style={createScreenStyles.title}>{"Завантажте фото"}</Title>
        <InputField
          placeholder="Назва..."
          style={createScreenStyles.inputTitle}
        />
        <OrangeButton
          label={
            <View style={createScreenStyles.locationLabel}>
              <MapPin />
              <Text>Місцевість...</Text>
            </View>
          }
          style={createScreenStyles.inputLocation}
        />
        {/* <View style={createScreenStyles.details}>
          <View style={createScreenStyles.detailsItem}></View>
          <View style={createScreenStyles.detailsItem}>
            <MapPin />
            <Text style={createScreenStyles.detailsCaption}>
              {"Ivano-Frankivs'k Region, Ukraine"}
            </Text>
          </View>
        </View> */}
      </ScrollView>

      <PostsFooter leftControl={<Grid />} rightControl={<User />} />
    </View>
  );
};
