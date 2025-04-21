//어디 루트로 갈지 정해주는 역할
function route(pathname, handle, response) {
    console.log('pathname: ' + pathname);

		//예외 처리
        if (typeof handle[pathname] == 'function') {  //handle[pathname]의 타입이 함수라면
            handle[pathname](response);  //handle[pathname]은 함수로써 사용
        } else { 
            response.writeHead(404, {'Content-Type' : 'text/html'});
            response.write('Not Found');
            response.end();
        }
}

exports.route = route;