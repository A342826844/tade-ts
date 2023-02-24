/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from "react";
import { StyleSheet, ImageBackground, Platform, Image } from "react-native";
import { Row, Center } from "native-base";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList, RootTabParamList } from "~/types";
import TabBarIcon, { TabBarIconProps, Type } from "./TabBarIcon";
import { Box } from "../Themed";
import Layout from "@/constants/Layout";
import { useThemeColor } from "../Themed/hooks";

type BlurBoxProps = {
  blur: boolean;
} & TabBarIconProps;

const BlurBox: React.FC<BlurBoxProps> = ({ blur, ...props }) => {

  return (
    <Box style={styles.blur}>
      <TabBarIcon {...props} />
    </Box>
  );
};

interface TabBarBgProps {
  label?: string;
  selected?: boolean;
}

const navs: {
  type: Type;
  path: keyof RootTabParamList;
}[] = [
  {
    type: "home",
    path: "Home",
  },
  {
    type: "market",
    path: "Market",
  },
  {
    type: "mine",
    path: "Mine",
  },
];
const TabBarBg: React.FC<TabBarBgProps> = ({ label, selected }) => {
  const { navigate } = useNavigation();

  return (
    <Center
      width={Layout.window.width}
      bottom={33}
      margin="auto"
      position="absolute"
    >
      <Box
        borderColor="white"
        width='100%'
        height="42"
      >
        <Row width="100%" height="100%">
          {navs.map((item) => {
            return (
              <BlurBox
                key={item.type}
                onPress={() => {
                  navigate(item.path as any);
                }}
                blur={Boolean(label === item.type && selected)}
                name={item.type}
                active={Boolean(label === item.type && selected)}
                title={""}
              />
            );
          })}
        </Row>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  blur: {
    flex: 1,
    height: "100%",
  },
  active: {
    width: 32,
    height: 3.5,
  },
});

export default TabBarBg;
