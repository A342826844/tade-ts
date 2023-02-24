import { ColorsKey } from "@/constants/Colors";
import React from "react";
import {
  Heading as DefaultHeading,
} from 'native-base';
import { useThemeColor } from "../hooks";
import { TextProps } from "./type";

const Heading: React.FC<TextProps> = (props) => {
  const { style, lightColor, darkColor, color: _color, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, (_color as ColorsKey) || 'heading');

  return <DefaultHeading fontSize={17} style={[{ color }, style]} {...otherProps} />;
}

export default Heading;

