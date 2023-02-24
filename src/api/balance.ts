
import { markets } from '@/constants/Symbol';
import { MainClient, WebsocketClient, DefaultLogger } from '../lib/balance/lib/index';

const logger = {
    ...DefaultLogger,
// silly: () => {},
};

export const wsClient = new WebsocketClient({
    // api_key: key,
    // api_secret: secret,
    beautify: true,
}, logger);

const marketSubscribes: any[] = [];
const marketTrikerSubscribes: any[] = [];

export const startMarkPrice = () => {
    markets.forEach(item => {
        // marketSubscribes.push(
        //     wsClient.subscribeMarkPrice(`${item}USDT`, 'usdm')
        // )
        marketTrikerSubscribes.push(
            wsClient.subscribeSymbol24hrTicker(`${item}USDT`, 'usdm')
        )
    })
}

export const closeMarkPrice = () => {
    marketSubscribes.forEach(item => {
        wsClient.closeWs(item)
    })
    marketSubscribes.splice(0, marketSubscribes.length)
}

export const closeMarkTriker = () => {
    marketTrikerSubscribes.forEach(item => {
        wsClient.closeWs(item)
    })
    marketTrikerSubscribes.splice(0, marketTrikerSubscribes.length)
}