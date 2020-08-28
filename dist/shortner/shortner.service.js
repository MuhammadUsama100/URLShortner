"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortnerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shorturl = require("shortid");
let ShortnerService = class ShortnerService {
    constructor(urlModel) {
        this.urlModel = urlModel;
    }
    async insertUrl(url, userId, userTypeId) {
        let newUrlCode = shorturl.generate();
        const newUrl = new this.urlModel({
            url,
            userId,
            urlCode: newUrlCode,
            userTypeId,
        });
        const urlVal = await newUrl.save();
        return urlVal;
    }
    async updateUrl(urlShortnerId, url, userId, userTypeId) {
        const urlShortner = await this.findUrl(urlShortnerId);
        if (url) {
            urlShortner.url = url;
        }
        if (userId) {
            urlShortner.userId = userId;
        }
        if (userTypeId) {
            urlShortner.userTypeId = userTypeId;
        }
        let updatedUrl = await urlShortner.save();
        return updatedUrl;
    }
    async findUrl(id) {
        let url;
        try {
            url = await this.urlModel.findById(id);
        }
        catch (e) {
            throw new common_1.NotFoundException('Could not Find url');
        }
        if (!url) {
            throw new common_1.NotFoundException('url not not found');
        }
        return url;
    }
    async getAllUrl() {
        let url = await this.urlModel.find();
        return url;
    }
    async deleteUrl(urlShortnerId) {
        try {
            await this.urlModel.deleteOne({ _id: urlShortnerId });
            return { msg: 'Url Deleted Successfully', status: true };
        }
        catch (e) {
            throw new common_1.NotFoundException('url not found');
        }
    }
};
ShortnerService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('urlShortner')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ShortnerService);
exports.ShortnerService = ShortnerService;
//# sourceMappingURL=shortner.service.js.map