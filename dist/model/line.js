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
var point_1 = require("./point");
var rectangle_1 = require("./rectangle");
var Line = (function () {
    function Line() {
        this.pointA = void 0;
        this.pointB = void 0;
    }
    Line.prototype.intersectRectangle = function (rect) {
        var r = _.clone(rect);
        r.width -= 1;
        r.height -= 1;
        if (this.pointA.x === this.pointB.x
            && this.pointA.x >= r.x && this.pointA.x <= r.x + r.width) {
            if (Math.min(this.pointA.y, this.pointB.y) < r.y
                && Math.max(this.pointA.y, this.pointB.y) < r.y) {
                return false;
            }
            if (Math.min(this.pointA.y, this.pointB.y) > r.y + r.height
                && Math.max(this.pointA.y, this.pointB.y) > r.y + r.height) {
                return false;
            }
            return true;
        }
        if (this.pointA.y === this.pointB.y
            && this.pointA.y >= r.y && this.pointA.y <= r.y + r.height) {
            if (Math.min(this.pointA.x, this.pointB.x) < r.x
                && Math.max(this.pointA.x, this.pointB.x) < r.x) {
                return false;
            }
            if (Math.min(this.pointA.x, this.pointB.x) > r.x + r.width
                && Math.max(this.pointA.x, this.pointB.x) > r.x + r.width) {
                return false;
            }
            return true;
        }
        return false;
    };
    Line.prototype.intersectLine = function (line) {
        var rect = new rectangle_1.Rectangle();
        rect.x = Math.min(line.pointA.x, line.pointB.x);
        rect.y = Math.min(line.pointA.y, line.pointB.y);
        rect.width = Math.abs(line.pointA.x - line.pointB.x) + 1;
        rect.height = Math.abs(line.pointA.y - line.pointB.y) + 1;
        return this.intersectRectangle(rect);
    };
    return Line;
}());
__decorate([
    json_typescript_mapper_1.JsonProperty('pointA'),
    __metadata("design:type", point_1.Point)
], Line.prototype, "pointA", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('pointB'),
    __metadata("design:type", point_1.Point)
], Line.prototype, "pointB", void 0);
exports.Line = Line;
