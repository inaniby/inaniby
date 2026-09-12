const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('hello from docker'));
app.get('/health', (req, res) => res.send('ok'));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on ' + port));
