import { ShortnerService } from './shortner.service';
export declare class ShorterUrlController {
    private readonly urlService;
    constructor(urlService: ShortnerService);
    addUrl(url: string, userId: string, userTypeId: string): Promise<{
        newCreatedUrl: import("./shortner.model").URLShortner;
    }>;
    updateUrl(urlShortnerId: string, url: string, userId: string, userTypeId: string): Promise<import("./shortner.model").URLShortner>;
    deleteUrlById(urlShortnerId: string): Promise<{
        msg: string;
        status: boolean;
    }>;
}
