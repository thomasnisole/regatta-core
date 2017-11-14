import { Point } from './point';
import { Rectangle } from './rectangle';
export declare class Line {
    pointA: Point;
    pointB: Point;
    intersectRectangle(rect: Rectangle): boolean;
    intersectLine(line: Line): boolean;
}
