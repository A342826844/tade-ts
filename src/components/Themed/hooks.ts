import Colors, { gradientColor } from "@/constants/Colors";
import useColorScheme from "@/hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  if (Colors[theme][colorName]) {
    return Colors[theme][colorName]
  }
  return colorName
}
export function useThemeGradientColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof gradientColor.light & keyof typeof gradientColor.dark
) {
  const theme = useColorScheme();
  return gradientColor[theme][colorName]
}