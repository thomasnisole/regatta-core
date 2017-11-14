"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_typescript_mapper_1 = require("json-typescript-mapper");
var _ = require("underscore/underscore");
var card_1 = require("../model/card");
var cloud_card_1 = require("../model/cloud-card");
var option_card_enum_1 = require("../model/option-card.enum");
var steering_wheel_card_1 = require("../model/steering-wheel-card");
var CardConverter = (function () {
    function CardConverter() {
    }
    CardConverter.prototype.fromJson = function (data) {
        var _this = this;
        return _.map(data, function (d) { return _this.convertCard(d); });
    };
    CardConverter.prototype.toJson = function (cards) {
        return _.map(cards, function (card) { return json_typescript_mapper_1.serialize(card); });
    };
    CardConverter.prototype.convertCard = function (data) {
        if (this.hasCloudOption(data.options)) {
            return json_typescript_mapper_1.deserialize(cloud_card_1.CloudCard, data);
        }
        else if (this.hasSteeringWheelOption(data.options)) {
            return json_typescript_mapper_1.deserialize(steering_wheel_card_1.SteeringWheelCard, data);
        }
        else {
            return json_typescript_mapper_1.deserialize(card_1.Card, data);
        }
    };
    CardConverter.prototype.hasOption = function (options, option) {
        if (!options) {
            return false;
        }
        if (options.length === 0) {
            return false;
        }
        return !_.isUndefined(_.find(options, function (o) { return o === option; }));
    };
    CardConverter.prototype.hasCloudOption = function (options) {
        return this.hasOption(options, option_card_enum_1.OptionCard.CLOUD);
    };
    CardConverter.prototype.hasSteeringWheelOption = function (options) {
        return this.hasOption(options, option_card_enum_1.OptionCard.STEERING_WHEEL);
    };
    return CardConverter;
}());
exports.CardConverter = CardConverter;
exports.cardConverter = new CardConverter();
