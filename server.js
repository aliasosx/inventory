const express = require('express');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const config = require('./config/config');
const cors = require('cors');

server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// protect by JWT

server.use(jwt({ secret: config.JWT_SECRET }).unless({ path: ['/auth', '/register', '/authverify', '/uploads'] }));

// Router
require('./routers/routers')(server);
require('./routers/users')(server);
require('./routers/products')(server);
require('./routers/stocks')(server);

server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});