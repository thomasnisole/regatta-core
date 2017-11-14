"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumConverter = (function () {
    function EnumConverter() {
    }
    EnumConverter.prototype.fromJson = function (data) {
        return data;
    };
    EnumConverter.prototype.toJson = function (data) {
        return data;
    };
    return EnumConverter;
}());
exports.EnumConverter = EnumConverter;
exports.enumConverter = new EnumConverter();
