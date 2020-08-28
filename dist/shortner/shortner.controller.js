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
exports.ShorterUrlController = void 0;
const common_1 = require("@nestjs/common");
const shortner_service_1 = require("./shortner.service");
let ShorterUrlController = class ShorterUrlController {
    constructor(urlService) {
        this.urlService = urlService;
    }
    async addUrl(url, userId, userTypeId) {
        const newUrl = await this.urlService.insertUrl(url, userId, userTypeId);
        return { newCreatedUrl: newUrl };
    }
    async updateUrl(urlShortnerId, url, userId, userTypeId) {
        let updatedUrl = await this.urlService.updateUrl(urlShortnerId, url, userId, userTypeId);
        return updatedUrl;
    }
    async deleteUrlById(urlShortnerId) {
        let msg = await this.urlService.deleteUrl(urlShortnerId);
        return msg;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('url')),
    __param(1, common_1.Body('userId')),
    __param(2, common_1.Body('userTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ShorterUrlController.prototype, "addUrl", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('url')),
    __param(2, common_1.Body('userId')),
    __param(3, common_1.Body('userTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], ShorterUrlController.prototype, "updateUrl", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShorterUrlController.prototype, "deleteUrlById", null);
ShorterUrlController = __decorate([
    common_1.Controller('url'),
    __metadata("design:paramtypes", [shortner_service_1.ShortnerService])
], ShorterUrlController);
exports.ShorterUrlController = ShorterUrlController;
//# sourceMappingURL=shortner.controller.js.map