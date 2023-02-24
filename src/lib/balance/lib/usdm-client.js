"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDMClient = void 0;
const requestUtils_1 = require("./util/requestUtils");
const BaseRestClient_1 = __importDefault(require("./util/BaseRestClient"));
class USDMClient extends BaseRestClient_1.default {
    constructor(restClientOptions = {}, requestOptions = {}, useTestnet) {
        const clientId = useTestnet ? 'usdmtest' : 'usdm';
        super(clientId, restClientOptions, requestOptions);
        this.clientId = clientId;
        return this;
    }
    /**
     * Abstraction required by each client to aid with time sync / drift handling
     */
    getServerTime() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(requestUtils_1.getServerTimeEndpoint(this.clientId)).then((response) => response.serverTime);
        });
    }
    /**
     *
     * Market Data Endpoints
     *
     **/
    testConnectivity() {
        return this.get('fapi/v1/ping');
    }
    getExchangeInfo() {
        return this.get('fapi/v1/exchangeInfo');
    }
    getOrderBook(params) {
        return this.get('fapi/v1/depth', params);
    }
    getRecentTrades(params) {
        return this.get('fapi/v1/trades', params);
    }
    getHistoricalTrades(params) {
        return this.get('fapi/v1/historicalTrades', params);
    }
    getAggregateTrades(params) {
        return this.get('fapi/v1/aggTrades', params);
    }
    getKlines(params) {
        return this.get('fapi/v1/klines', params);
    }
    getContinuousContractKlines(params) {
        return this.get('fapi/v1/continuousKlines', params);
    }
    getIndexPriceKlines(params) {
        return this.get('fapi/v1/indexPriceKlines', params);
    }
    getMarkPriceKlines(params) {
        return this.get('fapi/v1/markPriceKlines', params);
    }
    getMarkPrice(params) {
        return this.get('fapi/v1/premiumIndex', params);
    }
    getFundingRateHistory(params) {
        return this.get('fapi/v1/fundingRate', params);
    }
    get24hrChangeStatististics(params) {
        return this.get('fapi/v1/ticker/24hr', params);
    }
    getSymbolPriceTicker(params) {
        return this.get('fapi/v1/ticker/price', params);
    }
    getSymbolOrderBookTicker(params) {
        return this.get('fapi/v1/ticker/bookTicker', params);
    }
    getOpenInterest(params) {
        return this.get('fapi/v1/openInterest', params);
    }
    getOpenInterestStatistics(params) {
        return this.get('futures/data/openInterestHist', params);
    }
    getTopTradersLongShortAccountRatio(params) {
        return this.get('futures/data/topLongShortAccountRatio', params);
    }
    getTopTradersLongShortPositionRatio(params) {
        return this.get('futures/data/topLongShortPositionRatio', params);
    }
    getGlobalLongShortAccountRatio(params) {
        return this.get('futures/data/globalLongShortAccountRatio', params);
    }
    getTakerBuySellVolume(params) {
        return this.get('futures/data/takerlongshortRatio', params);
    }
    getHistoricalBlvtNavKlines(params) {
        return this.get('fapi/v1/lvtKlines', params);
    }
    getCompositeSymbolIndex(params) {
        return this.get('fapi/v1/indexInfo', params);
    }
    /**
     *
     * USD-Futures Account/Trade Endpoints
     *
     **/
    setPositionMode(params) {
        return this.postPrivate('fapi/v1/positionSide/dual', params);
    }
    getCurrentPositionMode() {
        return this.getPrivate('fapi/v1/positionSide/dual');
    }
    setMultiAssetsMode(params) {
        return this.postPrivate('fapi/v1/multiAssetsMargin', params);
    }
    getMultiAssetsMode() {
        return this.getPrivate('fapi/v1/multiAssetsMargin');
    }
    submitNewOrder(params) {
        this.validateOrderId(params, 'newClientOrderId');
        return this.postPrivate('fapi/v1/order', params);
    }
    /**
     * Warning: max 5 orders at a time! This method does not throw, instead it returns individual errors in the response array if any orders were rejected.
     *
     * Known issue: `quantity` and `price` should be sent as strings
     */
    submitMultipleOrders(orders) {
        const stringOrders = orders.map((order) => {
            const orderToStringify = Object.assign({}, order);
            this.validateOrderId(orderToStringify, 'newClientOrderId');
            return JSON.stringify(orderToStringify);
        });
        const requestBody = {
            batchOrders: `[${stringOrders.join(',')}]`,
        };
        return this.postPrivate('fapi/v1/batchOrders', requestBody);
    }
    getOrder(params) {
        return this.getPrivate('fapi/v1/order', params);
    }
    cancelOrder(params) {
        return this.deletePrivate('fapi/v1/order', params);
    }
    cancelAllOpenOrders(params) {
        return this.deletePrivate('fapi/v1/allOpenOrders', params);
    }
    cancelMultipleOrders(params) {
        return this.deletePrivate('fapi/v1/batchOrders', params);
    }
    // Auto-cancel all open orders
    setCancelOrdersOnTimeout(params) {
        return this.postPrivate('fapi/v1/countdownCancelAll', params);
    }
    getCurrentOpenOrder(params) {
        return this.getPrivate('fapi/v1/openOrder', params);
    }
    getAllOpenOrders(params) {
        return this.getPrivate('fapi/v1/openOrders', params);
    }
    getAllOrders(params) {
        return this.getPrivate('fapi/v1/allOrders', params);
    }
    getBalance() {
        return this.getPrivate('fapi/v2/balance');
    }
    getAccountInformation() {
        return this.getPrivate('fapi/v2/account');
    }
    setLeverage(params) {
        return this.postPrivate('fapi/v1/leverage', params);
    }
    setMarginType(params) {
        return this.postPrivate('fapi/v1/marginType', params);
    }
    setIsolatedPositionMargin(params) {
        return this.postPrivate('fapi/v1/positionMargin', params);
    }
    getPositionMarginChangeHistory(params) {
        return this.getPrivate('fapi/v1/positionMargin/history', params);
    }
    getPositions(params) {
        return this.getPrivate('fapi/v2/positionRisk', params);
    }
    getAccountTrades(params) {
        return this.getPrivate('fapi/v1/userTrades', params);
    }
    getIncomeHistory(params) {
        return this.getPrivate('fapi/v1/income', params);
    }
    getNotionalAndLeverageBrackets(params) {
        return this.getPrivate('fapi/v1/leverageBracket', params);
    }
    getADLQuantileEstimation(params) {
        return this.getPrivate('fapi/v1/adlQuantile', params);
    }
    getForceOrders(params) {
        return this.getPrivate('fapi/v1/forceOrders', params);
    }
    getApiQuantitativeRulesIndicators(params) {
        return this.getPrivate('fapi/v1/apiTradingStatus', params);
    }
    getAccountComissionRate(params) {
        return this.getPrivate('fapi/v1/commissionRate', params);
    }
    /**
     *
     * Broker Futures Endpoints
     *
     **/
    // 1 == USDT-Margined, 2 == Coin-margined
    getBrokerIfNewFuturesUser(brokerId, type = 1) {
        return this.getPrivate('fapi/v1/apiReferral/ifNewUser', {
            brokerId,
            type,
        });
    }
    setBrokerCustomIdForClient(customerId, email) {
        return this.postPrivate('fapi/v1/apiReferral/customization', {
            customerId,
            email,
        });
    }
    getBrokerClientCustomIds(customerId, email, page, limit) {
        return this.getPrivate('fapi/v1/apiReferral/customization', {
            customerId,
            email,
            page,
            limit,
        });
    }
    getBrokerUserCustomId(brokerId) {
        return this.getPrivate('fapi/v1/apiReferral/userCustomization', {
            brokerId,
        });
    }
    getBrokerRebateDataOverview(type = 1) {
        return this.getPrivate('fapi/v1/apiReferral/overview', {
            type,
        });
    }
    getBrokerUserTradeVolume(type = 1, startTime, endTime, limit) {
        return this.getPrivate('fapi/v1/apiReferral/tradeVol', {
            type,
            startTime,
            endTime,
            limit,
        });
    }
    getBrokerRebateVolume(type = 1, startTime, endTime, limit) {
        return this.getPrivate('fapi/v1/apiReferral/rebateVol', {
            type,
            startTime,
            endTime,
            limit,
        });
    }
    getBrokerTradeDetail(type = 1, startTime, endTime, limit) {
        return this.getPrivate('fapi/v1/apiReferral/traderSummary', {
            type,
            startTime,
            endTime,
            limit,
        });
    }
    /**
     *
     * User Data Stream Endpoints
     *
     **/
    // USD-M Futures
    getFuturesUserDataListenKey() {
        return this.post('fapi/v1/listenKey');
    }
    keepAliveFuturesUserDataListenKey() {
        return this.put('fapi/v1/listenKey');
    }
    closeFuturesUserDataListenKey() {
        return this.delete('fapi/v1/listenKey');
    }
    /**
     * Validate syntax meets requirements set by binance. Log warning if not.
     */
    validateOrderId(params, orderIdProperty) {
        const apiCategory = this.clientId;
        if (!params[orderIdProperty]) {
            params[orderIdProperty] = requestUtils_1.generateNewOrderId(apiCategory);
            return;
        }
        const expectedOrderIdPrefix = `x-${requestUtils_1.getOrderIdPrefix(apiCategory)}`;
        if (!params[orderIdProperty].startsWith(expectedOrderIdPrefix)) {
            requestUtils_1.logInvalidOrderId(orderIdProperty, expectedOrderIdPrefix, params);
        }
    }
}
exports.USDMClient = USDMClient;
//# sourceMappingURL=usdm-client.js.map