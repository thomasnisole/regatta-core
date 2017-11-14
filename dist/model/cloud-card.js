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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("underscore/underscore");
var abstract_card_1 = require("./abstract-card");
var steering_wheel_card_1 = require("./steering-wheel-card");
var CloudCard = (function (_super) {
    __extends(CloudCard, _super);
    function CloudCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudCard.prototype.canDisplayPossibilities = function (cards) {
        if (cards.length === 0 && (!this.previewPossibilities || this.previewPossibilities.length === 0)) {
            return true;
        }
        var swCards = _.sortBy(_.filter(cards, function (c) { return c instanceof steering_wheel_card_1.SteeringWheelCard; }), 'previewOrder');
        if (swCards.length === 1 && swCards[0] === _.last(cards)) {
            return true;
        }
        if (_.last(cards) === this && this.previewPossibilities && this.previewPossibilities.length < 2) {
            return true;
        }
        return false;
    };
    return CloudCard;
}(abstract_card_1.AbstractCard));
exports.CloudCard = CloudCard;
