"use strict";

class Routes {
    #app;

    constructor(app) {
        this.#app = app;
    }

    home() {
        // Basic route
        this.#app.get('/', (req, res) => {
            res.json({ message: 'Welcome to our API!' });
        });
    }

    getUser() {
        // Route with parameters
        this.#app.get('/users/:id', (req, res) => {
            res.json({ message: `User ${req.params.id} found!` });
        });
    }
}

module.exports = Routes;