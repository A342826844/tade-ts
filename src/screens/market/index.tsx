import { StyleSheet } from "react-native";
import { View, ScrollView } from "@/components/Themed";
import { Box, Pressable } from "native-base";
import { RootTabScreenProps } from "~/types";
import React from "react";
import Header from '@/components/Header';
import SymbolChange from "./components/SymbolChange";
import { wsClient, startMarkPrice, closeMarkPrice } from "@/api/balance";
import { useNavigation } from "@react-navigation/native";
import { markets } from "@/constants/Symbol";
import { useFetchUSD, useMarketList, useSubscribeMarkPrice } from "@/state/symbol/hooks";

export default function Home({ navigation }: RootTabScreenProps<"Market">) {

  useFetchUSD();

  const { navigate } = useNavigation();

  useSubscribeMarkPrice()

  const symbolList = useMarketList()
  const [search, setSearch] = React.useState("");

  const renderList = React.useMemo(() => {
    return symbolList.filter(item => {
      return item.symbol.toLowerCase().includes(search.toLowerCase());
    })
  }, [search, symbolList])
  
  return (
    <View style={styles.container}>
      <Header search={{
        value: search,
        onChangeText: (_text) => {
          setSearch(_text);
        }
      }} />
      <ScrollView style={styles.container}>
        <Box mt="2">
          {
            renderList.map(item => {
              return <Pressable key={item.symbol} onPress={() => {
                navigate('Kline', { symbol: item.symbol })
              }}>
                <SymbolChange  info={item} />
              </Pressable>
            })
          }
        </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
