import { Point } from './point';
export declare class Rectangle extends Point {
    width: number;
    height: number;
    isInAnotherRectangle(rect: Rectangle): boolean;
    intersectAnotherRectangle(rect: Rectangle): boolean;
}
