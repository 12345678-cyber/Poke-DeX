"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Structures_1 = require("../../Structures");
var command = /** @class */ (function (_super) {
    __extends(command, _super);
    function command() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execute = function (M, _a) {
            var flags = _a.flags;
            return __awaiter(_this, void 0, Promise, function () {
                var sorted, _b, deck, cardCollection, cards, text, _i, cards_1, card, buffer, tiers, _c, cards_2, card, _loop_1, this_1, _d, tiers_1, tier, buffer;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            sorted = flags.includes('--tier');
                            return [4 /*yield*/, this.client.DB.getUser(M.sender.jid)];
                        case 1:
                            _b = _e.sent(), deck = _b.deck, cardCollection = _b.cardCollection;
                            cards = __spreadArray(__spreadArray([], deck, true), cardCollection, true);
                            if (cards.length < 1)
                                return [2 /*return*/, void M.reply("You haven't claimed any cards yet")];
                            text = "\uD83C\uDCCF *Cards | ".concat(M.sender.username, "*\n");
                            if (!!sorted) return [3 /*break*/, 6];
                            for (_i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
                                card = cards_1[_i];
                                text += "\n*\u276F ".concat(card.name, "*");
                            }
                            return [4 /*yield*/, this.client.utils.getBuffer(cards[0].image)];
                        case 2:
                            buffer = _e.sent();
                            if (!(cards[0].tier === '6' || cards[0].tier === 'S')) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.client.utils.gifToMp4(buffer)];
                        case 3:
                            buffer = _e.sent();
                            _e.label = 4;
                        case 4: return [4 /*yield*/, M.reply(buffer, cards[0].tier === '6' || cards[0].tier === 'S' ? 'video' : 'image', cards[0].tier === '6' || cards[0].tier === 'S', undefined, text)];
                        case 5: return [2 /*return*/, void (_e.sent())];
                        case 6:
                            tiers = [];
                            cards.sort(function (x, y) { return y.tier.localeCompare(x.tier); });
                            for (_c = 0, cards_2 = cards; _c < cards_2.length; _c++) {
                                card = cards_2[_c];
                                if (tiers.includes(card.tier))
                                    continue;
                                tiers.push(card.tier);
                            }
                            _loop_1 = function (tier) {
                                text += "\n".concat(this_1.emojis[tier], " *Tier ").concat(tier, "*\n\n");
                                var filteredCards = cards.filter(function (card) { return card.tier === tier; });
                                for (var _f = 0, filteredCards_1 = filteredCards; _f < filteredCards_1.length; _f++) {
                                    var card = filteredCards_1[_f];
                                    text += "*\u276F ".concat(card.name, "*\n");
                                }
                            };
                            this_1 = this;
                            for (_d = 0, tiers_1 = tiers; _d < tiers_1.length; _d++) {
                                tier = tiers_1[_d];
                                _loop_1(tier);
                            }
                            return [4 /*yield*/, this.client.utils.getBuffer(cards[0].image)];
                        case 7:
                            buffer = _e.sent();
                            if (!(cards[0].tier === '6' || cards[0].tier === 'S')) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.client.utils.gifToMp4(buffer)];
                        case 8:
                            buffer = _e.sent();
                            _e.label = 9;
                        case 9: return [4 /*yield*/, M.reply(buffer, cards[0].tier === '6' || cards[0].tier === 'S' ? 'video' : 'image', cards[0].tier === '6' || cards[0].tier === 'S', undefined, text)];
                        case 10: return [2 /*return*/, void (_e.sent())];
                    }
                });
            });
        };
        _this.emojis = {
            S: '👑',
            6: '💎',
            5: '🔮',
            4: '🎗',
            3: '🧿',
            2: '♦',
            1: '🎴'
        };
        return _this;
    }
    command = __decorate([
        (0, Structures_1.Command)('cards', {
            description: "Displays user's claimed cards",
            category: 'cards',
            usage: 'cards',
            cooldown: 10,
            exp: 10
        })
    ], command);
    return command;
}(Structures_1.BaseCommand));
exports.default = command;

