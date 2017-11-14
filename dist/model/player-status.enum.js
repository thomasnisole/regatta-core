"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["WAITING_TO_START"] = 0] = "WAITING_TO_START";
    PlayerStatus[PlayerStatus["WAITING_TO_PLAY"] = 1] = "WAITING_TO_PLAY";
    PlayerStatus[PlayerStatus["MOVE_PLAYED"] = 2] = "MOVE_PLAYED";
    PlayerStatus[PlayerStatus["TERMINATED"] = 3] = "TERMINATED";
    PlayerStatus[PlayerStatus["FINISHED"] = 4] = "FINISHED";
})(PlayerStatus = exports.PlayerStatus || (exports.PlayerStatus = {}));
