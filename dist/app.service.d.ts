import { URLShortner } from './shortner/shortner.model';
import { Model } from 'mongoose';
export declare class AppService {
    private readonly urlModel;
    constructor(urlModel: Model<URLShortner>);
    getHello(): string;
    getNewUrl(urlShortnerId: string): Promise<string>;
}
