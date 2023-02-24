"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beautifier {
    constructor() {
        this.floatKeys = [
            'accumulatedQuantity',
            'accumulatedRealisedPreFee',
            'asks',
            'asksNotional',
            'askPrice',
            'askQty',
            'availableBalance',
            'averagePrice',
            'balanceDelta',
            'balances',
            'balanceChange',
            'baseAssetVolume',
            'bestAskPrice',
            'bestAskQuantity',
            'bids',
            'bidsNotional',
            'bestBid',
            'bestBidQuantity',
            'bidPrice',
            'bidQty',
            'buyerCommission',
            'close',
            'closeQuantity',
            'closeTime',
            'commission',
            'commissionAmount',
            'crossWalletBalance',
            'currentClose',
            'cummulativeQuoteAssetTransactedQty',
            'entryPrice',
            'executedQty',
            'free',
            'freeze',
            'fundingRate',
            'high',
            'highPrice',
            'icebergQuantity',
            'icebergQty',
            'ignored',
            'income',
            'indexPrice',
            'ipoable',
            'ipoing',
            'isolatedMargin',
            'isolatedWallet',
            'isolatedWalletAmount',
            'lastFilledPrice',
            'lastFilledQuantity',
            'lastTradeQuantity',
            'lastTradePrice',
            'lastQuoteAssetTransactedQty',
            'liquidationPrice',
            'locked',
            'low',
            'maintenanceMarginRequired',
            'makerCommission',
            'markPrice',
            'maxNotionalValue',
            'maxPrice',
            'maxQty',
            'minNotional',
            'minPrice',
            'minQty',
            'multiplierDown',
            'multiplierUp',
            'multiplierDecimal',
            'newTraderRebateCommission',
            'notional',
            'oldTraderRebateCommission',
            'onOrderBalance',
            'open',
            'openPrice',
            'orderQuoteQty',
            'orderFilledAccumulatedQuantity',
            'originalPrice',
            'originalQuantity',
            'origQty',
            'positionAmount',
            'positionAmt',
            'previousClose',
            'prevClosePrice',
            'price',
            'priceChange',
            'priceChangePercent',
            'quantity',
            'qty',
            'quoteAssetVolume',
            'quoteVolume',
            'quoteVolumeActive',
            'realisedProfit',
            'sellerCommission',
            'settlePriceEstimate',
            'stepSize',
            'stopPrice',
            'storage',
            'takerBaseAssetVolume',
            'takerCommission',
            'takerQuoteAssetVolume',
            'tickSize',
            'totalRebateVol',
            'totalTradeVol',
            'trailingStopActivationPrice',
            'trailingStopCallbackRate',
            'unrealisedPnl',
            'unRealizedProfit',
            'volume',
            'volumeActive',
            'walletBalance',
            'weightedAveragePrice',
            'weightedAvgPrice',
            'withdrawFee',
            'withdrawMax',
            'withdrawMin',
            'withdrawIntegerMultiple',
            'withdrawing',
        ];
        // Map so we don't have to perform indexOf for each iteration
        this.floatKeysHashMap = {};
        this.floatKeys.forEach((keyName) => {
            this.floatKeysHashMap[keyName] = true;
        });
        this.beautificationMap = {
            aggTrades: {
                a: 'aggTradeId',
                p: 'price',
                q: 'quantity',
                f: 'firstTradeId',
                l: 'lastTradeId',
                T: 'timestamp',
                m: 'maker',
                M: 'bestPriceMatch',
            },
            bookTickerEvent: {
                e: 'eventType',
                u: 'updateId',
                s: 'symbol',
                b: 'bidPrice',
                B: 'bidQty',
                a: 'askPrice',
                A: 'askQty',
            },
            klines: {
                0: 'openTime',
                1: 'open',
                2: 'high',
                3: 'low',
                4: 'close',
                5: 'volume',
                6: 'closeTime',
                7: 'quoteAssetVolume',
                8: 'trades',
                9: 'takerBaseAssetVolume',
                10: 'takerQuoteAssetVolume',
                11: 'ignored',
            },
            bids: [
                {
                    0: 'price',
                    1: 'quantity',
                    2: 'ignored',
                },
            ],
            asks: [
                {
                    0: 'price',
                    1: 'quantity',
                    2: 'ignored',
                },
            ],
            depthUpdateEvent: {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                U: 'firstUpdateId',
                u: 'lastUpdateId',
                b: 'bidDepthDelta',
                a: 'askDepthDelta',
            },
            bidDepthDelta: [
                {
                    0: 'price',
                    1: 'quantity',
                    2: 'ignored',
                },
            ],
            askDepthDelta: [
                {
                    0: 'price',
                    1: 'quantity',
                    2: 'ignored',
                },
            ],
            klineEvent: {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                k: 'kline',
            },
            continuous_klineEvent: {
                e: 'eventType',
                E: 'eventTime',
                ps: 'symbol',
                ct: 'contractType',
                k: 'kline',
            },
            indexPrice_klineEvent: {
                e: 'eventType',
                E: 'eventTime',
                ps: 'symbol',
                k: 'kline',
            },
            kline: {
                t: 'startTime',
                T: 'endTime',
                s: 'symbol',
                i: 'interval',
                f: 'firstTradeId',
                L: 'lastTradeId',
                o: 'open',
                c: 'close',
                h: 'high',
                l: 'low',
                v: 'volume',
                n: 'trades',
                x: 'final',
                q: 'quoteVolume',
                V: 'volumeActive',
                Q: 'quoteVolumeActive',
                B: 'ignored',
            },
            aggTradeEvent: {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                a: 'tradeId',
                p: 'price',
                q: 'quantity',
                f: 'firstTradeId',
                l: 'lastTradeId',
                T: 'time',
                m: 'maker',
                M: 'ignored',
            },
            outboundAccountInfoEvent: {
                e: 'eventType',
                E: 'eventTime',
                m: 'makerCommission',
                t: 'takerCommission',
                b: 'buyerCommission',
                s: 'sellerCommission',
                T: 'canTrade',
                W: 'canWithdraw',
                D: 'canDeposit',
                B: 'balances',
                u: 'lastUpdateTime',
            },
            outboundAccountPositionEvent: {
                e: 'eventType',
                E: 'eventTime',
                u: 'lastUpdateTime',
                B: 'balances',
            },
            balanceUpdateEvent: {
                e: 'eventType',
                E: 'eventTime',
                a: 'asset',
                d: 'balanceDelta',
                T: 'clearTime',
            },
            indexPriceUpdateEvent: {
                e: 'eventType',
                E: 'eventTime',
                i: 'symbol',
                p: 'indexPrice',
            },
            listStatusEvent: {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                g: 'orderListId',
                c: 'contingencyType',
                l: 'listStatusType',
                L: 'listOrderStatus',
                r: 'listRejectReason',
                C: 'listClientOrderId',
                T: 'transactionTime',
                O: 'orders',
            },
            markPriceUpdateEvent: {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                p: 'markPrice',
                i: 'indexPrice',
                P: 'settlePriceEstimate',
                r: 'fundingRate',
                T: 'nextFundingTime',
            },
            orders: [
                {
                    s: 'symbol',
                    i: 'orderId',
                    c: 'clientOrderId',
                },
            ],
            ACCOUNT_UPDATEEvent: {
                e: 'eventType',
                E: 'eventTime',
                T: 'transactionId',
                a: 'updateData',
            },
            MARGIN_CALLEvent: {
                e: 'eventType',
                E: 'eventTime',
                cw: 'crossWalletBalance',
                p: 'positions',
            },
            ORDER_TRADE_UPDATEEvent: {
                e: 'eventType',
                E: 'eventTime',
                T: 'transactionTime',
                o: 'order',
            },
            order: {
                s: 'symbol',
                c: 'clientOrderId',
                S: 'orderSide',
                o: 'orderType',
                f: 'timeInForce',
                q: 'originalQuantity',
                p: 'originalPrice',
                ap: 'averagePrice',
                sp: 'stopPrice',
                x: 'executionType',
                X: 'orderStatus',
                i: 'orderId',
                l: 'lastFilledQuantity',
                z: 'orderFilledAccumulatedQuantity',
                L: 'lastFilledPrice',
                N: 'commissionAsset',
                n: 'commissionAmount',
                T: 'orderTradeTime',
                t: 'tradeId',
                b: 'bidsNotional',
                a: 'asksNotional',
                m: 'isMakerTrade',
                R: 'isReduceOnly',
                wt: 'stopPriceWorkingType',
                ot: 'originalOrderType',
                ps: 'positionSide',
                cp: 'isCloseAll',
                AP: 'trailingStopActivationPrice',
                cr: 'trailingStopCallbackRate',
                rp: 'realisedProfit',
            },
            ACCOUNT_CONFIG_UPDATEEvent: {
                e: 'eventType',
                E: 'eventTime',
                T: 'transactionTime',
                ac: 'assetConfiguration',
                ai: 'accountConfiguration',
            },
            assetConfiguration: {
                s: 'symbol',
                l: 'leverage',
            },
            accountConfiguration: {
                j: 'isMultiAssetsMode',
            },
            positions: [
                {
                    s: 'symbol',
                    ps: 'positionSide',
                    pa: 'positionAmount',
                    mt: 'marginType',
                    iw: 'isolatedWalletAmount',
                    mp: 'markPrice',
                    up: 'unrealisedPnl',
                    mm: 'maintenanceMarginRequired',
                },
            ],
            listenKeyExpiredEvent: {
                e: 'eventType',
                E: 'eventTime',
            },
            updateData: {
                m: 'updateEventType',
                P: 'updatedPositions',
                B: 'updatedBalances',
            },
            updatedBalances: [
                {
                    a: 'asset',
                    wb: 'walletBalance',
                    cw: 'crossWalletBalance',
                    bc: 'balanceChange',
                },
            ],
            updatedPositions: [
                {
                    s: 'symbol',
                    ma: 'marginAsset',
                    pa: 'positionAmount',
                    ep: 'entryPrice',
                    cr: 'accumulatedRealisedPreFee',
                    up: 'unrealisedPnl',
                    mt: 'marginType',
                    iw: 'isolatedWalletAmount',
                    ps: 'positionSide',
                },
            ],
            balances: [
                {
                    a: 'asset',
                    f: 'availableBalance',
                    l: 'onOrderBalance',
                },
            ],
            executionReportEvent: {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                c: 'newClientOrderId',
                S: 'side',
                o: 'orderType',
                f: 'cancelType',
                q: 'quantity',
                p: 'price',
                P: 'stopPrice',
                F: 'icebergQuantity',
                g: 'orderListId',
                C: 'originalClientOrderId',
                x: 'executionType',
                X: 'orderStatus',
                r: 'rejectReason',
                i: 'orderId',
                l: 'lastTradeQuantity',
                z: 'accumulatedQuantity',
                L: 'lastTradePrice',
                n: 'commission',
                N: 'commissionAsset',
                T: 'tradeTime',
                t: 'tradeId',
                I: 'ignoreThis1',
                w: 'isOrderOnBook',
                m: 'isMaker',
                M: 'ignoreThis2',
                O: 'orderCreationTime',
                Z: 'cummulativeQuoteAssetTransactedQty',
                Y: 'lastQuoteAssetTransactedQty',
                Q: 'orderQuoteQty',
            },
            tradeEvent: {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                t: 'tradeId',
                p: 'price',
                q: 'quantity',
                b: 'buyerOrderId',
                a: 'sellerOrderId',
                T: 'time',
                m: 'maker',
                M: 'ignored',
            },
            '24hrTickerEvent': {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                p: 'priceChange',
                P: 'priceChangePercent',
                w: 'weightedAveragePrice',
                x: 'previousClose',
                c: 'currentClose',
                Q: 'closeQuantity',
                b: 'bestBid',
                B: 'bestBidQuantity',
                a: 'bestAskPrice',
                A: 'bestAskQuantity',
                o: 'open',
                h: 'high',
                l: 'low',
                v: 'baseAssetVolume',
                q: 'quoteAssetVolume',
                O: 'openTime',
                C: 'closeTime',
                F: 'firstTradeId',
                L: 'lastTradeId',
                n: 'trades',
            },
            '24hrMiniTickerEvent': {
                e: 'eventType',
                E: 'eventTime',
                s: 'symbol',
                ps: 'contractSymbol',
                c: 'close',
                o: 'open',
                h: 'high',
                l: 'low',
                v: 'baseAssetVolume',
                q: 'quoteAssetVolume',
            },
            forceOrderEvent: {
                e: 'eventType',
                E: 'eventTime',
                o: 'liquidationOrder',
            },
            liquidationOrder: {
                s: 'symbol',
                S: 'side',
                o: 'orderType',
                f: 'timeInForce',
                q: 'quantity',
                p: 'price',
                ap: 'averagePrice',
                X: 'orderStatus',
                l: 'lastFilledQuantity',
                z: 'orderFilledAccumulatedQuantity',
                T: 'orderTradeTime',
            },
        };
    }
    beautifyValueWithKey(key, val) {
        if (typeof val === 'string' && this.floatKeysHashMap[key] && val !== '') {
            const result = parseFloat(val);
            if (isNaN(result)) {
                return val;
            }
            return result;
        }
        return val;
    }
    /**
     * Beautify array or object, recurisvely
     */
    beautifyObjectValues(data) {
        if (Array.isArray(data)) {
            return this.beautifyArrayValues(data);
        }
        const beautifedObject = {};
        for (const [key, val] of Object.entries(data)) {
            const type = typeof val;
            if (Array.isArray(val)) {
                beautifedObject[key] = this.beautifyArrayValues(val, key);
            }
            else if (key === 'e' && type === 'string') {
                beautifedObject['eventType'] = this.beautifyValueWithKey(key, val);
            }
            else if (type === 'object') {
                beautifedObject[key] = this.beautifyObjectValues(val);
            }
            else {
                beautifedObject[key] = this.beautifyValueWithKey(key, val);
            }
        }
        return beautifedObject;
    }
    // TODO: if not matched return original object....
    beautifyArrayValues(data, parentKey) {
        const beautifedArray = [];
        for (const [key, val] of data.entries()) {
            const type = typeof val;
            if (Array.isArray(val)) {
                beautifedArray.push(this.beautifyArrayValues(val, parentKey || key));
            }
            else if (type === 'string' || type === 'number' || type === 'boolean') {
                beautifedArray.push(this.beautifyValueWithKey(parentKey || key, val));
            }
            else {
                beautifedArray.push(this.beautifyObjectValues(val));
            }
        }
        return beautifedArray;
    }
    beautify(data, key) {
        if (typeof key !== 'string' && typeof key !== 'number') {
            console.warn(`beautify(object, ${key}) is not valid key - beautification failed `, data, key);
            return data;
        }
        const knownBeautification = this.beautificationMap[key];
        if (!knownBeautification) {
            // console.log(`beautify unknown key(..., "${key}")`);
            if (Array.isArray(data)) {
                return this.beautifyArrayValues(data);
            }
            if (typeof data === 'object' && data !== null) {
                return this.beautifyObjectValues(data);
            }
            return this.beautifyValueWithKey(key, data);
        }
        const newItem = {};
        for (const key in data) {
            const value = data[key];
            const valueType = typeof value;
            let newKey = knownBeautification[key] || key;
            if (Array.isArray(newKey)) {
                newKey = newKey[0];
            }
            if (!Array.isArray(value)) {
                if (valueType === 'object' && value !== null) {
                    newItem[newKey] = this.beautify(value, knownBeautification[key]);
                }
                else {
                    newItem[newKey] = this.beautifyValueWithKey(newKey, value);
                }
                continue;
            }
            const newArray = [];
            if (Array.isArray(this.beautificationMap[newKey])) {
                for (const elementValue of value) {
                    const mappedBeautification = this.beautificationMap[knownBeautification[key]];
                    const childMapping = mappedBeautification[0];
                    if (typeof childMapping === 'object' && childMapping !== null) {
                        const mappedResult = {};
                        for (const childElementKey in elementValue) {
                            const newKey = childMapping[childElementKey] || childElementKey;
                            mappedResult[newKey] = this.beautify(elementValue[childElementKey], newKey);
                        }
                        newArray.push(mappedResult);
                        continue;
                    }
                    newArray.push(this.beautify(elementValue, childMapping));
                }
            }
            newItem[newKey] = newArray;
        }
        return newItem;
    }
    /**
     * Entry point to beautify WS message. EventType is determined automatically unless this is a combined stream event.
     */
    beautifyWsMessage(data, eventType, isCombined) {
        if (Array.isArray(data)) {
            return data.map((event) => {
                if (event.e) {
                    return this.beautify(event, event.e + 'Event');
                }
                return event;
            });
        }
        else if (data.e) {
            return this.beautify(data, data.e + 'Event');
        }
        else if (isCombined && typeof data === 'object' && data !== null) {
            return this.beautify(data, eventType);
        }
        return data;
    }
}
exports.default = Beautifier;
//# sourceMappingURL=beautifier.js.map