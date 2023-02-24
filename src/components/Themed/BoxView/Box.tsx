import { ColorsKey } from "@/constants/Colors";
import React from "react";
import { Box as DefaultBox } from "native-base";
import { useThemeColor } from "../hooks";
import { BoxProps } from "./type";

const Box: React.FC<BoxProps> = (props) => {
  const {
    style,
    lightColor,
    darkColor,
    bgColor: _color,
    borderColor: _borderColor,
    ...otherProps
  } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    _color as ColorsKey
  );

  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    (_borderColor as ColorsKey) || "border"
  );

  return (
    <DefaultBox
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};

export default Box;
