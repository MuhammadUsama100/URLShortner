import { Model } from 'mongoose';
import { URLShortner } from './shortner.model';
export declare class ShortnerService {
    private readonly urlModel;
    constructor(urlModel: Model<URLShortner>);
    insertUrl(url: string, userId: string, userTypeId: string): Promise<URLShortner>;
    updateUrl(urlShortnerId: string, url: string, userId: string, userTypeId: string): Promise<URLShortner>;
    private findUrl;
    getAllUrl(): Promise<URLShortner[]>;
    deleteUrl(urlShortnerId: string): Promise<{
        msg: string;
        status: boolean;
    }>;
}
