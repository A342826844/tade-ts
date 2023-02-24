/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Box, Center, Image } from 'native-base';
import React from 'react';
// import {
//   Image,
// } from 'react-native';
import { Button, ButtonProps } from '../Themed/Button';


export const type = {
  HOME: 'home',
  MARKET: 'market',
  MINE: 'mine',
} as const;
export type Type = typeof type[keyof typeof type];

export type TabBarIconProps = {
  name: Type;
  active: boolean;
} & ButtonProps;


const activeSource = {
  [type.HOME]: require('@/assets/images/tab-bar/home-s.png'),
  [type.MARKET]: require('@/assets/images/tab-bar/market-s.png'),
  [type.MINE]: require('@/assets/images/tab-bar/mine-s.png'),
}

const normalSource = {
  [type.HOME]: require('@/assets/images/tab-bar/home.png'),
  [type.MARKET]: require('@/assets/images/tab-bar/market.png'),
  [type.MINE]: require('@/assets/images/tab-bar/mine.png'),
}


export default function TabBarIcon({ name, active, ...props }: TabBarIconProps) {


  const source = React.useMemo(() => {
    if (active) {
      return activeSource[name]
    }
    return normalSource[name]
  }, [active, name])

  return <Center height='100%' >
      <Image alt={name} style={{ width: 30, height: 30 }} source={source} />
  </Center >
}