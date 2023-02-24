import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useThemeColor, useThemeGradientColor } from "../hooks";
import { ButtonProps, variants } from "./type";
import { Text } from "../Text";
import Box from "../BoxView/Box";
import GradientCard from "../Card/GradientCard";
import { ColorsKey } from "@/constants/Colors";

const Button: React.FC<ButtonProps> = ({
  variant = variants.PRIMARY,
  color,
  width = "100%",
  height = 45,
  rightElement,
  leftElement,
  textProps,
  ...props
}) => {
  const { lightColor, darkColor, disabled, style, ...otherProps } = props;
  const buttonTextColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    (color as ColorsKey) || "buttonTextColor"
  );

  const subtleBtnBg = useThemeColor(
    { light: lightColor, dark: darkColor },
    "subtleBtnBg"
  );

  const subtleBtnColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "subtleBtnColor"
  );

  const outline = useThemeColor(
    { light: lightColor, dark: darkColor },
    "outline"
  );

  if (variant === variants.PRIMARY) {
    return (
      <TouchableOpacity
        hitSlop={{ left: 5, right: 5, top: 5, bottom: 5 }}
        activeOpacity={0.8}
        disabled={disabled}
        style={[{ width, height }, style]}
        {...otherProps}
      >
        <GradientCard
          variant="primary"
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          {leftElement}
          <Text style={[{ fontWeight: "bold" }]} allowFontScaling={false} {...textProps}>
            {otherProps.title}
          </Text>
          {rightElement}
        </GradientCard>
      </TouchableOpacity>
    );
  }

  if (variant === variants.TEXT) {
    return (
      <TouchableOpacity
        hitSlop={{ left: 5, right: 5, top: 5, bottom: 5 }}
        activeOpacity={0.6}
        disabled={disabled}
        style={{
          flexDirection: "row",
        }}
        {...otherProps}
      >
        {leftElement}
        <Text style={[{ color: buttonTextColor }]} allowFontScaling={false} {...textProps}>
          {otherProps.title}
        </Text>
        {rightElement}
      </TouchableOpacity>
    );
  }

  if (variant === variants.SUBTLE) {
    return (
      <TouchableOpacity
        hitSlop={{ left: 5, right: 5, top: 5, bottom: 5 }}
        activeOpacity={0.6}
        disabled={disabled}
        {...otherProps}
        style={[styles.subtle, { backgroundColor: subtleBtnBg }, style]}
      >
        {leftElement}
        <Text color={subtleBtnColor} allowFontScaling={false}>{otherProps.title}</Text>
        {rightElement}
      </TouchableOpacity>
    );
  }

  if (variant === variants.OUTLINE) {
    return (
      <TouchableOpacity
        hitSlop={{ left: 5, right: 5, top: 5, bottom: 5 }}
        activeOpacity={0.6}
        disabled={disabled}
        {...otherProps}
        style={[styles.outline, { borderColor: outline }, style]}
      >
        {leftElement}
        {!otherProps.title ? null : (
          <Text color={outline} allowFontScaling={false} style={[styles.outlineText, textProps?.style]} { ...textProps}>
            {otherProps.title}
          </Text>
        )}
        {otherProps?.children}
        {rightElement}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      hitSlop={{ left: 5, right: 5, top: 5, bottom: 5 }}
      activeOpacity={0.6}
      disabled={disabled}
      {...otherProps}
    >
      {otherProps.children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  subtle: {
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
  },
  outline: {
    borderRadius: 5,
    padding: 2,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  outlineText: {
    fontWeight: 'bold'
  },
});
