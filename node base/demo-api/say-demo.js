const express = require('express')
const app = express()

// 서버 세팅 : 포트 번호(번호) 1234로 세팅한다
app.listen(1234)

// GET + "/"
app.get('/', (req, res) => {
  res.send('Hello World')
})

// GET /hello, /bye, /nicetomeetyou

app.get('/hello', (req, res) => {
    res.json({
        say: '안녕하세요'
    })
  })

app.get('/bye', (req, res) => {
    res.json({
        say: '안녕히 가세요'

    })
})

// GET 메소드로, '/nicetomeetyou' 이 날아오면
// 매개변수로 전달받은 콜백 함수를 호출할게~ => 서버에 세팅
app.get('/nicetomeetyou', (req, res) => {
    res.json({
        say : '반갑습니다'

    })
})