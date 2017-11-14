import { CardType } from './card-type.enum';
import { OptionCard } from './option-card.enum';
import { Orientation } from './orientation.enum';
import { Trajectory } from './trajectory';
export declare abstract class AbstractCard {
    name: string;
    svgParams: any[];
    type: CardType;
    options: OptionCard[];
    possibilities: any[];
    width: number;
    height: number;
    previewOrder: number;
    previewPossibilities: number[];
    xDeparture: number[];
    yDeparture: number[];
    orientationDeparture: Orientation[];
    xArriving: number[];
    yArriving: number[];
    orientationArriving: Orientation[];
    offsetDeparture: number;
    previewTrajectories: Trajectory[];
    playerTrap: string;
    selectedToDrop: boolean;
    isTrapCard(): boolean;
    isMoveCard(): boolean;
    abstract canDisplayPossibilities(cards: AbstractCard[]): boolean;
    lastXDeparture: number;
    lastYDeparture: number;
    lastOrientationDeparture: Orientation;
    lastXArriving: number;
    lastYArriving: number;
    lastOrientationArriving: Orientation;
}