"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const porta = process.env.PORT || 3333;
const server = app_1.default.listen(porta, () => console.log(`rodando na porta : ${porta}...`));
process.on('SIGINT', () => {
    console.log('\n interrompendo o servidor');
    server.close();
    console.log('\n aplicação finalizada');
});
