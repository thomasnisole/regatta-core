import { ICustomConverter } from 'json-typescript-mapper';
import { AbstractCard } from '../model/abstract-card';
import { SteeringWheelCard } from '../model/steering-wheel-card';
export declare class CardConverter implements ICustomConverter {
    fromJson(data: any): AbstractCard[];
    toJson(cards: AbstractCard[]): any;
    convertCard(data: any): SteeringWheelCard;
    private hasOption(options, option);
    private hasCloudOption(options);
    private hasSteeringWheelOption(options);
}
export declare const cardConverter: CardConverter;
