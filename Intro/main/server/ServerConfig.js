"use strict";

class ServerConfig {
    static #host = "localhost";
    static #port = 3000;

    static getHost() {
        return this.#host;
    }

    static getPort() {
        return this.#port;
    }
}

module.exports = ServerConfig;