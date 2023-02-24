import React from "react";
import { setStringAsync } from 'expo-clipboard';
import { Button } from "../Themed";
import Icon from "./Icon";
import { useToast, Toast } from "native-base";

type CopyIconProps = {
  text: string;
  onCopy?: () => void;
}

export const  copy = async (text: string) => {
  await setStringAsync(text);
  Toast.show({ title: '复制成功' });
}

const CopyIcon: React.FC<CopyIconProps> = ({ text, onCopy }) => {
  return (
    <Button onPress={async () => {
      await setStringAsync(text);
      Toast.show({ title: '复制成功' });
      onCopy && onCopy();
    }} title="" variant="custom">
      <Icon name="copy" family="Octicons" color="subText" />
    </Button>
  )
}



export default CopyIcon;
