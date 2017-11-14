import { ICustomConverter } from 'json-typescript-mapper';
export declare class EnumConverter implements ICustomConverter {
    fromJson(data: any): any;
    toJson(data: any): any;
}
export declare const enumConverter: EnumConverter;
