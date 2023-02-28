import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import { View, ScrollView, Text, Box, Heading } from "@/components/Themed";
import { RootStackScreenProps } from "~/types";
import React from "react";
import Layout from "@/constants/Layout";
import Breakpoints from "@/constants/Breakpoints";
import symbolInfo from '@/constants/symbol.json';
import { Container } from "@/components/Themed/Layout";


export default function Kline({ navigation, route }: RootStackScreenProps<"Kline">) {

  const { params } = route;

  const { name, intro } = React.useMemo(() => {
    return (symbolInfo as any)[params.symbol]
  }, [params.symbol])

  return (
    <ScrollView style={styles.container}>
      <Box height={500}>
        <WebView
          style={{
            borderWidth: 0,
          }}
          contentWidth={Layout.window.width - Breakpoints.LayoutPaddingX * 2}
          source={{
            uri: `https://s.tradingview.com/widgetembed/?theme=light&symbol=${params.symbol}&style={border: none}`,
          }}
        />
      </Box>
      <Container marginBottom={3} paddingTop={2}>
        <Heading>Acerca de {name} ({params.symbol})</Heading>
        <Box marginTop={2}>
          {
            intro.map((item: string, index: number) => {
              return <Text marginTop={2} key={index}>{item}</Text>
            })
          }
        </Box>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// 促销活动
// 引入生态板块
// 社交已经上线
// 商城和一元夺宝已完成 在对接
// 钱包正在开发
// 所有功能完成后会对所有UI进行换肤

// 你们有没有IT?
// 在接下来很长的一段时间后 拿IT