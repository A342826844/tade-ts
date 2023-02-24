import { ColorsKey } from "@/constants/Colors";
import React from "react";
import { Box as DefaultBox } from "native-base";
import { useThemeGradientColor } from "../hooks";
import { GradientCardProps, variants } from "./type";

const GradientCard: React.FC<GradientCardProps> = ({
  variant = 0,
  ...props
}) => {
  const key = variants[variant];
  const linearGradient = useThemeGradientColor({}, key);

  return (
    <DefaultBox
      bg={{
        linearGradient,
      }}
      {...props}
    />
  );
};

export default GradientCard;
