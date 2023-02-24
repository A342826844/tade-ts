import { ColorsKey } from '@/constants/Colors';
import {
  // Text as DefaultText,
  View as DefaultView,
  // ScrollView as DefaultScrollView,
  Button as DefaultButton,
  Image as DefaultImage,
  TouchableOpacity,
  TextInput as DefaultTextInput,
} from 'react-native';

import {
  ITextProps,
  IBoxProps,
  IScrollViewProps

} from 'native-base';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export const variants = {
  PRIMARY: 'primary',
  TEXT: 'text',
} as const;

export type Variant = typeof variants[keyof typeof variants];

export type ImageProps = ThemeProps & DefaultImage['props'];
export type TextProps = ThemeProps & ITextProps & {
  color?: ColorsKey | string;
};
export type BoxProps = ThemeProps & IBoxProps;

export type ViewProps = ThemeProps & DefaultView["props"] & {
  bgColor?: ColorsKey | string;
};
export type ScrollViewProps = ThemeProps & IScrollViewProps & {
  bgColor?: ColorsKey | string;
};
export type ButtonProps = ThemeProps & DefaultButton["props"] & DefaultView["props"] & {
  variant?: Variant;
};
export type TextInputProps = ThemeProps & DefaultTextInput["props"];