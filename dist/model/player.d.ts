import { AbstractCard } from './abstract-card';
import { Boat } from './boat';
import { FbIdentifiable } from './fb-identifiable';
import { Line } from './line';
import { PlayerStatus } from './player-status.enum';
export declare class Player extends FbIdentifiable {
    userId: string;
    name: string;
    status: PlayerStatus;
    boat: Boat;
    checkLines: Line[];
    cards: AbstractCard[];
    nextPlayer: string;
    isTrapped: boolean;
    isLeft: boolean;
    arrivingOrder: number;
    photoURL: string;
    cardPlayedCount: number;
    y: number;
    isWaitingToStart(): boolean;
    isStarted(): boolean;
    isArrived(): boolean;
    hasPreviewedCards(): boolean;
}
