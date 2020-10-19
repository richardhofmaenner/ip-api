"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// @ts-ignore
var PORT = process.env.PORT | 3000;
var app = express_1.default();
app.set('trust proxy', true);
app.get('/', function (req, res) {
    var ipAddress = null;
    if (req.header('cf-connecting-ip') != null) {
        ipAddress = req.header('cf-connecting-ip');
    }
    else if (req.connection.remoteAddress != null) {
        ipAddress = req.connection.remoteAddress;
    }
    res.send({ ipAddress: ipAddress });
});
app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});
