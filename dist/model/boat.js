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
var enum_converter_1 = require("../converter/enum-converter");
var orientation_enum_1 = require("./orientation.enum");
var rectangle_1 = require("./rectangle");
var Boat = (function (_super) {
    __extends(Boat, _super);
    function Boat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = void 0;
        _this.boatNumber = void 0;
        _this.orientation = void 0;
        return _this;
    }
    Boat.prototype.isInTopOrientation = function () {
        return this.orientation === orientation_enum_1.Orientation.TOP;
    };
    Boat.prototype.isInLeftOrientation = function () {
        return this.orientation === orientation_enum_1.Orientation.LEFT;
    };
    Boat.prototype.isInRightOrientation = function () {
        return this.orientation === orientation_enum_1.Orientation.RIGHT;
    };
    Boat.prototype.isInBottomOrientation = function () {
        return this.orientation === orientation_enum_1.Orientation.BOTTOM;
    };
    Boat.prototype.isVertical = function () {
        return this.isInTopOrientation() || this.isInBottomOrientation();
    };
    Boat.prototype.isHorizontal = function () {
        return this.isInLeftOrientation() || this.isInRightOrientation();
    };
    Boat.prototype.getCongestion = function () {
        var rect = new rectangle_1.Rectangle();
        switch (this.orientation) {
            case orientation_enum_1.Orientation.LEFT:
            case orientation_enum_1.Orientation.RIGHT:
                rect.x = this.x - ((this.height - 1) / 2);
                rect.y = this.y;
                rect.width = this.height;
                rect.height = this.width;
                break;
            case orientation_enum_1.Orientation.TOP:
            case orientation_enum_1.Orientation.BOTTOM:
                rect.x = this.x;
                rect.y = this.y - ((this.height - 1) / 2);
                rect.width = this.width;
                rect.height = this.height;
                break;
        }
        return rect;
    };
    Boat.prototype.applyRotation = function (delta) {
        this.orientation += delta;
        if (this.orientation > 270) {
            this.orientation = orientation_enum_1.Orientation.TOP;
        }
        else if (this.orientation < 0) {
            this.orientation = orientation_enum_1.Orientation.LEFT;
        }
    };
    return Boat;
}(rectangle_1.Rectangle));
__decorate([
    json_typescript_mapper_1.JsonProperty('color'),
    __metadata("design:type", String)
], Boat.prototype, "color", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('boatNumber'),
    __metadata("design:type", Number)
], Boat.prototype, "boatNumber", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: 'orientation', customConverter: enum_converter_1.enumConverter }),
    __metadata("design:type", Number)
], Boat.prototype, "orientation", void 0);
exports.Boat = Boat;
