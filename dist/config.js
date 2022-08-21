"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DATABASE_URL = exports.FIREBASE_KEY = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
_a = process.env, exports.FIREBASE_KEY = _a.FIREBASE_KEY, exports.DATABASE_URL = _a.DATABASE_URL, exports.PORT = _a.PORT;
