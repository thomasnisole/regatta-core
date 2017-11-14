"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_typescript_mapper_1 = require("json-typescript-mapper");
var _ = require("underscore/underscore");
var FbObjectsToArrayConverter = (function () {
    function FbObjectsToArrayConverter(type) {
        this.type = type;
    }
    FbObjectsToArrayConverter.prototype.fromJson = function (data) {
        var _this = this;
        if (!data) {
            return [];
        }
        var a = [];
        _.map(data, function (value, key) {
            var obj = json_typescript_mapper_1.deserialize(_this.type, value);
            obj.id = key;
            a.push(obj);
        });
        return a;
    };
    FbObjectsToArrayConverter.prototype.toJson = function (data) {
        if (!data) {
            return null;
        }
        var obj = {};
        _.each(data, function (value) {
            obj[value.id] = value;
            delete obj[value.id].id;
        });
        return obj;
    };
    return FbObjectsToArrayConverter;
}());
exports.FbObjectsToArrayConverter = FbObjectsToArrayConverter;
