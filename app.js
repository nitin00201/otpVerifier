"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./src/routes/auth"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api', auth_1.default);
const mongoUri = 'mongodb+srv://sahuaparna1234:MDlGdPwBC3DDMtP1@cluster0.cxj2r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose_1.default.connect(mongoUri)
    .then(() => {
    console.log('MongoDB Connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
})
    .catch(err => console.log(err));
