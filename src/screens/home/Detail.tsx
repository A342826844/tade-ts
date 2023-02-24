import {
    StyleSheet,
    ActivityIndicator,
    StyleProp,
    ViewStyle,
  } from "react-native";
  import { Text, View, ScrollView, Button, Box, Spinner } from "@/components/Themed";
  import { Center, Row, Image, Skeleton, Pressable } from "native-base";
  import React from "react";
import { RootStackScreenProps } from "~/types";
import Layout from "@/constants/Layout";
  import { useNavigation } from "@react-navigation/native";
  import Breakpoints from "@/constants/Breakpoints";
import PostCard from "./components/PostCard";
import { ContentDetail, getContentDetailById } from "@/api/request";
import Empty from "@/components/Empty";
 


export default function Detail({ navigation, route }: RootStackScreenProps<"Detail">) {

    const [content, setContent] = React.useState<ContentDetail|null>(null);
    const [loading, setLoading] = React.useState(true);

    const fetchHandle = React.useCallback(async () => {
        setLoading(true);
        const res = await getContentDetailById(Number(route.params.id));
        if (res) {
            setContent(res);
        }
        setLoading(false);
    }, [])

    React.useEffect(() => {
        fetchHandle();
    }, [fetchHandle])

    return (
        <ScrollView>
            {content && <PostCard info={content} />}
            {loading && <Spinner />}
            {!loading && !content && <Empty />}
        </ScrollView>
    );
};
  
  