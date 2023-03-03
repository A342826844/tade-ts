import { StyleSheet, RefreshControl, Pressable, Linking } from "react-native";
import { View, ScrollView, Button } from "@/components/Themed";
import { Box, Spinner } from "native-base";
import { Image } from "native-base";
import { RootTabScreenProps } from "~/types";
import React from "react";
import Header from "@/components/Header";
import PostCard from "./components/PostCard";
import { getContentList } from "@/api/request";
import Empty from "@/components/Empty";
import { useNavigation } from "@react-navigation/native";
import useDebounce from "@/hooks/useDebounce";
import Fab from "./components/Fab";
import Layout from "@/constants/Layout";
import BaseUrl from "@/constants/BaseUrl";
import VideoCard from "./components/VideoCard";
import { random } from "lodash";
import PostCardAd from "./components/PostCardAd";

const pageSize = 20;

type IndexValue = 1 | 2;
interface IndexDetail {
  index: number;
  type: IndexValue;
  active: IndexValue;
}

const tempIndxDetailMap: {
  [key: string]: IndexDetail;
} = {};

const tempIndexList: number[] = (() => {
  const arr = [];
  let lastIndex = 0;
  let type = 2;
  let active1 = 1;
  let active2 = 4;
  while (lastIndex < 200) {
    const step = random(3, 5);
    lastIndex += step;

    type = type === 2 ? 1 : 2;
    let active = 0;
    if (type === 1) {
      active1 = active1 === 2 ? 1 : 2;
      active = active1;
    } else {
      active2 += 1;
      active = (active2 % 4) + 1;
    }

    arr.push(lastIndex);
    tempIndxDetailMap[lastIndex] = {
      index: lastIndex,
      type: type as IndexValue,
      active: active as IndexValue,
    };
  }
  return arr;
})();


export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const [page, setPage] = React.useState(1);
  const [contentList, setContentList] = React.useState<any[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [loadEnd, setLoadEnd] = React.useState(false);

  const [showBox, setShowBox] = React.useState(false);
  const [timer, setTimer] = React.useState<any>(null);

  const [search, setSearch] = React.useState("");
  const debounceSearch = useDebounce(search, 500);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    setQuery(debounceSearch);
    setPage(1);
    setContentList([]);
  }, [debounceSearch]);

  // const showBoxHandle = React.useCallback(() => {
  //   if (showBox || timer) return;
  //   setTimer(
  //     setTimeout(() => {
  //       setShowBox(true);
  //     }, 6000)
  //   );
  // }, [showBox, timer]);

  // React.useEffect(() => {
  //   showBoxHandle();
  // }, [loading, showBoxHandle]);

  const fetchHandle = React.useCallback(async () => {
    setLoading(true);
    const res = await getContentList({
      page,
      q: query,
      pageSize,
    });
    if (page === 1) {
      setContentList(res);
    } else {
      setContentList((p) => {
        return p.concat(res);
      });
    }

    if (res.length < pageSize) {
      setLoadEnd(true);
    }
    setLoading(false);
    setRefreshing(false);
  }, [query, page]);

  React.useEffect(() => {
    fetchHandle();
  }, [fetchHandle]);

  const [fristShow, setFristShow] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const [offsetY, setOffsetY] = React.useState(0);
  const [oriageScrollHeight, setOriageScrollHeight] = React.useState(0);

  const onContentViewScroll = React.useCallback(
    (e: any) => {
      setOffsetY(e.nativeEvent.contentOffset.y);
      setOriageScrollHeight(e.nativeEvent.layoutMeasurement.height);
      if (loadEnd) return;
      if (refreshing) return;
      if (loading) return;
      var offsetY = e.nativeEvent.contentOffset.y; // 已经滚动的距离
      var _oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; // 可滚动的可见区域高度
      if (offsetY >= _oriageScrollHeight * 2 && !fristShow) {
        setShow(true);
        setFristShow(true);
        setShowBox(true);
      }
      var contentSizeHeight = Math.round(e.nativeEvent.contentSize.height); // 可滚动的总高度
      if (Math.round(offsetY + _oriageScrollHeight) >= contentSizeHeight - 50) {
        setShow(true);
        setPage((p) => p + 1);
      }
    },
    [loadEnd, loading, refreshing, setPage, fristShow]
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    if (page === 1) {
      fetchHandle();
    } else {
      setPage(1);
    }
  }, [page, fetchHandle]);

  const [showAdIndexList, setShowAdIndexList] =
    React.useState<number[]>(tempIndexList);

  return (
    <View style={styles.container}>
      <Fab show={show} setShow={setShow} showBox={showBox} />
      {/* <Fab renderInPortal={false} shadow={2} placement="top-right"  size="4" icon={
        <Text>点击赚钱</Text>
      } /> */}
      <Header
        search={{
          placeholder: "Buscar publicaciones",
          value: search,
          onChangeText: (_text) => {
            setSearch(_text);
          },
        }}
      />
      <ScrollView
        style={styles.container}
        scrollEventThrottle={200}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={onContentViewScroll}
      >
        <Box mt="2">
          {contentList.map((item, index) => {
            return (
              <Box key={item.id}>
                <PostCard info={item} />
                {showAdIndexList.includes(index) && (
                  <>
                    {tempIndxDetailMap?.[index]?.type === 1 && (
                      <VideoCard
                        oriageScrollHeight={oriageScrollHeight}
                        offsetY={offsetY}
                        type={tempIndxDetailMap?.[index]?.active}
                      />
                    )}
                    {tempIndxDetailMap?.[index]?.type === 2 && (
                      <PostCardAd type={tempIndxDetailMap?.[index]?.type} />
                    )}
                  </>
                )}
              </Box>
            );
          })}
          {loading && <Spinner />}
          {!loading && contentList.length === 0 && <Empty />}
        </Box>
      </ScrollView>
      {/* {fristShow && (
        <Box position="absolute" bottom={0} left="8px" zIndex={999}>
          <Pressable
            onPress={() => {
              Linking.openURL(BaseUrl.downloadAndroid);
            }}
          >
            <Image
              source={banner}
              alt="banner"
              width={Layout.window.width - 16}
              height={(Layout.window.width - 16) / 3.5}
            />
          </Pressable>
        </Box>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
