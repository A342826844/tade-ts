import { ColorsKey } from "@/constants/Colors";
import React from "react";
import {
  Text as DefaultText,
} from 'native-base';
import { useThemeColor } from "../hooks";
import { TextProps } from "./type";

const Text: React.FC<TextProps> = (props) => {
  const { style, lightColor, darkColor, color: _color, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, (_color as ColorsKey) || 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export default Text;

