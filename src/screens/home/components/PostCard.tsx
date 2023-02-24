import React from "react";
import { Avatar, Row, Image, Column, Pressable } from "native-base";
import { Box, Button, Heading, Text } from "@/components/Themed";
import { Container } from "@/components/Themed/Layout";
import { useNavigation } from "@react-navigation/native";
import { ContentDetail } from "@/api/request";
import Markdown from 'react-native-markdown-renderer';
import dayjs from "dayjs";
import { shortenAddress } from "@/utils/address";

const follow = require('@/assets/images/home/follow.png');
const comment = require('@/assets/images/home/comment.png');
const like = require('@/assets/images/home/like.png');
const share = require('@/assets/images/home/share.png');

interface PostInfo {
  avatar: string;
  nickname: string;
  time: number;
  followed: boolean;
  title: string;
  content: string;
  comment: number;
  liked: number;
}

interface PostCard {
  info: ContentDetail
}


const PostCard: React.FC<PostCard> = ({ info }) => {
  const { navigate } = useNavigation();

  return (
    <Box bgColor='backgroundCard' paddingY={2} mb={2} width="100%">
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <Row >
            <Avatar bg="green.500" source={{
              uri: info.publisher.Avatar
            }}>
              {info.publisher.DisplayName}
            </Avatar>
            <Column marginLeft={2} justifyContent="center">
              <Text>
              {info.publisher.DisplayName}
              </Text>
              {/* <Heading>{info.publisher.DisplayName}</Heading> */}
              {/* <Text color='subText' fontSize={10}>{shortenAddress(info.publisher.Address)}</Text> */}
            </Column>
          </Row>
          {/* <Button title="关注"  variant="subtle" leftElement={
            <Image
              alt="icon"
                style={{
                  width: 8,
                  height: 8,
                  marginRight: 2,
                }}
                source={follow}
              />
          } /> */}
        </Row>
        <Pressable onPress={() => {
          navigate('Detail', { id: `${info.id}` })
        }}>
          <Box>
            <Box paddingTop={3} paddingBottom={1}>
              <Heading >{info.title}</Heading>
              {/* <Text>{info.body}</Text> */}
              {/* @ts-ignore */}
              <Markdown>{info.body}</Markdown>
            </Box>
            <Box>
              <Text  color='subText' fontSize={10} >{dayjs(info.timestamp*1000).format('YYYY-MM-DD HH:mm:ss')}</Text>
            </Box>
          </Box>
        </Pressable>
        {/* <Row>
          <Row flex={1} alignItems='center'>
            <Image
              alt="icon"
              style={{
                width: 15,
                height: 15,
                marginRight: 4
              }}
              source={comment}
            />
            <Text>{info.comment}</Text>
          </Row>
          <Row flex={1} alignItems='center'>
            <Image
              alt="icon"
              style={{
                width: 15,
                height: 15,
                marginRight: 4
              }}
              source={like}
            />
            <Text>{info.liked}</Text>
          </Row>
          <Row flex={1} alignItems='center'>
            <Image
              alt="icon"
              style={{
                width: 15,
                height: 15,
                marginRight: 4
              }}
              source={share}
            />
            <Text>分享</Text>
          </Row>
        </Row> */}
      </Container>
    </Box>
  );
};
export default PostCard;

