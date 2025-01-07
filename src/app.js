"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialitationApp = void 0;
var express = require("express");
var cors = require("cors");
var routes_1 = require("./routes");
var connection_1 = require("./connection");
// Inicializar conexión y servidor Express
exports.initialitationApp = connection_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected successfully");
    var app = express();
    app.use(cors({
        origin: ["http://localhost:3000"],
    }));
    app.use('/api', routes_1.default);
    var PORT = process.env.PORT || 5000;
    app.listen(PORT, function () {
        console.log("Server is running on port ".concat(PORT));
    });
})
    .catch(function (error) {
    console.error("Error connecting to the database", error);
});
