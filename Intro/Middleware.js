"use strict";

class Middleware {
    static #logRequest(req, res, next) {
        console.log(`${req.method} ${req.path} - ${new Date()}`);
        next();
    }

    static useRequests(app, express) {
        // Middleware to parse JSON bodies
        app.use(express.json());

        // Custom middleware example
        app.use(this.#logRequest);
    }
}

module.exports = Middleware;
