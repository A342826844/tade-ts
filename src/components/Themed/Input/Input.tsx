import React from "react";
import { Input as BaseInput } from 'native-base';
import { useThemeColor } from "../hooks";
import { InputProps } from "./type";

const Input: React.FC<InputProps> = (props) => {
  const inputBackground = useThemeColor({}, 'inputBackground');
  const placeholderTextColor = useThemeColor({}, 'placeholderTextColor');

  return <BaseInput height={45} borderRadius={5} borderWidth={0} placeholderTextColor={placeholderTextColor} backgroundColor={inputBackground} {...props} />
}

export default Input;
