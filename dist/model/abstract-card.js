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
var enum_converter_1 = require("../converter/enum-converter");
var card_type_enum_1 = require("./card-type.enum");
var trajectory_1 = require("./trajectory");
var AbstractCard = (function () {
    function AbstractCard() {
        this.name = void 0;
        this.svgParams = void 0;
        this.type = void 0;
        this.options = void 0;
        this.possibilities = void 0;
        this.width = void 0;
        this.height = void 0;
        this.previewOrder = void 0;
        this.previewPossibilities = void 0;
        this.xDeparture = void 0;
        this.yDeparture = void 0;
        this.orientationDeparture = void 0;
        this.xArriving = void 0;
        this.yArriving = void 0;
        this.orientationArriving = void 0;
        this.offsetDeparture = void 0;
        this.previewTrajectories = void 0;
        this.playerTrap = void 0;
        this.selectedToDrop = void 0;
    }
    AbstractCard.prototype.isTrapCard = function () {
        return this.type === card_type_enum_1.CardType.TRAP;
    };
    AbstractCard.prototype.isMoveCard = function () {
        return this.type === card_type_enum_1.CardType.MOVE;
    };
    Object.defineProperty(AbstractCard.prototype, "lastXDeparture", {
        get: function () {
            if (!this.xDeparture || this.xDeparture.length === 0) {
                return null;
            }
            return this.xDeparture[this.xDeparture.length - 1];
        },
        set: function (value) {
            if (!this.xDeparture) {
                this.xDeparture = [];
            }
            this.xDeparture.push(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCard.prototype, "lastYDeparture", {
        get: function () {
            if (!this.yDeparture || this.yDeparture.length === 0) {
                return null;
            }
            return this.yDeparture[this.yDeparture.length - 1];
        },
        set: function (value) {
            if (!this.yDeparture) {
                this.yDeparture = [];
            }
            this.yDeparture.push(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCard.prototype, "lastOrientationDeparture", {
        get: function () {
            if (!this.orientationDeparture || this.orientationDeparture.length === 0) {
                return null;
            }
            return this.orientationDeparture[this.orientationDeparture.length - 1];
        },
        set: function (value) {
            if (!this.orientationDeparture) {
                this.orientationDeparture = [];
            }
            this.orientationDeparture.push(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCard.prototype, "lastXArriving", {
        get: function () {
            if (!this.xArriving || this.xArriving.length === 0) {
                return null;
            }
            return this.xArriving[this.xArriving.length - 1];
        },
        set: function (value) {
            if (!this.xArriving) {
                this.xArriving = [];
            }
            this.xArriving.push(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCard.prototype, "lastYArriving", {
        get: function () {
            if (!this.yArriving || this.yArriving.length === 0) {
                return null;
            }
            return this.yArriving[this.yArriving.length - 1];
        },
        set: function (value) {
            if (!this.yArriving) {
                this.yArriving = [];
            }
            this.yArriving.push(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCard.prototype, "lastOrientationArriving", {
        get: function () {
            if (!this.orientationArriving || this.orientationArriving.length === 0) {
                return null;
            }
            return this.orientationArriving[this.orientationArriving.length - 1];
        },
        set: function (value) {
            if (!this.orientationArriving) {
                this.orientationArriving = [];
            }
            this.orientationArriving.push(value);
        },
        enumerable: true,
        configurable: true
    });
    return AbstractCard;
}());
__decorate([
    json_typescript_mapper_1.JsonProperty('name'),
    __metadata("design:type", String)
], AbstractCard.prototype, "name", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('svgParams'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "svgParams", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'type', customConverter: enum_converter_1.enumConverter }),
    __metadata("design:type", Number)
], AbstractCard.prototype, "type", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'options', customConverter: enum_converter_1.enumConverter }),
    __metadata("design:type", Array)
], AbstractCard.prototype, "options", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('possibilities'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "possibilities", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('width'),
    __metadata("design:type", Number)
], AbstractCard.prototype, "width", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('height'),
    __metadata("design:type", Number)
], AbstractCard.prototype, "height", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('previewOrder'),
    __metadata("design:type", Number)
], AbstractCard.prototype, "previewOrder", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('previewPossibilities'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "previewPossibilities", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('xDeparture'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "xDeparture", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('yDeparture'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "yDeparture", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('orientationDeparture'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "orientationDeparture", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('xArriving'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "xArriving", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('yArriving'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "yArriving", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('orientationArriving'),
    __metadata("design:type", Array)
], AbstractCard.prototype, "orientationArriving", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('offsetDeparture'),
    __metadata("design:type", Number)
], AbstractCard.prototype, "offsetDeparture", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'previewTrajectories', clazz: trajectory_1.Trajectory }),
    __metadata("design:type", Array)
], AbstractCard.prototype, "previewTrajectories", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('playerTrap'),
    __metadata("design:type", String)
], AbstractCard.prototype, "playerTrap", void 0);
exports.AbstractCard = AbstractCard;
