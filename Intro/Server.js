"use strict";

const express = require('express');
const Middleware = require("./Middleware");
const serverconfig = require("./server-config.json");

class Server {
    static #serve() {
        console.log(`Server is running on http://${serverconfig.host}:${serverconfig.port}`);
    }

    static start() {
        const app = express();
        Middleware.useRequests(app, express);
        app.listen(serverconfig.port, this.#serve);
    }
}

Server.start();
