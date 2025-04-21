let http = require('http'); //모듈 부르기
let url = require('url');

function start(route, handle){
    function onRequest(request, response) { 
        let pathname = url.parse(request.url).pathname;
        route(pathname, handle, response);
        
    }
    
    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

exports.start = start; // 다른 파일에서 start 함수 가져오기