import { AbstractCard } from './abstract-card';
import { Board } from './board';
import { GameStatus } from './game-status.enum';
import { Player } from './player';
export declare class Game {
    static readonly STATES: {
        WAITING: 'waiting';
        STARTED: 'started';
        FINISHED: 'finished';
    };
    id: string;
    name: string;
    password: string;
    currentPlayer: string;
    author: string;
    status: GameStatus;
    players: Player[];
    board: Board;
    cards: AbstractCard[];
    droppedCards: AbstractCard[];
    createdAt: Date;
    updatedAt: Date;
    constructor();
    isWaiting(): boolean;
    isStarted(): boolean;
    isFinished(): boolean;
    getCurrentPlayer(): Player;
    getPlayerByUserId(userId: string): Player;
    getPlayersGaming(): Player[];
    getFinishedPlayers(): Player[];
    isCurrentPlayer(player: Player): boolean;
}
