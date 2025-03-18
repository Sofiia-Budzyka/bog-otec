const express = require('express');

const app = express();

app.get('/index.html', (_, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/plans.html', (_, res) => {
    res.sendFile(__dirname + '/plans.html');
});

app.listen(3000);
