const express = require('express')
const app = express()

// 서버 세팅 : 포트 번호(번호) 1234로 세팅한다
app.listen(1234)

// GET + "/"
app.get('/', (req, res) => {
  res.send('Hello World')
})


let nodejsBook = {
	title : "Node.js를 공부해보자.",
	price : 20000,
	description : "김송아 짱좋음 이 책 지음"
}


app.get('/products/1', (req, res) => {
    res.json(nodejsBook)
    //res.send(20000)
})
