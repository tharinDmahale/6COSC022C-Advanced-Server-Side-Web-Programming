"use strict";

const express = require('express');
const Middleware = require("./Middleware");
const serverconfig = require("./server-config.json");

class Server {
    static #serve() {
        console.log(`Server is running on http://${serverconfig.host}:${serverconfig.port}`);
    }

    static start(express, app, port) {
        Middleware.useRequests(app, express);
        app.listen(port, this.#serve);
    }
}

Server.start(express, express(), 3000);
