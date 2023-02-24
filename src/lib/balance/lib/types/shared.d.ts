export declare type numberInString = string | number;
export declare type ExchangeSymbol = string;
export declare type BooleanString = 'true' | 'false';
export declare type BooleanStringCapitalised = 'TRUE' | 'FALSE';
export declare type BinanceBaseUrlKey = 'spot' | 'spot1' | 'spot2' | 'spot3' | 'spot4' | 'usdmtest' | 'usdm' | 'coinm' | 'coinmtest' | 'voptions' | 'voptionstest';
/**
 * Time in force. Note: `GTE_GTC` is not officially documented, use at your own risk.
 */
export declare type OrderTimeInForce = 'GTC' | 'IOC' | 'FOK' | 'GTE_GTC';
export declare type StringBoolean = 'TRUE' | 'FALSE';
export declare type SideEffects = 'MARGIN_BUY' | 'AUTO_REPAY' | 'NO_SIDE_EFFECT';
/**
 * ACK = confirmation of order acceptance (no placement/fill information)
 * RESULT = fill state
 * FULL = fill state + detail on fills and other detail
 */
export declare type OrderResponseType = 'ACK' | 'RESULT' | 'FULL';
export declare type OrderIdProperty = 'newClientOrderId' | 'listClientOrderId' | 'limitClientOrderId' | 'stopClientOrderId';
export declare type OrderSide = 'BUY' | 'SELL';
export declare type OrderStatus = 'NEW' | 'PARTIALLY_FILLED' | 'FILLED' | 'CANCELED' | 'PENDING_CANCEL' | 'REJECTED' | 'EXPIRED';
export declare type OrderExecutionType = 'NEW' | 'CANCELED' | 'REJECTED' | 'TRADE' | 'EXPIRED';
export declare type OCOStatus = 'RESPONSE' | 'EXEC_STARTED' | 'ALL_DONE';
export declare type OCOOrderStatus = 'EXECUTING' | 'ALL_DONE' | 'REJECT';
export declare type OrderType = 'LIMIT' | 'LIMIT_MAKER' | 'MARKET' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT' | 'TAKE_PROFIT' | 'TAKE_PROFIT_LIMIT';
export interface BasicAssetParam {
    asset: string;
}
export interface BasicSymbolParam {
    symbol: string;
    isIsolated?: StringBoolean;
}
export interface BasicAssetPaginatedParams {
    asset?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface BasicSymbolPaginatedParams {
    symbol?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface OrderBookParams {
    symbol: string;
    limit?: 5 | 10 | 20 | 50 | 100 | 500 | 1000 | 5000;
}
export declare type KlineInterval = '1s' | '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M';
export interface GetOrderParams {
    symbol: string;
    orderId?: number;
    origClientOrderId?: string;
    isIsolated?: StringBoolean;
}
export interface HistoricalTradesParams {
    symbol: string;
    limit?: number;
    fromId?: number;
}
export interface KlinesParams {
    symbol: string;
    interval: KlineInterval;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export declare type Kline = [
    number,
    numberInString,
    numberInString,
    numberInString,
    numberInString,
    numberInString,
    number,
    numberInString,
    number,
    numberInString,
    numberInString,
    numberInString
];
/** @deprecated `FuturesKline` will be removed soon. Use `Kline` instead. **/
export declare type FuturesKline = Kline;
export interface RecentTradesParams {
    symbol: string;
    limit?: number;
}
export interface CancelOrderParams {
    symbol: string;
    orderId?: number;
    origClientOrderId?: string;
    /** For isolated margin trading only */
    newClientOrderId?: string;
    /** For isolated margin trading only */
    isIsolated?: StringBoolean;
}
export interface CancelOCOParams {
    symbol: string;
    /** For isolated margin trading only */
    isIsolated?: string;
    orderListId?: number;
    listClientOrderId?: number;
    newClientOrderId?: string;
}
export interface NewOCOParams {
    symbol: string;
    listClientOrderId?: string;
    side: OrderSide;
    quantity: number;
    limitClientOrderId?: string;
    limitStrategyId?: number;
    limitStrategyType?: number;
    price: number;
    limitIcebergQty?: number;
    trailingdelta?: number;
    stopClientOrderId?: string;
    stopPrice: number;
    stopStrategyId?: number;
    stopStrategyType?: number;
    stopLimitPrice?: number;
    stopIcebergQty?: number;
    stopLimitTimeInForce?: OrderTimeInForce;
    newOrderRespType?: OrderResponseType;
    /** For isolated margin trading only */
    isIsolated?: StringBoolean;
    /** Define a side effect, only for margin trading */
    sideEffectType?: SideEffects;
}
export interface SymbolFromPaginatedRequestFromId {
    symbol: string;
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface GetAllOrdersParams {
    symbol: string;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    /** For isolated margin trading only */
    isIsolated?: StringBoolean;
}
export interface RateLimiter {
    rateLimitType: 'REQUEST_WEIGHT' | 'ORDERS' | 'RAW_REQUESTS';
    interval: 'SECOND' | 'MINUTE' | 'DAY';
    intervalNum: number;
    limit: number;
}
export interface SymbolPriceFilter {
    filterType: 'PRICE_FILTER';
    minPrice: numberInString;
    maxPrice: numberInString;
    tickSize: numberInString;
}
export interface SymbolPercentPriceFilter {
    filterType: 'PERCENT_PRICE';
    multiplierUp: numberInString;
    multiplierDown: numberInString;
    avgPriceMins: number;
}
export interface SymbolLotSizeFilter {
    filterType: 'LOT_SIZE';
    minQty: numberInString;
    maxQty: numberInString;
    stepSize: numberInString;
}
export interface SymbolMinNotionalFilter {
    filterType: 'MIN_NOTIONAL';
    minNotional: numberInString;
    applyToMarket: boolean;
    avgPriceMins: number;
}
export interface SymbolIcebergPartsFilter {
    filterType: 'ICEBERG_PARTS';
    limit: number;
}
export interface SymbolMarketLotSizeFilter {
    filterType: 'MARKET_LOT_SIZE';
    minQty: numberInString;
    maxQty: numberInString;
    stepSize: numberInString;
}
export interface SymbolMaxOrdersFilter {
    filterType: 'MAX_NUM_ORDERS';
    maxNumOrders: number;
}
export interface SymbolMaxAlgoOrdersFilter {
    filterType: 'MAX_NUM_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}
export interface SymbolMaxIcebergOrdersFilter {
    filterType: 'MAX_NUM_ICEBERG_ORDERS';
    maxNumIcebergOrders: number;
}
export interface SymbolMaxPositionFilter {
    filterType: 'MAX_POSITION';
    maxPosition: numberInString;
}
export declare type SymbolFilter = SymbolPriceFilter | SymbolPercentPriceFilter | SymbolLotSizeFilter | SymbolMinNotionalFilter | SymbolIcebergPartsFilter | SymbolMarketLotSizeFilter | SymbolMaxOrdersFilter | SymbolMaxAlgoOrdersFilter | SymbolMaxIcebergOrdersFilter | SymbolMaxPositionFilter;
export interface ExchangeMaxNumOrdersFilter {
    filterType: 'EXCHANGE_MAX_NUM_ORDERS';
    maxNumOrders: number;
}
export interface ExchangeMaxAlgoOrdersFilter {
    filterType: 'EXCHANGE_MAX_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}
export declare type ExchangeFilter = ExchangeMaxNumOrdersFilter | ExchangeMaxAlgoOrdersFilter;
export declare type OrderBookPrice = numberInString;
export declare type OrderBookAmount = numberInString;
export declare type OrderBookRow = [OrderBookPrice, OrderBookAmount];
export declare type OrderBookPriceFormatted = number;
export declare type OrderBookAmountFormatted = number;
export declare type OrderBookRowFormatted = [
    OrderBookPriceFormatted,
    OrderBookAmountFormatted
];
export interface GenericCodeMsgError {
    code: number;
    msg: string;
}
