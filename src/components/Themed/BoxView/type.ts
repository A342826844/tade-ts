import { ColorsKey } from "@/constants/Colors";
import { IBoxProps, IScrollViewProps } from "native-base";
import { ThemeProps } from "../types";
import {
  View as DefaultView,
} from 'react-native';

export type BoxProps = ThemeProps & IBoxProps;

export type ViewProps = ThemeProps & DefaultView["props"] & {
  bgColor?: ColorsKey | string;
};
export type ScrollViewProps = ThemeProps & IScrollViewProps & {
  bgColor?: ColorsKey | string;
};