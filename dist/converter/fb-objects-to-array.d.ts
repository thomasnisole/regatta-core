import { ICustomConverter } from 'json-typescript-mapper';
import { FbIdentifiable } from '../model/fb-identifiable';
export declare class FbObjectsToArrayConverter<T extends FbIdentifiable> implements ICustomConverter {
    private type;
    constructor(type: {
        new (): T;
    });
    fromJson(data: any[]): T[];
    toJson(data: T[]): any;
}
