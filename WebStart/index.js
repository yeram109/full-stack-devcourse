let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connet/mariadb');
mariadb.connect();

server.start(router.route, requestHandler.handle);