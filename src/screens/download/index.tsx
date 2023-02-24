import { StyleSheet } from "react-native";
import { View, ScrollView, Text, Box, Heading } from "@/components/Themed";
import { RootStackScreenProps } from "~/types";
import React from "react";
import Layout from "@/constants/Layout";
import { Image } from 'native-base';

const mine = require('@/assets/images/mine.png');

export default function Download({ navigation }: RootStackScreenProps<"Download">) {
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});