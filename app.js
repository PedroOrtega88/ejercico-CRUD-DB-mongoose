const express = require('express');
const app = express();
const PORT = 3000;
const dbConnection = require('./config/config');
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});
