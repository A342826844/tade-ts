"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUSDMFuturesMinNotionalSymbolMap = exports.getUSDMFuturesSymbolMinNotional = void 0;
/** Get min notional filter for a USDM futures symbol */
function getUSDMFuturesSymbolMinNotional(exchangeInfo, symbol) {
    const specs = exchangeInfo.symbols.find((sym) => sym.symbol === symbol);
    if (!specs) {
        return null;
    }
    const filterType = 'MIN_NOTIONAL';
    const filter = specs.filters.find((filter) => filter.filterType === filterType);
    if (!filter) {
        return null;
    }
    return Number(filter.notional);
}
exports.getUSDMFuturesSymbolMinNotional = getUSDMFuturesSymbolMinNotional;
/** Returns an object where keys are USDM Futures symbols and values are min notionals for that symbol */
function getUSDMFuturesMinNotionalSymbolMap(exchangeInfo) {
    const minNotionals = exchangeInfo.symbols.reduce((res, spec) => {
        const filter = spec.filters.find((filter) => filter.filterType === 'MIN_NOTIONAL');
        if (filter) {
            res[spec.symbol] = filter.notional;
        }
        return res;
    }, {});
    return minNotionals;
}
exports.getUSDMFuturesMinNotionalSymbolMap = getUSDMFuturesMinNotionalSymbolMap;
//# sourceMappingURL=exchangeInfo.js.map