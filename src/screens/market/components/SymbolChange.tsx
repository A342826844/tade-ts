import React from "react";
import { Avatar, Row, Text, Image, Column, Center } from "native-base";
import { Box, Button, Heading } from "@/components/Themed";
import { Container } from "@/components/Themed/Layout";
import SymbolCoin from "@/components/icons/SymbolCoin";
import { PriceUpdate } from "@/state/types";
import { useStore } from "@/state";

const follow = require('@/assets/images/home/follow.png');
const comment = require('@/assets/images/home/comment.png');
const like = require('@/assets/images/home/like.png');
const share = require('@/assets/images/home/share.png');

interface SymbolChange {
  info: PriceUpdate
}


const SymbolChange: React.FC<SymbolChange> = ({ info }) => {

  const rates = useStore((p) => p.symbol.rates);

  const rateBLR = rates.BRL || 1;

  return (
    <Box bgColor='backgroundCard' paddingY={2} width="100%">
      <Container>
        <Row justifyContent="space-between" alignItems="center">
          <Row >
            <SymbolCoin symbol={info.symbol} />
            <Column marginLeft={2} justifyContent="center" >
              <Row alignItems="center">
                <Heading  color='#212121' fontSize={13}>{info.symbol}</Heading>
                <Text color='#8793A4' fontSize={10}>/USDT</Text>
              </Row>
              {/* <Text>成交额 12.21</Text> */}
            </Column>
          </Row>
          <Row alignItems="center">
            <Column marginRight={2} justifyContent="flex-end">
              <Text color='#212121' textAlign='right' fontWeight='bold' fontSize={13}>{info.currentClose}</Text>
              <Text color='#8793A4' textAlign='right' fontSize={11}>R$ {(info.currentClose * rateBLR).toFixed(2)}</Text>
            </Column>
            <ChangeBox change={info.priceChange} rate={info.priceChangePercent} />
          </Row>
        </Row>
      </Container>
    </Box>
  );
};
export default SymbolChange;


const ChangeBox = ({ change = 1, rate = 0 }) => {
  return <Box bgColor={rate > 0 ? 'up' : 'down'} width={69} height={27} borderRadius={5}>
    <Row alignItems='center' justifyContent='center'>
      <Text fontWeight='black' lineHeight={27} color='white' fontSize={13}>{rate > 0 ? '+' : ''}</Text>
      <Text fontWeight='black' lineHeight={27} color='white' fontSize={13}>{rate}%</Text>
    </Row>
  </Box>
}