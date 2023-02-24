import { ColorsKey } from "@/constants/Colors";
import React from "react";
import { Spinner as DefaultSpinner, ISpinnerProps } from "native-base";
import { useThemeColor } from "../hooks";

const Spinner: React.FC<ISpinnerProps> = (props) => {
  const { color, ...otherProps } = props;
  const _color = useThemeColor({}, color as ColorsKey);

  return <DefaultSpinner color={_color} {...otherProps} />;
};

export default Spinner;
