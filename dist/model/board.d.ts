import { Buoy } from './buoy';
import { Player } from './player';
import { Rectangle } from './rectangle';
import { SeaElement } from './sea-element';
export declare class Board extends Rectangle {
    zoom: number;
    buoys: Buoy[];
    seaElements: SeaElement[];
    departureArea: Rectangle;
    isInDeparture(player: Player): boolean;
}
