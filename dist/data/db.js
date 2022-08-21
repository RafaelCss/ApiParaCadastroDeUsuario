"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtoDb = exports.userDb = void 0;
const firestore_1 = require("firebase-admin/firestore");
const app_1 = require("firebase-admin/app");
const certificado_json_1 = __importDefault(require("./certificado.json"));
(0, app_1.initializeApp)({ credential: (0, app_1.cert)(certificado_json_1.default) });
const db = (0, firestore_1.getFirestore)();
exports.userDb = db.collection("usuarios");
exports.produtoDb = db.collection("produtos");
