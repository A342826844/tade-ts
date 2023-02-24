import React from "react";
import { StyleSheet } from "react-native";
import { Button, Heading, Text, View } from "@/components/Themed";
import { Container } from "@/components/Themed/Layout";
import BackHeader from "@/components/BackHeader";
import { Row } from "native-base";
import Icon from "@/components/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { SearchType } from "~/types";

export default function SearchButton({ type }: { type: SearchType }) {
  const { navigate } = useNavigation();
  return (
    <Button
      title=""
      onPress={() => {
        navigate("Search", { type });
      }}
      variant="custom"
    >
      <Icon name="search" color="text" />
    </Button>
  );
}
