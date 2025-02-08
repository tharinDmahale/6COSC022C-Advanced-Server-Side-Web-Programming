"use strict";

class Middleware {
    static use(app, express) {
        // Middleware to parse JSON bodies
        app.use(express.json());

        // Custom middleware example
        app.use((req, res, next) => {
            console.log(`${req.method} : ${req.path} - ${new Date()}`);
            next();
        });
    }
}

module.exports = Middleware;
