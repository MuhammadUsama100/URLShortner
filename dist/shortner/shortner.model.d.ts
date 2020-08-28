import * as mongoose from 'mongoose';
export declare const UrlShortnerSchema: mongoose.Schema<any>;
export interface URLShortner extends mongoose.Document {
    id: string;
    url: string;
    userId: string;
    urlCode: string;
    userTypeId: string;
}
