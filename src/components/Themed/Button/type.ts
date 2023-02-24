import React from "react";
import { View as DefaultView, Button as DefaultButton } from "react-native";
import { TextProps } from "../Text/type";

import { ThemeProps } from "../types";

export const variants = {
  PRIMARY: "primary",
  TEXT: "text",
  CUSTOM: "custom",
  SUBTLE: "subtle",
  OUTLINE: "outline",
} as const;

export type Variant = typeof variants[keyof typeof variants];

export type ButtonProps = ThemeProps &
  DefaultButton["props"] &
  DefaultView["props"] & {
    variant?: Variant;
    height?: string | number;
    width?: string | number;
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
    textProps?: TextProps
  };
