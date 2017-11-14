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
var User = (function () {
    function User() {
        this.username = void 0;
        this.displayName = void 0;
        this.photoURL = void 0;
        this.victoryCount = void 0;
        this.podiumCount = void 0;
        this.partyCount = void 0;
    }
    return User;
}());
__decorate([
    json_typescript_mapper_1.JsonProperty({ name: '$key', excludeToJson: true }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('email'),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('displayName'),
    __metadata("design:type", String)
], User.prototype, "displayName", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('photoURL'),
    __metadata("design:type", String)
], User.prototype, "photoURL", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('victoryCount'),
    __metadata("design:type", Number)
], User.prototype, "victoryCount", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('podiumCount'),
    __metadata("design:type", Number)
], User.prototype, "podiumCount", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('partyCount'),
    __metadata("design:type", Number)
], User.prototype, "partyCount", void 0);
exports.User = User;
