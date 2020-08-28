import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getNewUrl(urlCode: string, res: any): Promise<any>;
}
