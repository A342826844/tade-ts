import { StyleSheet, Linking } from "react-native";
import { Center } from 'native-base'
import { View, ScrollView, Text, Box, Heading, Button } from "@/components/Themed";
import { RootTabScreenProps } from "~/types";
import React from "react";
import Layout from "@/constants/Layout";
import { Image } from 'native-base';
import BaseUrl from "@/constants/BaseUrl";

const mine = require('@/assets/images/mine.png');
const android = require('@/assets/images/android.png');

export default function MineScreen({ navigation }: RootTabScreenProps<'Mine'>) {
  return (
    <ScrollView style={styles.container}>
      <Image
        alt="mine"
          style={{
            width: Layout.window.width,
            height: Layout.window.width / 1500 * 3248,
          }}
          source={mine}
        />
        <Center style={styles.center}>
          <Button onPress={() => {
            Linking.openURL(BaseUrl.downloadAndroid)
          } } color='reverseText' title="Android" variant="outline" style={styles.btn} leftElement={
            <Image alt='android' style={{ width: 24, height: 27, marginRight: 5 }} source={android} />
          }>
          </Button>
        </Center>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  center: {
    position: 'absolute',
    bottom: '20%',
    width: '100%'
  },
  btn: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 24,
    width: 194,
    height: 48,
  }
});