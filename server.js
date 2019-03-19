const express = require('express');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const config = require('./config/config');
const cors = require('cors');

server = express();
server.use(cors());

// protect by JWT
server.use(jwt({ secret: config.JWT_SECRET }).unless({ path: ['/auth', '/register', '/authverify', '/uploads'] }));
// Router
require('./routers/routers')(server);

server.listen(8080, () => {
    console.log('Server started');
});