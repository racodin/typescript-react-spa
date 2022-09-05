"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static('build'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});
app.listen(3000, () => {
    console.log("Server is running on port ");
});
// client build -> copy build folder -> move server folder -> start server
// [client]
// npm ci
// npm run build
// client/build -> server/build 이동
// [server]
// npm ci
// tsc
// node app.js