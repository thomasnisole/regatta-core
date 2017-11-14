import { ICustomConverter } from 'json-typescript-mapper';
export declare class DateConverter implements ICustomConverter {
    fromJson(data: any): any;
    toJson(data: any): any;
}
export declare const dateConverter: DateConverter;
