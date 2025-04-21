const express = require('express')
const app = express()

// 서버 세팅 : 포트 번호(번호) 1234로 세팅한다
app.listen(1234) 

// API : GET + "http://localhost:1234/test"
//"Test SUCCESS"
app.get('/test', (req, res) => {
    res.send('TEST')
  })

// API : GET + "http://localhost:1234/test/1"
//"One!!"
app.get('/test/1', (req, res) => {
    res.send('One!!')
  })
