import { ColorsKey } from "@/constants/Colors";
import React from "react";
import {
  View as DefaultView,
} from 'native-base';
import { useThemeColor } from "../hooks";
import { ViewProps } from "./type";

const View: React.FC<ViewProps> = (props) => {
  const { style, lightColor, darkColor, bgColor: _color, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, (_color as ColorsKey) || 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export default View;

