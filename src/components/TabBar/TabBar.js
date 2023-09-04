import React from "react";
import { View } from "react-native";

import styles from "./styles";

import OrangeButton from "../OrangeButton/OrangeButton";

import Grid from "../../images/grid.svg";
import Plus from "../../images/plus.svg";
import User from "../../images/user.svg";

const TABS = [
  {
    route: "Posts",
    icon: <Grid stroke={"#ffffff"} />,
  },
  {
    route: "Create",
    icon: <Plus fill={"#ffffff"} />,
  },
  {
    route: "Profile",
    icon: <User stroke={"#ffffff"} />,
  },
];

const ColorizedIconSVG = (svg, active) => {
  const ICON_COLOR = {
    active: "#ffffff",
    inactive: "rgba(33,33,33,0.8)",
  };

  const { stroke, fill } = svg.props;
  const currentColor = active ? ICON_COLOR.active : ICON_COLOR.inactive;

  if (stroke)
    return React.cloneElement(svg, {
      stroke: currentColor,
    });
  else if (fill)
    return React.cloneElement(svg, {
      fill: currentColor,
    });
};

const getTabColor = (isFocused) => {
  return isFocused ? "#FF6C00" : "#ffffff";
};

export default function TabBar({ navigation, state: { routeNames, index } }) {
  return (
    <View style={styles.tabBarWrapper}>
      {TABS.map((tab) => {
        const { icon, route } = tab;
        const isFocused = routeNames[index] === route;
        return (
          <OrangeButton
            key={route}
            label={ColorizedIconSVG(icon, isFocused)}
            onPress={() => navigation.navigate(route)}
            style={[
              styles.footerButton,
              {
                backgroundColor: getTabColor(isFocused),
                borderColor: getTabColor(isFocused),
              },
            ]}
          />
        );
      })}
    </View>
  );
}
