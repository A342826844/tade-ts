import { ColorsKey } from "@/constants/Colors";
import React from "react";
import { useThemeGradientColor } from "../hooks";
import { GradientCardProps, variants } from "./type";
import { BoxProps } from "../types";
import { Box } from "../BoxView";

const Card: React.FC<BoxProps> = (props) => {
  return (
    <Box
      bgColor="backgroundCard"
      paddingX={18}
      paddingTop={5}
      paddingBottom={4}
      borderRadius={10}
      {...props}
    />
  );
};

export default Card;
