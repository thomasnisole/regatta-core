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
var point_1 = require("./point");
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = void 0;
        _this.height = void 0;
        return _this;
    }
    Rectangle.prototype.isInAnotherRectangle = function (rect) {
        var rectX2 = rect.x + rect.width;
        var rectY2 = rect.y + rect.height;
        if (this.x < rect.x || this.x > rectX2) {
            return false;
        }
        if (this.y < rect.y || this.y > rectY2) {
            return false;
        }
        if (rectX2 - this.x < this.width) {
            return false;
        }
        if (rectY2 - this.y < this.height) {
            return false;
        }
        return true;
    };
    Rectangle.prototype.intersectAnotherRectangle = function (rect) {
        return !(this.x + (this.width - 1) < rect.x
            || rect.x + (rect.width - 1) < this.x
            || this.y + (this.height - 1) < rect.y
            || rect.y + (rect.height - 1) < this.y);
    };
    return Rectangle;
}(point_1.Point));
__decorate([
    json_typescript_mapper_1.JsonProperty('width'),
    __metadata("design:type", Number)
], Rectangle.prototype, "width", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('height'),
    __metadata("design:type", Number)
], Rectangle.prototype, "height", void 0);
exports.Rectangle = Rectangle;
