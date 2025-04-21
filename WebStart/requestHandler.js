//루트에 도착해서 무얼 할지 알려주는 역할
const mariadb = require('./database/connet/mariadb');

function main(response) {
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err, rows) {
        console.log(rows);
    })

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('main page');
    response.end();
}

function login(response){
    console.log('login');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

let handle = {};  //key:value 사전과 같음
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;