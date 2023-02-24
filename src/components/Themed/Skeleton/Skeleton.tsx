import { ColorsKey } from "@/constants/Colors";
import React from "react";
import {
  Skeleton as DefaultSkeleton,
  ISkeletonProps,
} from 'native-base';
import { useThemeColor } from "../hooks";

const Skeleton: React.FC<ISkeletonProps> = (props) => {
  const { startColor, endColor, ...otherProps } = props;
  const _startColor = useThemeColor({}, (startColor as ColorsKey));
  const _endColor = useThemeColor({}, (endColor as ColorsKey));

  return <DefaultSkeleton startColor={_startColor} endColor={_endColor} {...otherProps} />;
}

export default Skeleton;

