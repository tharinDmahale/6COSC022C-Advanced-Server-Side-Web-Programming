const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/submit', (req, res) => {
    const coursework1 = parseFloat(req.body.coursework1);
    const coursework2 = parseFloat(req.body.coursework2);
    const overallMark = (coursework1 * 0.4) + (coursework2 * 0.6);

    res.json({
        overallMark: overallMark 
    });
});

function listenerCallback(port) {
    console.log(`Server running at http://localhost:${port}`);
}

app.listen(port, listenerCallback(port));