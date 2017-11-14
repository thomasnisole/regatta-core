"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var json_typescript_mapper_1 = require("json-typescript-mapper");
var _ = require("underscore/underscore");
var card_converter_1 = require("../converter/card-converter");
var enum_converter_1 = require("../converter/enum-converter");
var boat_1 = require("./boat");
var fb_identifiable_1 = require("./fb-identifiable");
var line_1 = require("./line");
var player_status_enum_1 = require("./player-status.enum");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userId = void 0;
        _this.name = void 0;
        _this.status = void 0;
        _this.boat = void 0;
        _this.checkLines = [];
        _this.cards = [];
        _this.nextPlayer = void 0;
        _this.isTrapped = void 0;
        _this.isLeft = void 0;
        _this.arrivingOrder = void 0;
        _this.photoURL = void 0;
        _this.cardPlayedCount = void 0;
        return _this;
    }
    Player.prototype.isWaitingToStart = function () {
        return this.status === player_status_enum_1.PlayerStatus.WAITING_TO_START;
    };
    Player.prototype.isStarted = function () {
        return this.status === player_status_enum_1.PlayerStatus.WAITING_TO_PLAY
            || this.status === player_status_enum_1.PlayerStatus.MOVE_PLAYED
            || this.status === player_status_enum_1.PlayerStatus.TERMINATED;
    };
    Player.prototype.isArrived = function () {
        return this.status === player_status_enum_1.PlayerStatus.FINISHED;
    };
    Player.prototype.hasPreviewedCards = function () {
        return _.filter(this.cards, function (c) { return c.previewPossibilities; }).length > 0;
    };
    return Player;
}(fb_identifiable_1.FbIdentifiable));
__decorate([
    json_typescript_mapper_1.JsonProperty('userId'),
    __metadata("design:type", String)
], Player.prototype, "userId", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('name'),
    __metadata("design:type", String)
], Player.prototype, "name", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'status', customConverter: enum_converter_1.enumConverter }),
    __metadata("design:type", Number)
], Player.prototype, "status", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('boat'),
    __metadata("design:type", boat_1.Boat)
], Player.prototype, "boat", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'checkLines', clazz: line_1.Line }),
    __metadata("design:type", Array)
], Player.prototype, "checkLines", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'cards', customConverter: card_converter_1.cardConverter }),
    __metadata("design:type", Array)
], Player.prototype, "cards", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('nextPlayer'),
    __metadata("design:type", String)
], Player.prototype, "nextPlayer", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('isTrapped'),
    __metadata("design:type", Boolean)
], Player.prototype, "isTrapped", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('isLeft'),
    __metadata("design:type", Boolean)
], Player.prototype, "isLeft", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('arrivingOrder'),
    __metadata("design:type", Number)
], Player.prototype, "arrivingOrder", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('photoURL'),
    __metadata("design:type", String)
], Player.prototype, "photoURL", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('cardPlayedCount'),
    __metadata("design:type", Number)
], Player.prototype, "cardPlayedCount", void 0);
exports.Player = Player;
