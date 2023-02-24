import React from "react";
import { StyleSheet } from "react-native";
import { Center, Row } from "native-base";
import { Box, Button, Heading, Text, View } from "@/components/Themed";
import { Search } from "@/components/Search";
import { Container } from "@/components/Themed/Layout";
import BackHeader from "@/components/BackHeader";
import Icon from "@/components/Icon";

import Empty from "@/components/Empty";

interface SearchHistoryProps {
  onClear?: () => void;
  showEmpty?: boolean;
}

export default function SearchHistory({
  onClear,
  showEmpty,
}: SearchHistoryProps) {
  
  const [showDel, setShowDel] = React.useState(false);

 
  return (
    <Box>
      <Row alignItems="center" justifyContent="space-between">
        <Heading>历史搜索</Heading>
        {showDel ? (
          <Row>
            <Button
              onPress={() => {}}
              title="全部删除"
              color="redColor"
              variant="text"
            />
            <Text color="subText" mx={2}>
              |
            </Text>
            <Button
              onPress={() => setShowDel(!showDel)}
              title="完成"
              color="subText"
              variant="text"
            />
          </Row>
        ) : (
          <Button
            onPress={() => setShowDel(!showDel)}
            title=""
            variant="custom"
          >
            <Icon name="delete" size={12} family="AntDesign" />
          </Button>
        )}
      </Row>
      <Row  flexWrap="wrap">
        {/* {historyList?.map((item) => {
          return (
            <Box key={item.searchId} marginTop={2} marginRight={2}>
              <Button
                rightElement={
                  showDel ? (
                    <Box ml={2}>
                      <Icon name="closecircleo" size={12} family="AntDesign" />
                    </Box>
                  ) : null
                }
                style={{ paddingHorizontal: 8, paddingVertical: 2 }}
                title={item.text}
                variant="subtle"
                onPress={() => clickHandle(item)}
              />
            </Box>
          );
        })} */}
        {/* {
          !historyList?.length && showEmpty && <Center width='100%'>
            <Empty />
          </Center>
        } */}
      </Row>
    </Box>
  );
}
