const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;

app.use(express.static('public', { "maxAge": 1000 }));

var server = app.listen(port);