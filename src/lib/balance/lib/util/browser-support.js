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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signMessage = void 0;
function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
function signMessage(message, secret) {
    return __awaiter(this, void 0, void 0, function* () {
        const encoder = new TextEncoder();
        if (secret.includes('BEGIN PRIVATE KEY')) {
            const pemHeader = "-----BEGIN PRIVATE KEY-----";
            const pemFooter = "-----END PRIVATE KEY-----";
            const pemContents = secret.substring(pemHeader.length, secret.length - pemFooter.length);
            const binaryDerString = window.atob(pemContents);
            const binaryDer = str2ab(binaryDerString);
            const key = yield window.crypto.subtle.importKey('pkcs8', binaryDer, { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } }, false, ['sign']);
            const signature = yield window.crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, encoder.encode(message));
            return btoa(String.fromCharCode(...new Uint8Array(signature)));
        }
        const key = yield window.crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
        const signature = yield window.crypto.subtle.sign('HMAC', key, encoder.encode(message));
        return Array.prototype.map.call(new Uint8Array(signature), (x) => ('00' + x.toString(16)).slice(-2)).join('');
    });
}
exports.signMessage = signMessage;
;
//# sourceMappingURL=browser-support.js.map