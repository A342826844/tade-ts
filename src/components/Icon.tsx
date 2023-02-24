import React from 'react';
import { ColorsKey } from '@/constants/Colors';
import { createIconSetFromIcoMoon, FontAwesome, Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";
import { useThemeColor } from "./Themed/hooks";

const BogIcons = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "BogIcons",
  "icomoon.ttf"
);

const BASE_SIZE = 14;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default function Icon(props: {
  name:
  | React.ComponentProps<typeof FontAwesome>["name"]
  | React.ComponentProps<typeof Ionicons>["name"]
  | React.ComponentProps<typeof Octicons>["name"]
  | React.ComponentProps<typeof BogIcons>["name"]
  | React.ComponentProps<typeof AntDesign>["name"];
  family?: "FontAwesome" | "Ionicons" | "Octicons" | "BogIcons" | "AntDesign";
  color?: string | ColorsKey;
  size?: number;
  style?: StyleProp<TextStyle>;
}) {
  const { family = "FontAwesome", name, color: _color, ...otherProps } = props;
  const color = useThemeColor({}, (_color as ColorsKey) || 'text');

  switch (family) {
    case "FontAwesome":
      return (
        <FontAwesome
          name={name as React.ComponentProps<typeof FontAwesome>["name"]}
          size={BASE_SIZE * 1.25}
          color={color}
          {...otherProps}
        />
      );
    case "Ionicons":
      return (
        <Ionicons
          name={name as React.ComponentProps<typeof Ionicons>["name"]}
          size={BASE_SIZE * 1.25}
          color={color}
          {...otherProps}
        />
      );
    case "Octicons":
      return (
        <Octicons
          name={name as React.ComponentProps<typeof Octicons>["name"]}
          size={BASE_SIZE * 1.25}
          color={color}
          {...otherProps}
        />
      );
    case "BogIcons":
      return (
        <BogIcons
          name={name as React.ComponentProps<typeof BogIcons>["name"]}
          size={BASE_SIZE * 1.25}
          color={color}
          {...otherProps}
        />
      );
    case "AntDesign":
      return (
        <AntDesign
          name={name as React.ComponentProps<typeof AntDesign>["name"]}
          size={BASE_SIZE * 1.25}
          color={color}
          {...otherProps}
        />
      );
    default:
      return (
        <FontAwesome
          name={name as React.ComponentProps<typeof FontAwesome>["name"]}
          size={BASE_SIZE * 1.25}
          color={color}
          {...otherProps}
        />
      );
  }
}

export function Ionicon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}) {
  return <Ionicons size={BASE_SIZE * 1.25} {...props} />;
}

export function Octicon(props: {
  name: React.ComponentProps<typeof Octicons>["name"];
  color: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}) {
  return <Octicons size={BASE_SIZE * 1.25} {...props} />;
}

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof Octicons>["name"];
  color: string;
  size?: number;
}) {
  return <Octicons size={BASE_SIZE * 1.4} style={{ marginBottom: 0 }} {...props} />;
}

export function BogIcon(props: {
  name: React.ComponentProps<typeof BogIcons>["name"];
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}) {
  return <BogIcons size={BASE_SIZE * 1.25} {...props} />;
}
