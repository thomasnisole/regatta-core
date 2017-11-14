import { Orientation } from './orientation.enum';
import { Rectangle } from './rectangle';
export declare class Boat extends Rectangle {
    color: string;
    boatNumber: number;
    orientation: Orientation;
    isInTopOrientation(): boolean;
    isInLeftOrientation(): boolean;
    isInRightOrientation(): boolean;
    isInBottomOrientation(): boolean;
    isVertical(): boolean;
    isHorizontal(): boolean;
    getCongestion(): Rectangle;
    applyRotation(delta: number): void;
}
