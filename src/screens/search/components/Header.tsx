import { StyleSheet } from "react-native";
import { Row } from "native-base";
import { Box, Text, View } from "@/components/Themed";
import { Search } from "@/components/Search";
import { Container } from "@/components/Themed/Layout";
import BackHeader from "@/components/BackHeader";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "~/types";

export default function SearchHeader({
  navigation,
  route,
}: RootStackScreenProps<"Search">) {
  const { params } = route;

  const [search, setSearch] = React.useState("");

  return (
    // <View style={styles.container}>
    // {/* <Container > */}
    <BackHeader>
      <Box flex={1} ml={2}>
        <Search
          value={search}
          onChangeText={(_text) => {
            setSearch(_text);
          }}
          onSearchPress={() => {}}
        />
      </Box>
    </BackHeader>
    // {/* </Container> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 77,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
