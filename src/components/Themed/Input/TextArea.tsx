import React from "react";
import { TextArea as BaseInput } from 'native-base';
import { useThemeColor } from "../hooks";
import { TextAreaProps } from "./type";

const TextArea: React.FC<TextAreaProps> = (props) => {
  const inputBackground = useThemeColor({}, 'inputBackground');
  const placeholderTextColor = useThemeColor({}, 'placeholderTextColor');

  return <BaseInput autoCompleteType='off' height={45} borderRadius={5} borderWidth={0} placeholderTextColor={placeholderTextColor} backgroundColor={inputBackground} {...props} />
}

export default TextArea;
