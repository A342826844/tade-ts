import React from "react";
import { Image } from "native-base";

const BTC = require('@/assets/images/coin/BTC.png');
const ETH = require('@/assets/images/coin/ETH.png');
const BNB = require('@/assets/images/coin/BNB.png');
const XRP = require('@/assets/images/coin/XRP.png');
const DOGE = require('@/assets/images/coin/DOGE.png');
const SOL = require('@/assets/images/coin/SOL.png');
const MATIC = require('@/assets/images/coin/MATIC.png');
const SHIB = require('@/assets/images/coin/SHIB.png');
const LTC = require('@/assets/images/coin/LTC.png');
const ADA = require('@/assets/images/coin/ADA.png');
const DOT = require('@/assets/images/coin/DOT.png');
const AVAX = require('@/assets/images/coin/AVAX.png');
const UNI = require('@/assets/images/coin/UNI.png');

const coins: any = {
    BTC,
    ETH,
    BNB,
    XRP,
    DOGE,
    SOL,
    MATIC,
    SHIB,
    LTC,
    ADA,
    DOT,
    AVAX,
    UNI,
}

type SymbolCoinProps = {
  symbol: string;
}

const SymbolCoin: React.FC<SymbolCoinProps> = ({ symbol }) => {
  return (
    <Image
        style={{
            width: 20,
            height: 20,
        }}
        alt={symbol}
        source={coins[symbol]}
    />
  )
}



export default SymbolCoin;
