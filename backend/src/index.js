"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongodb_1 = require("mongodb");
var dotenv_1 = require("dotenv");
dotenv_1.default.config({ path: __dirname + '/dev.env' });
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
// app.use('cors')
// app.use(express.json());
// const allowedOrigins = ['http://localhost:3000'];
// const options: cors.CorsOptions = {
//     origin: allowedOrigins
//   };
// app.use(cors(options));
// console.log(process.env)
var dbUser = process.env.DB_USER;
var dbPassWord = process.env.DB_PASSWORD;
var uri = "mongodb+srv://".concat(dbUser, ":").concat(dbPassWord, "@caart.z5r0otj.mongodb.net/?retryWrites=true&w=majority&appName=caart");
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
var client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, , 3, 5]);
                    // Connect the client to the server	(optional starting in v4.7)
                    return [4 /*yield*/, client.connect()];
                case 1:
                    // Connect the client to the server	(optional starting in v4.7)
                    _a.sent();
                    // Send a ping to confirm a successful connection
                    return [4 /*yield*/, client.db("admin").command({ ping: 1 })];
                case 2:
                    // Send a ping to confirm a successful connection
                    _a.sent();
                    console.log("Pinged your deployment. You successfully connected to MongoDB!");
                    return [3 /*break*/, 5];
                case 3: 
                // Ensures that the client will close when you finish/error
                return [4 /*yield*/, client.close()];
                case 4:
                    // Ensures that the client will close when you finish/error
                    _a.sent();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
run().catch(console.dir);
app.get('/', function (req, res) {
    res.send('Hello, TypeScript Express!');
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});