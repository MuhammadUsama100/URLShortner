"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlShortnerSchema = void 0;
const mongoose = require("mongoose");
exports.UrlShortnerSchema = new mongoose.Schema({
    url: { type: String, required: true },
    userId: String,
    urlCode: String,
    userTypeId: String,
});
//# sourceMappingURL=shortner.model.js.map