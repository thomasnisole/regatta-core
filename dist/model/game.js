"use strict";
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
var date_converter_1 = require("../converter/date-converter");
var enum_converter_1 = require("../converter/enum-converter");
var fb_objects_to_array_1 = require("../converter/fb-objects-to-array");
var board_1 = require("./board");
var game_status_enum_1 = require("./game-status.enum");
var player_1 = require("./player");
var player_status_enum_1 = require("./player-status.enum");
var Game = (function () {
    function Game() {
        this.id = void 0;
        this.name = void 0;
        this.password = void 0;
        this.currentPlayer = null;
        this.author = void 0;
        this.status = void 0;
        this.players = [];
        this.board = void 0;
        this.cards = [];
        this.droppedCards = [];
        this.createdAt = new Date();
        this.updatedAt = null;
        this.status = game_status_enum_1.GameStatus.WAITING;
    }
    Game.prototype.isWaiting = function () {
        return this.status === game_status_enum_1.GameStatus.WAITING;
    };
    Game.prototype.isStarted = function () {
        return this.status === game_status_enum_1.GameStatus.STARTED;
    };
    Game.prototype.isFinished = function () {
        return this.status === game_status_enum_1.GameStatus.FINISHED;
    };
    Game.prototype.getCurrentPlayer = function () {
        var _this = this;
        return _.find(this.players, function (player) { return _this.isCurrentPlayer(player); });
    };
    Game.prototype.getPlayerByUserId = function (userId) {
        return _.find(this.players, function (player) { return player.userId === userId; });
    };
    Game.prototype.getPlayersGaming = function () {
        return _.filter(this.players, function (p) {
            return p.status !== player_status_enum_1.PlayerStatus.FINISHED && p.status !== player_status_enum_1.PlayerStatus.WAITING_TO_START;
        });
    };
    Game.prototype.getFinishedPlayers = function () {
        return _.filter(this.players, function (p) { return p.status === player_status_enum_1.PlayerStatus.FINISHED; });
    };
    Game.prototype.isCurrentPlayer = function (player) {
        if (!this.currentPlayer) {
            return false;
        }
        return player.userId === this.currentPlayer;
    };
    return Game;
}());
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'id', excludeToJson: true }),
    __metadata("design:type", String)
], Game.prototype, "id", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('name'),
    __metadata("design:type", String)
], Game.prototype, "name", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('password'),
    __metadata("design:type", String)
], Game.prototype, "password", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('currentPlayer'),
    __metadata("design:type", String)
], Game.prototype, "currentPlayer", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('author'),
    __metadata("design:type", String)
], Game.prototype, "author", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'status', customConverter: enum_converter_1.enumConverter }),
    __metadata("design:type", Number)
], Game.prototype, "status", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'players', clazz: player_1.Player, customConverter: new fb_objects_to_array_1.FbObjectsToArrayConverter(player_1.Player) }),
    __metadata("design:type", Array)
], Game.prototype, "players", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('board'),
    __metadata("design:type", board_1.Board)
], Game.prototype, "board", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'cards', customConverter: card_converter_1.cardConverter }),
    __metadata("design:type", Array)
], Game.prototype, "cards", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'droppedCards', customConverter: card_converter_1.cardConverter }),
    __metadata("design:type", Array)
], Game.prototype, "droppedCards", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'createdAt', clazz: Date, customConverter: date_converter_1.dateConverter }),
    __metadata("design:type", Date)
], Game.prototype, "createdAt", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'updatedAt', clazz: Date, customConverter: date_converter_1.dateConverter }),
    __metadata("design:type", Date)
], Game.prototype, "updatedAt", void 0);
exports.Game = Game;
