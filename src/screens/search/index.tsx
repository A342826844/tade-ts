import { StyleSheet, Image } from "react-native";
import { Text, View, ScrollView, Heading } from "@/components/Themed";
import { Box, Center, Row } from "native-base";
import { RootStackScreenProps, SearchType } from "~/types";
import React from "react";
import { Search } from "@/components/Search";
import { Container } from "@/components/Themed/Layout";
import SearchHistory from "./components/SearchHistory";
import SearchResult from "./components/SearchResult";

import Breakpoints from "@/constants/Breakpoints";
// import {  } from '@/components/'

export default function SearchScreens({
  navigation,
  route,
}: RootStackScreenProps<"Search">) {


  const isMarket = route.params.type === SearchType.MARKET;

  return (
    <View style={[styles.container]}>
      <ScrollView style={[styles.container, styles.content]}>

        {/* </Container> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Breakpoints.LayoutPaddingX
  },
});
