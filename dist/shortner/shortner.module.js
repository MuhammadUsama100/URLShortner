"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortnerModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const shortner_service_1 = require("./shortner.service");
const shortner_model_1 = require("./shortner.model");
const shortner_controller_1 = require("./shortner.controller");
let ShortnerModule = class ShortnerModule {
};
ShortnerModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'urlShortner', schema: shortner_model_1.UrlShortnerSchema },
            ]),
        ],
        controllers: [shortner_controller_1.ShorterUrlController],
        providers: [shortner_service_1.ShortnerService],
    })
], ShortnerModule);
exports.ShortnerModule = ShortnerModule;
//# sourceMappingURL=shortner.module.js.map