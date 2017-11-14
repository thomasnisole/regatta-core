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
var buoy_1 = require("./buoy");
var rectangle_1 = require("./rectangle");
var sea_element_1 = require("./sea-element");
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoom = void 0;
        _this.buoys = void 0;
        _this.seaElements = void 0;
        _this.departureArea = void 0;
        return _this;
    }
    Board.prototype.isInDeparture = function (player) {
        if (!player) {
            return false;
        }
        return player.boat.getCongestion().isInAnotherRectangle(this.departureArea);
    };
    return Board;
}(rectangle_1.Rectangle));
__decorate([
    json_typescript_mapper_1.JsonProperty('zoom'),
    __metadata("design:type", Number)
], Board.prototype, "zoom", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'buoys', clazz: buoy_1.Buoy }),
    __metadata("design:type", Array)
], Board.prototype, "buoys", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'seaElements', clazz: sea_element_1.SeaElement }),
    __metadata("design:type", Array)
], Board.prototype, "seaElements", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('departureArea'),
    __metadata("design:type", rectangle_1.Rectangle)
], Board.prototype, "departureArea", void 0);
exports.Board = Board;
