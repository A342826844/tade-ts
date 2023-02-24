import { AxiosRequestConfig } from 'axios';
import { BasicAssetPaginatedParams, BasicAssetParam, BasicSymbolParam, BinanceBaseUrlKey, CancelOCOParams, CancelOrderParams, ExchangeSymbol, GetAllOrdersParams, GetOrderParams, HistoricalTradesParams, KlinesParams, Kline, NewOCOParams, OrderBookParams, RecentTradesParams, SymbolFromPaginatedRequestFromId } from './types/shared';
import { AccountInformation, AddBSwapLiquidityParams, AggregateTrade, AllCoinsInformationResponse, ApiKeyBrokerSubAccount, APIPermissions, APITradingStatus, AssetDetail, BasicBSwapResp, BasicFromPaginatedParams, BasicFuturesSubAccountParams, BasicMarginAssetParams, BasicSubAccount, BasicTimeRangeParam, BrokerSubAccount, BrokerSubAccountHistory, BrokerSubAccountDepositHistory, BSwapLiquidity, BSwapOperations, BSwapOperationsParams, CancelSpotOrderResult, ChangePermissionApiKeyBrokerSubAccountParams, ChangePermissionApiKeyBrokerSubAccountResponse, ConvertDustParams, CreateApiKeyBrokerSubAccountParams, CreateApiKeyBrokerSubAccountResponse, CreateBrokerSubAccountParams, CreateSubAccountParams, CrossMarginAccountTransferParams, CurrentAvgPrice, DailyAccountSnapshot, DailyAccountSnapshotParams, DailyChangeStatistic, DeleteApiKeyBrokerSubAccountParams, DepositAddressParams, DepositAddressResponse, DepositHistory, DepositHistoryParams, DustConversion, DustInfo, DustLog, EnableFuturesBrokerSubAccountParams, EnableFuturesBrokerSubAccountResponse, EnableMarginApiKeyBrokerSubAccountParams, EnableMarginBrokerSubAccountParams, EnableMarginBrokerSubAccountResponse, EnableOrDisableIPRestrictionForSubAccountParams, EnableUniversalTransferApiKeyBrokerSubAccountParams, EnableUniversalTransferApiKeyBrokerSubAccountResponse, ExchangeInfo, ExchangeInfoParams, FixedAndActivityProjectParams, FixedAndActivityProjectPositionParams, FlexibleSavingBasicParams, FuturesPositionRisk, GetApiKeyBrokerSubAccountParams, GetBrokerInfoResponse, GetBrokerSubAccountParams, GetBrokerSubAccountHistoryParams, GetBrokerSubAccountDepositHistoryParams, GetOCOParams, GetUniversalTransferBrokerParams, IsolatedMarginAccountInfo, IsolatedMarginAccountTransferParams, LeftDailyPurchaseQuotaFlexibleProductResponse, MarginAccountLoanParams, MarginRecordResponse, MarginTransactionResponse, NewSpotOrderParams, OrderBookResponse, OrderResponseACK, OrderResponseFull, OrderResponseResult, TransferBrokerSubAccountParams, TransferBrokerSubAccount, PurchaseFlexibleProductParams, PurchaseFlexibleProductResponse, PurchaseRecordParams, QueryCrossMarginAccountDetailsParams, QueryCrossMarginPairParams, QueryCrossMarginPairResponse, QueryMarginAssetParams, QueryMarginAssetResponse, QueryMarginPriceIndexResponse, QueryMarginRecordParams, QueryMaxBorrowResponse, QueryMaxTransferOutAmountResponse, RawAccountTrade, RawTrade, RedeemFlexibleProductParams, RemoveBSwapLiquidityParams, SpotOrder, StakingBasicParams, StakingHistory, StakingHistoryParams, StakingPersonalLeftQuota, StakingProduct, StakingProductPosition, StakingProductType, SubAccountAddOrDeleteIPList, SubAccountAssetDetails, SubAccountAssets, SubAccountAssetsParams, SubAccountCOINMDetail, SubAccountCOINMPositionRisk, SubAccountCOINMSummary, SubAccountDepositAddress, SubAccountDepositAddressParams, SubAccountDepositHistoryParams, SubAccountEnableFutures, SubAccountEnableLeverageToken, SubAccountEnableMargin, SubAccountFuturesAccountDetail, SubAccountFuturesAccountSummary, SubAccountFuturesAssetTransfer, SubAccountFuturesAssetTransferHistory, SubAccountFuturesAssetTransferHistoryParams, SubAccountFuturesAssetTransferParams, SubAccountListParams, SubAccountListResponse, SubAccountMarginAccountDetail, SubAccountnableOrDisableIPRestriction, SubAccountsMarginAccountSummary, SubAccountSpotAssetsSummary, SubAccountSpotAssetsSummaryParams, SubAccountSpotAssetTransferHistory, SubAccountSpotAssetTransferHistoryParams, SubAccountStatus, SubAccountSummaryOnFuturesAccountV2Params, SubAccountTransfer, SubAccountTransferHistory, SubAccountTransferHistoryParams, SubAccountTransferParams, SubAccountTransferToMasterParams, SubAccountTransferToSameMasterParams, SubAccountUniversalTransfer, SubAccountUniversalTransferHistoryParams, SubAccountUniversalTransferHistoryResponse, SubAccountUniversalTransferParams, SubAccountUSDMDetail, SubAccountUSDMPositionRisk, SubAccountUSDMSummary, SymbolOrderBookTicker, SymbolPrice, SymbolTradeFee, SystemStatusResponse, UniversalTransferBrokerParams, UniversalTransferHistoryParams, UniversalTransferParams, VirtualSubAccount, WithdrawAssetsFromManagedSubAccountParams, WithdrawHistory, WithdrawHistoryParams, WithdrawParams } from './types/spot';
import { RestClientOptions } from './util/requestUtils';
import BaseRestClient from './util/BaseRestClient';
export declare class MainClient extends BaseRestClient {
    constructor(restClientOptions?: RestClientOptions, requestOptions?: AxiosRequestConfig);
    /**
     * Abstraction required by each client to aid with time sync / drift handling
     */
    getServerTime(baseUrlKeyOverride?: BinanceBaseUrlKey): Promise<number>;
    /**
     *
     * Wallet Endpoints
     *
     **/
    getSystemStatus(): Promise<SystemStatusResponse>;
    getBalances(): Promise<AllCoinsInformationResponse[]>;
    getDailyAccountSnapshot(params: DailyAccountSnapshotParams): Promise<DailyAccountSnapshot>;
    disableFastWithdrawSwitch(): Promise<{}>;
    enableFastWithdrawSwitch(): Promise<{}>;
    withdraw(params: WithdrawParams): Promise<{
        id: string;
    }>;
    getDepositHistory(params?: DepositHistoryParams): Promise<DepositHistory[]>;
    getWithdrawHistory(params?: WithdrawHistoryParams): Promise<WithdrawHistory[]>;
    getDepositAddress(params: DepositAddressParams): Promise<DepositAddressResponse>;
    getAccountStatus(): Promise<{
        data: string;
    }>;
    getDustLog(params?: BasicTimeRangeParam): Promise<DustLog>;
    convertDustToBnb(params: ConvertDustParams): Promise<DustConversion>;
    getDust(): Promise<DustInfo>;
    getAssetDividendRecord(params?: BasicAssetPaginatedParams): Promise<any>;
    getAssetDetail(params?: Partial<BasicAssetParam>): Promise<Record<ExchangeSymbol, AssetDetail>>;
    getTradeFee(params?: Partial<BasicSymbolParam>): Promise<SymbolTradeFee[]>;
    submitUniversalTransfer(params: UniversalTransferParams): Promise<{
        tranId: number;
    }>;
    getUniversalTransferHistory(params: UniversalTransferHistoryParams): Promise<any>;
    getApiTradingStatus(): Promise<APITradingStatus>;
    getApiKeyPermissions(): Promise<APIPermissions>;
    /**
     *
     * Sub-Account Endpoints
     *
     **/
    createVirtualSubAccount(params: CreateSubAccountParams): Promise<VirtualSubAccount>;
    getSubAccountList(params?: SubAccountListParams): Promise<SubAccountListResponse>;
    getSubAccountSpotAssetTransferHistory(params?: SubAccountSpotAssetTransferHistoryParams): Promise<SubAccountSpotAssetTransferHistory>;
    getSubAccountFuturesAssetTransferHistory(params: SubAccountFuturesAssetTransferHistoryParams): Promise<SubAccountFuturesAssetTransferHistory>;
    subAccountFuturesAssetTransfer(params: SubAccountFuturesAssetTransferParams): Promise<SubAccountFuturesAssetTransfer>;
    getSubAccountAssets(params: SubAccountAssetsParams): Promise<SubAccountAssets>;
    getSubAccountSpotAssetsSummary(params?: SubAccountSpotAssetsSummaryParams): Promise<SubAccountSpotAssetsSummary>;
    getSubAccountDepositAddress(params: SubAccountDepositAddressParams): Promise<SubAccountDepositAddress>;
    getSubAccountDepositHistory(params: SubAccountDepositHistoryParams): Promise<DepositHistory[]>;
    getSubAccountStatusOnMarginOrFutures(params?: {
        email?: string;
    }): Promise<SubAccountStatus[]>;
    subAccountEnableMargin(email: string): Promise<SubAccountEnableMargin>;
    getSubAccountDetailOnMarginAccount(email: string): Promise<SubAccountMarginAccountDetail>;
    getSubAccountsSummaryOfMarginAccount(): Promise<SubAccountsMarginAccountSummary>;
    subAccountEnableFutures(email: string): Promise<SubAccountEnableFutures>;
    getSubAccountFuturesAccountDetail(email: string): Promise<SubAccountFuturesAccountDetail>;
    getSubAccountFuturesAccountSummary(): Promise<SubAccountFuturesAccountSummary>;
    getSubAccountFuturesPositionRisk(email: string): Promise<FuturesPositionRisk[]>;
    subAccountFuturesTransfer(params: SubAccountTransferParams): Promise<SubAccountTransfer>;
    subAccountMarginTransfer(params: SubAccountTransferParams): Promise<SubAccountTransfer>;
    subAccountTransferToSameMaster(params: SubAccountTransferToSameMasterParams): Promise<SubAccountTransfer>;
    subAccountTransferToMaster(params: SubAccountTransferToMasterParams): Promise<SubAccountTransfer>;
    subAccountTransferHistory(params?: SubAccountTransferHistoryParams): Promise<SubAccountTransferHistory[]>;
    subAccountUniversalTransfer(params: SubAccountUniversalTransferParams): Promise<SubAccountUniversalTransfer>;
    getSubAccountUniversalTransferHistory(params?: SubAccountUniversalTransferHistoryParams): Promise<SubAccountUniversalTransferHistoryResponse>;
    getSubAccountDetailOnFuturesAccountV2(params: BasicFuturesSubAccountParams): Promise<SubAccountUSDMDetail | SubAccountCOINMDetail>;
    getSubAccountSummaryOnFuturesAccountV2(params: SubAccountSummaryOnFuturesAccountV2Params): Promise<SubAccountUSDMSummary | SubAccountCOINMSummary>;
    getSubAccountFuturesPositionRiskV2(params: BasicFuturesSubAccountParams): Promise<SubAccountUSDMPositionRisk | SubAccountCOINMPositionRisk>;
    subAccountEnableLeverageToken(params: SubAccountEnableLeverageToken): Promise<SubAccountEnableLeverageToken>;
    subAccountEnableOrDisableIPRestriction(params: EnableOrDisableIPRestrictionForSubAccountParams): Promise<SubAccountnableOrDisableIPRestriction>;
    subAccountAddIPList(params: SubAccountnableOrDisableIPRestriction): Promise<SubAccountAddOrDeleteIPList>;
    getSubAccountIPRestriction(params: BasicSubAccount): Promise<SubAccountnableOrDisableIPRestriction>;
    subAccountDeleteIPList(params: SubAccountnableOrDisableIPRestriction): Promise<SubAccountnableOrDisableIPRestriction>;
    depositAssetsIntoManagedSubAccount(params: SubAccountTransferToSameMasterParams): Promise<MarginTransactionResponse>;
    getManagedSubAccountAssetDetails(email: string): Promise<SubAccountAssetDetails[]>;
    withdrawAssetsFromManagedSubAccount(params: WithdrawAssetsFromManagedSubAccountParams): Promise<MarginTransactionResponse>;
    /**
     * Broker Endpoints
     */
    getBrokerIfNewSpotUser(): Promise<{
        rebateWorking: boolean;
        ifNewUser: boolean;
    }>;
    getBrokerSubAccountDepositHistory(params?: GetBrokerSubAccountDepositHistoryParams): Promise<BrokerSubAccountDepositHistory[]>;
    getBrokerUserCustomisedId(market: 'spot' | 'futures'): import("./util/requestUtils").GenericAPIResponse<any>;
    createBrokerSubAccount(params: CreateBrokerSubAccountParams): Promise<BrokerSubAccount>;
    getBrokerSubAccountHistory(params: GetBrokerSubAccountHistoryParams): Promise<BrokerSubAccountHistory[]>;
    getBrokerSubAccount(params: GetBrokerSubAccountParams): Promise<BrokerSubAccount[]>;
    getApiKeyBrokerSubAccount(params: GetApiKeyBrokerSubAccountParams): Promise<ApiKeyBrokerSubAccount[]>;
    createApiKeyBrokerSubAccount(params: CreateApiKeyBrokerSubAccountParams): Promise<CreateApiKeyBrokerSubAccountResponse>;
    deleteApiKeyBrokerSubAccount(params: DeleteApiKeyBrokerSubAccountParams): Promise<{}>;
    changePermissionApiKeyBrokerSubAccount(params: ChangePermissionApiKeyBrokerSubAccountParams): Promise<ChangePermissionApiKeyBrokerSubAccountResponse>;
    changeComissionBrokerSubAccount(params: ChangePermissionApiKeyBrokerSubAccountParams): Promise<ChangePermissionApiKeyBrokerSubAccountResponse>;
    enableUniversalTransferApiKeyBrokerSubAccount(params: EnableUniversalTransferApiKeyBrokerSubAccountParams): Promise<EnableUniversalTransferApiKeyBrokerSubAccountResponse>;
    enableMarginBrokerSubAccount(params: EnableMarginBrokerSubAccountParams): Promise<EnableMarginBrokerSubAccountResponse>;
    enableFuturesBrokerSubAccount(params: EnableFuturesBrokerSubAccountParams): Promise<EnableFuturesBrokerSubAccountResponse>;
    enableMarginApiKeyBrokerSubAccount(params: EnableMarginApiKeyBrokerSubAccountParams): Promise<BrokerSubAccount>;
    transferBrokerSubAccount(params: TransferBrokerSubAccountParams): Promise<TransferBrokerSubAccount>;
    universalTransferBroker(params: UniversalTransferBrokerParams): Promise<BrokerSubAccount>;
    getUniversalTransferBroker(params: GetUniversalTransferBrokerParams): Promise<BrokerSubAccount>;
    getBrokerInfo(): Promise<GetBrokerInfoResponse>;
    getBrokerSpotRebateHistory(days: 7 | 30, customerId?: string): import("./util/requestUtils").GenericAPIResponse<any> | undefined;
    /**
     *
     * Market Data Endpoints
     *
     **/
    testConnectivity(): Promise<{}>;
    getExchangeInfo(params?: ExchangeInfoParams): Promise<ExchangeInfo>;
    getOrderBook(params: OrderBookParams): Promise<OrderBookResponse>;
    getRecentTrades(params: RecentTradesParams): Promise<RawTrade[]>;
    getHistoricalTrades(params: HistoricalTradesParams): Promise<RawTrade[]>;
    getAggregateTrades(params: SymbolFromPaginatedRequestFromId): Promise<AggregateTrade[]>;
    getKlines(params: KlinesParams): Promise<Kline[]>;
    getAvgPrice(params: BasicSymbolParam): Promise<CurrentAvgPrice>;
    get24hrChangeStatististics(params?: Partial<BasicSymbolParam>): Promise<DailyChangeStatistic | DailyChangeStatistic[]>;
    getSymbolPriceTicker(params?: Partial<BasicSymbolParam>): Promise<SymbolPrice | SymbolPrice[]>;
    getSymbolOrderBookTicker(params?: Partial<BasicSymbolParam>): Promise<SymbolOrderBookTicker | SymbolOrderBookTicker[]>;
    /**
     *
     * Spot Account/Trade Endpoints
     *
     **/
    testNewOrder(params: NewSpotOrderParams): Promise<{}>;
    submitNewOrder(params: NewSpotOrderParams): Promise<OrderResponseACK | OrderResponseResult | OrderResponseFull>;
    cancelOrder(params: CancelOrderParams): Promise<CancelSpotOrderResult>;
    cancelAllSymbolOrders(params: BasicSymbolParam): Promise<CancelSpotOrderResult[]>;
    getOrder(params: GetOrderParams): Promise<SpotOrder>;
    getOpenOrders(params?: Partial<BasicSymbolParam>): Promise<SpotOrder[]>;
    getAllOrders(params: GetAllOrdersParams): Promise<SpotOrder[]>;
    submitNewOCO(params: NewOCOParams): Promise<any>;
    cancelOCO(params: CancelOCOParams): Promise<any>;
    getOCO(params?: GetOCOParams): Promise<any>;
    getAllOCO(params?: BasicFromPaginatedParams): Promise<any>;
    getAllOpenOCO(): Promise<any>;
    getAccountInformation(): Promise<AccountInformation>;
    getAccountTradeList(params: SymbolFromPaginatedRequestFromId): Promise<RawAccountTrade[]>;
    /**
     *
     * Margin Account/Trade Endpoints
     *
     **/
    crossMarginAccountTransfer(params: CrossMarginAccountTransferParams): Promise<MarginTransactionResponse>;
    marginAccountBorrow(params: MarginAccountLoanParams): Promise<MarginTransactionResponse>;
    marginAccountRepay(params: MarginAccountLoanParams): Promise<MarginTransactionResponse>;
    queryMarginAsset(params: QueryMarginAssetParams): Promise<QueryMarginAssetResponse>;
    queryCrossMarginPair(params: QueryCrossMarginPairParams): Promise<QueryCrossMarginPairResponse>;
    getAllMarginAssets(): Promise<QueryMarginAssetResponse[]>;
    getAllCrossMarginPairs(): Promise<QueryCrossMarginPairResponse[]>;
    queryMarginPriceIndex(params: BasicSymbolParam): Promise<QueryMarginPriceIndexResponse>;
    marginAccountNewOrder(params: NewSpotOrderParams): Promise<OrderResponseACK | OrderResponseResult | OrderResponseFull>;
    marginAccountCancelOrder(params: CancelOrderParams): Promise<CancelSpotOrderResult>;
    marginAccountCancelOpenOrders(params: BasicSymbolParam): Promise<CancelSpotOrderResult[]>;
    queryLoanRecord(params: QueryMarginRecordParams): Promise<MarginRecordResponse>;
    queryRepayRecord(params: QueryMarginRecordParams): Promise<MarginRecordResponse>;
    queryCrossMarginAccountDetails(): Promise<QueryCrossMarginAccountDetailsParams>;
    queryMarginAccountOrder(params: GetOrderParams): Promise<SpotOrder>;
    queryMarginAccountOpenOrders(params: BasicSymbolParam): Promise<SpotOrder[]>;
    queryMarginAccountAllOrders(params: GetAllOrdersParams): Promise<SpotOrder[]>;
    marginAccountNewOCO(params: NewOCOParams): Promise<any>;
    marginAccountCancelOCO(params: CancelOCOParams): Promise<any>;
    queryMarginAccountOCO(params: GetOCOParams): Promise<any>;
    queryMaxBorrow(params: BasicMarginAssetParams): Promise<QueryMaxBorrowResponse>;
    queryMaxTransferOutAmount(params: BasicMarginAssetParams): Promise<QueryMaxTransferOutAmountResponse>;
    isolatedMarginAccountTransfer(params: IsolatedMarginAccountTransferParams): Promise<MarginTransactionResponse>;
    getIsolatedMarginAccountInfo(params?: {
        symbols?: string;
    }): Promise<IsolatedMarginAccountInfo>;
    /**
     *
     * User Data Stream Endpoints
     *
     **/
    getSpotUserDataListenKey(): Promise<{
        listenKey: string;
    }>;
    keepAliveSpotUserDataListenKey(listenKey: string): Promise<{}>;
    closeSpotUserDataListenKey(listenKey: string): Promise<{}>;
    getMarginUserDataListenKey(): Promise<{
        listenKey: string;
    }>;
    keepAliveMarginUserDataListenKey(listenKey: string): Promise<{}>;
    closeMarginUserDataListenKey(listenKey: string): Promise<{}>;
    getIsolatedMarginUserDataListenKey(params: {
        symbol: string;
    }): Promise<{
        listenKey: string;
    }>;
    keepAliveIsolatedMarginUserDataListenKey(params: {
        symbol: string;
        listenKey: string;
    }): Promise<{}>;
    closeIsolatedMarginUserDataListenKey(params: {
        symbol: string;
        listenKey: string;
    }): Promise<{}>;
    /**
     *
     * Staking Endpoints
     *
     **/
    getStakingProducts(params: StakingBasicParams & {
        asset?: string;
    }): Promise<StakingProduct[]>;
    getStakingProductPosition(params: StakingBasicParams & {
        productId?: string;
        asset?: string;
    }): Promise<StakingProductPosition[]>;
    getStakingHistory(params: StakingHistoryParams): Promise<StakingHistory[]>;
    getPersonalLeftQuotaOfStakingProduct(params: {
        product: StakingProductType;
        productId: string;
    }): Promise<StakingPersonalLeftQuota>;
    /**
     *
     * Savings Endpoints
     *
     **/
    getFlexibleSavingProducts(params: FlexibleSavingBasicParams): Promise<StakingProduct[]>;
    purchaseFlexibleProduct(params: PurchaseFlexibleProductParams): Promise<PurchaseFlexibleProductResponse>;
    redeemFlexibleProduct(params: RedeemFlexibleProductParams): Promise<{}>;
    getFlexibleProductPosition(params: {
        asset?: string;
    }): Promise<StakingProduct[]>;
    getLeftDailyPurchaseQuotaFlexibleProduct(params: {
        productId: string;
    }): Promise<LeftDailyPurchaseQuotaFlexibleProductResponse>;
    getLeftDailyRedemptionQuotaFlexibleProduct(params: {
        productId: string;
    }): Promise<LeftDailyPurchaseQuotaFlexibleProductResponse & {
        dailyQuota: string;
        minRedemptionAmount: string;
    }>;
    purchaseFixedAndActivityProject(params: {
        projectId: string;
        lot: number;
    }): Promise<PurchaseFlexibleProductResponse>;
    getFixedAndActivityProjects(params: FixedAndActivityProjectParams): Promise<any[]>;
    getFixedAndActivityProductPosition(params: FixedAndActivityProjectPositionParams): Promise<any[]>;
    getLendingAccount(): Promise<StakingProduct[]>;
    getPurchaseRecord(params: PurchaseRecordParams): Promise<any[]>;
    getRedemptionRecord(params: PurchaseRecordParams): Promise<any[]>;
    getInterestHistory(params: PurchaseRecordParams): Promise<any[]>;
    changeFixedAndActivityPositionToDailyPosition(params: {
        projectId: string;
        lot: number;
        positionId?: number;
    }): Promise<PurchaseFlexibleProductResponse>;
    /**
     *
     * Mining Endpoints
     *
     **/
    /**
     *
     * Futures Management Endpoints
     * Note: to trade futures use the usdm-client or coinm-client. The spot client only has the futures endpoints listed in the "spot" docs category
     *
     **/
    /**
     *
     * BLVT Endpoints
     *
     **/
    /**
     *
     * BSwap Endpoints
     *
     **/
    getBSwapLiquidity(params?: {
        poolId: number;
    }): Promise<BSwapLiquidity[]>;
    addBSwapLiquidity(params: AddBSwapLiquidityParams): Promise<BasicBSwapResp>;
    removeBSwapLiquidity(params: RemoveBSwapLiquidityParams): Promise<BasicBSwapResp>;
    getBSwapOperations(params?: BSwapOperationsParams): Promise<BSwapOperations[]>;
    /**
     * Validate syntax meets requirements set by binance. Log warning if not.
     */
    private validateOrderId;
}
/**
 * @deprecated use MainClient instead of SpotClient (it is the same)
 */
export declare const SpotClient: typeof MainClient;
