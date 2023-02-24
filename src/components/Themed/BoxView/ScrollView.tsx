import { ColorsKey } from "@/constants/Colors";
import React from "react";
import {
  ScrollView as DefaultScrollView,
} from 'native-base';
import { useThemeColor } from "../hooks";
import { ScrollViewProps } from "./type";

const ScrollView: React.FC<ScrollViewProps> = (props) => {
  const { style, lightColor, darkColor, bgColor: _color, ...otherProps } = props;
  // const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, (_color as ColorsKey) || 'background');

  return <DefaultScrollView style={[style]} {...otherProps} />;
}

export default ScrollView;

