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
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.canDisplayPossibilities = function (cards) {
        if (cards.length === 0 && (!this.previewPossibilities || this.previewPossibilities.length === 0)) {
            return true;
        }
        var swCards = _.sortBy(_.filter(cards, function (c) { return c instanceof steering_wheel_card_1.SteeringWheelCard; }), 'previewOrder');
        if (swCards.length === 1 && swCards[0] === _.last(cards)) {
            return true;
        }
        return false;
    };
    return Card;
}(abstract_card_1.AbstractCard));
exports.Card = Card;
