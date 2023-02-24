import { ColorsKey } from "@/constants/Colors";
import { ITextProps } from "native-base";
import { ThemeProps } from "../types";

export type TextProps = ThemeProps & ITextProps & {
  color?: ColorsKey | string;
};