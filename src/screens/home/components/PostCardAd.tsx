import React from "react";
import { Avatar, Row, Column, Pressable, Image } from "native-base";
import { Box, Button, Heading, Text } from "@/components/Themed";
import { Linking } from 'react-native';
import { Container } from "@/components/Themed/Layout";
import { useNavigation } from "@react-navigation/native";
import { ContentDetail } from "@/api/request";
import Markdown from 'react-native-markdown-renderer';
import dayjs from "dayjs";
import { shortenAddress } from "@/utils/address";
import BaseUrl from "@/constants/BaseUrl";
import Layout from "@/constants/Layout";
import Breakpoints from "@/constants/Breakpoints";

const p1 = require('@/assets/images/ad/p1.jpg');
const p2 = require('@/assets/images/ad/p2.jpg');
const p3 = require('@/assets/images/ad/p3.jpg');
const p4 = require('@/assets/images/ad/p4.jpg');

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

const datas = {
  1: {
    title: 'Investir dinheiro é mais sábio do que poupar.',
    body: 'Ganhar muito dinheiro todos os dias é difícil, mas ganhar um pouco de dinheiro todos os dias é fácil, não é?',
    img: p1,
  },
  2: {
    title: 'Negociação eficiente, lucro estável!',
    body: 'Oferecemos uma plataforma de negociação de serviços 24 horas por dia, 7 dias por semana, com vários ativos, alguns ativos OTC até suportam negociações de fim de semana.',
    img: p2,
  },
  3: {
    title: 'Obter alto retorno com pouco capital.',
    body: 'A única razão pela qual você está vendo este anúncio é porque é bom em investir.',
    img: p3,
  },
  4: {
    title: 'Negociação eficiente, lucro estável!',
    body: 'Oferecemos uma plataforma de negociação de serviços 24 horas por dia, 7 dias por semana, com vários ativos, alguns ativos OTC até suportam negociações de fim de semana.',
    img: p4,
  },
}


const PostCard = ({ type }: { type: 1|2 }) => {
  const { navigate } = useNavigation();

  return (
    <Box bgColor='backgroundCard' paddingY={2} mb={2} width="100%">
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <Row >
            <Avatar bg="green.500" source={{
              uri: 'https://play-lh.googleusercontent.com/fsOApGi5Y1xqL5JfeeW4oNqKX5eaekMn60QHJ8nj4aydrJePKIHo2iwu3XJoFC6Wjw=w240-h480-rw'
            }}>
              AD
            </Avatar>
            <Column marginLeft={2} justifyContent="center">
              <Text>
              AD
              </Text>
            </Column>
          </Row>
        </Row>
        <Pressable onPress={() => {
          // navigate('Detail', { id: `${type}` })
          Linking.openURL(BaseUrl.downloadAndroid);
        }}>
          <Box>
            <Box paddingTop={3} paddingBottom={1}>
              <Heading >{datas[type].title}</Heading>
              <Text>{datas[type].body}</Text>
              <Image
                alt="pp"
                // style={{
                // }}
                width = {Layout.window.width - Breakpoints.LayoutPaddingX * 2}
                height = '350'
                marginTop="8px"
                resizeMode='contain'
                source={datas[type].img}
              />
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

