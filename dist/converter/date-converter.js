"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateConverter = (function () {
    function DateConverter() {
    }
    DateConverter.prototype.fromJson = function (data) {
        if (!data) {
            return null;
        }
        return new Date(data);
    };
    DateConverter.prototype.toJson = function (data) {
        if (!data) {
            return null;
        }
        return data.toISOString();
    };
    return DateConverter;
}());
exports.DateConverter = DateConverter;
exports.dateConverter = new DateConverter();
