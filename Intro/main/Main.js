"use strict";

const Server = require("./server/Server");

class Main {
    static main() {
        // Main method to start the server
        Server.start();
    }
}

module.exports = Main;