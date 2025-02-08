"use strict";

const express = require("express");
const Middleware = require("../utility/Middleware");
const ServerConfig = require("./ServerConfig");
const Routes = require("../utility/Routes");

class Server {
    static start() {
        // Create an express app
        const app = express();
        const PORT = ServerConfig.getPort();

        // Use the Middleware class to add middleware to the app
        Middleware.use(app, express);

        // Use the Routes class to add routes to the app
        const routes = new Routes(app);
        routes.home();
        routes.getUser();

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://${ServerConfig.getHost()}:${PORT}`);
        });
    }
}

module.exports = Server;
