import { AxiosRequestConfig } from 'axios';
import { BasicSymbolPaginatedParams, BasicSymbolParam, GetOrderParams, OrderBookParams, HistoricalTradesParams, KlinesParams, Kline, RecentTradesParams, CancelOrderParams, SymbolFromPaginatedRequestFromId, GetAllOrdersParams, GenericCodeMsgError } from './types/shared';
import { ContinuousContractKlinesParams, IndexPriceKlinesParams, SymbolKlinePaginatedParams, FuturesDataPaginatedParams, MultiAssetsMode, NewFuturesOrderParams, CancelMultipleOrdersParams, CancelOrdersTimeoutParams, SetLeverageParams, SetMarginTypeParams, SetIsolatedMarginParams, GetPositionMarginChangeHistoryParams, GetIncomeHistoryParams, GetForceOrdersParams, FuturesExchangeInfo, FuturesOrderBook, RawFuturesTrade, AggregateFuturesTrade, FundingRateHistory, FuturesSymbolOrderBookTicker, OpenInterest, ModeChangeResult, PositionModeParams, PositionModeResponse, MultiAssetModeResponse, NewOrderResult, NewOrderError, OrderResult, CancelFuturesOrderResult, CancelAllOpenOrdersResult, FuturesAccountBalance, FuturesAccountInformation, SetLeverageResult, SetIsolatedMarginResult, FuturesPosition, FuturesPositionTrade, ForceOrderResult, SymbolLeverageBracketsResult, IncomeHistory, RebateDataOverview, SetCancelTimeoutResult, ChangeStats24hr, MarkPrice } from './types/futures';
import { RestClientOptions } from './util/requestUtils';
import BaseRestClient from './util/BaseRestClient';
import { SymbolPrice } from './types/spot';
export declare class USDMClient extends BaseRestClient {
    private clientId;
    constructor(restClientOptions?: RestClientOptions, requestOptions?: AxiosRequestConfig, useTestnet?: boolean);
    /**
     * Abstraction required by each client to aid with time sync / drift handling
     */
    getServerTime(): Promise<number>;
    /**
     *
     * Market Data Endpoints
     *
     **/
    testConnectivity(): Promise<{}>;
    getExchangeInfo(): Promise<FuturesExchangeInfo>;
    getOrderBook(params: OrderBookParams): Promise<FuturesOrderBook>;
    getRecentTrades(params: RecentTradesParams): Promise<RawFuturesTrade[]>;
    getHistoricalTrades(params: HistoricalTradesParams): Promise<RawFuturesTrade[]>;
    getAggregateTrades(params: SymbolFromPaginatedRequestFromId): Promise<AggregateFuturesTrade[]>;
    getKlines(params: KlinesParams): Promise<Kline[]>;
    getContinuousContractKlines(params: ContinuousContractKlinesParams): Promise<Kline[]>;
    getIndexPriceKlines(params: IndexPriceKlinesParams): Promise<Kline[]>;
    getMarkPriceKlines(params: SymbolKlinePaginatedParams): Promise<Kline[]>;
    getMarkPrice(params?: Partial<BasicSymbolParam>): Promise<MarkPrice | MarkPrice[]>;
    getFundingRateHistory(params?: Partial<BasicSymbolPaginatedParams>): Promise<FundingRateHistory[]>;
    get24hrChangeStatististics(params?: Partial<BasicSymbolParam>): Promise<ChangeStats24hr | ChangeStats24hr[]>;
    getSymbolPriceTicker(params?: Partial<BasicSymbolParam>): Promise<SymbolPrice | SymbolPrice[]>;
    getSymbolOrderBookTicker(params?: Partial<BasicSymbolParam>): Promise<FuturesSymbolOrderBookTicker | FuturesSymbolOrderBookTicker[]>;
    getOpenInterest(params: BasicSymbolParam): Promise<OpenInterest>;
    getOpenInterestStatistics(params: FuturesDataPaginatedParams): Promise<any>;
    getTopTradersLongShortAccountRatio(params: FuturesDataPaginatedParams): Promise<any>;
    getTopTradersLongShortPositionRatio(params: FuturesDataPaginatedParams): Promise<any>;
    getGlobalLongShortAccountRatio(params: FuturesDataPaginatedParams): Promise<any>;
    getTakerBuySellVolume(params: FuturesDataPaginatedParams): Promise<any>;
    getHistoricalBlvtNavKlines(params: SymbolKlinePaginatedParams): Promise<any>;
    getCompositeSymbolIndex(params?: Partial<BasicSymbolParam>): Promise<any>;
    /**
     *
     * USD-Futures Account/Trade Endpoints
     *
     **/
    setPositionMode(params: PositionModeParams): Promise<ModeChangeResult>;
    getCurrentPositionMode(): Promise<PositionModeResponse>;
    setMultiAssetsMode(params: {
        multiAssetsMargin: MultiAssetsMode;
    }): Promise<ModeChangeResult>;
    getMultiAssetsMode(): Promise<MultiAssetModeResponse>;
    submitNewOrder(params: NewFuturesOrderParams): Promise<NewOrderResult | NewOrderError>;
    /**
     * Warning: max 5 orders at a time! This method does not throw, instead it returns individual errors in the response array if any orders were rejected.
     *
     * Known issue: `quantity` and `price` should be sent as strings
     */
    submitMultipleOrders(orders: NewFuturesOrderParams<string>[]): Promise<(NewOrderResult | NewOrderError)[]>;
    getOrder(params: GetOrderParams): Promise<OrderResult>;
    cancelOrder(params: CancelOrderParams): Promise<CancelFuturesOrderResult>;
    cancelAllOpenOrders(params: BasicSymbolParam): Promise<CancelAllOpenOrdersResult>;
    cancelMultipleOrders(params: CancelMultipleOrdersParams): Promise<(CancelFuturesOrderResult | GenericCodeMsgError)[]>;
    setCancelOrdersOnTimeout(params: CancelOrdersTimeoutParams): Promise<SetCancelTimeoutResult>;
    getCurrentOpenOrder(params: GetOrderParams): Promise<OrderResult>;
    getAllOpenOrders(params?: Partial<BasicSymbolParam>): Promise<OrderResult[]>;
    getAllOrders(params: GetAllOrdersParams): Promise<OrderResult[]>;
    getBalance(): Promise<FuturesAccountBalance[]>;
    getAccountInformation(): Promise<FuturesAccountInformation>;
    setLeverage(params: SetLeverageParams): Promise<SetLeverageResult>;
    setMarginType(params: SetMarginTypeParams): Promise<ModeChangeResult>;
    setIsolatedPositionMargin(params: SetIsolatedMarginParams): Promise<SetIsolatedMarginResult>;
    getPositionMarginChangeHistory(params: GetPositionMarginChangeHistoryParams): Promise<any>;
    getPositions(params?: Partial<BasicSymbolParam>): Promise<FuturesPosition[]>;
    getAccountTrades(params: SymbolFromPaginatedRequestFromId): Promise<FuturesPositionTrade[]>;
    getIncomeHistory(params?: GetIncomeHistoryParams): Promise<IncomeHistory[]>;
    getNotionalAndLeverageBrackets(params?: Partial<BasicSymbolParam>): Promise<SymbolLeverageBracketsResult[] | SymbolLeverageBracketsResult>;
    getADLQuantileEstimation(params?: Partial<BasicSymbolParam>): Promise<any>;
    getForceOrders(params?: GetForceOrdersParams): Promise<ForceOrderResult[]>;
    getApiQuantitativeRulesIndicators(params?: Partial<BasicSymbolParam>): Promise<any>;
    getAccountComissionRate(params: BasicSymbolParam): Promise<RebateDataOverview>;
    /**
     *
     * Broker Futures Endpoints
     *
     **/
    getBrokerIfNewFuturesUser(brokerId: string, type?: 1 | 2): Promise<{
        brokerId: string;
        rebateWorking: boolean;
        ifNewUser: boolean;
    }>;
    setBrokerCustomIdForClient(customerId: string, email: string): Promise<{
        customerId: string;
        email: string;
    }>;
    getBrokerClientCustomIds(customerId: string, email: string, page?: number, limit?: number): Promise<any>;
    getBrokerUserCustomId(brokerId: string): Promise<any>;
    getBrokerRebateDataOverview(type?: 1 | 2): Promise<RebateDataOverview>;
    getBrokerUserTradeVolume(type?: 1 | 2, startTime?: number, endTime?: number, limit?: number): Promise<any>;
    getBrokerRebateVolume(type?: 1 | 2, startTime?: number, endTime?: number, limit?: number): Promise<any>;
    getBrokerTradeDetail(type?: 1 | 2, startTime?: number, endTime?: number, limit?: number): Promise<any>;
    /**
     *
     * User Data Stream Endpoints
     *
     **/
    getFuturesUserDataListenKey(): Promise<{
        listenKey: string;
    }>;
    keepAliveFuturesUserDataListenKey(): Promise<{}>;
    closeFuturesUserDataListenKey(): Promise<{}>;
    /**
     * Validate syntax meets requirements set by binance. Log warning if not.
     */
    private validateOrderId;
}
