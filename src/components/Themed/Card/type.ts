import { IBoxProps, IScrollViewProps } from "native-base";
import { ThemeProps } from "../types";

export const variants = {
  primary: "primary",
  0: "linearGradient0",
  1: "linearGradient1",
  2: "linearGradient2",
} as const;

export type Variant = keyof typeof variants;

export type GradientCardProps = ThemeProps &
  IBoxProps & {
    variant?: Variant;
  };
