// express 모듈 세팅
const express = require('express')
const app = express()

// 서버 세팅 : 포트 번호(번호) 1234로 세팅한다
app.listen(1234)

// 데이터 세팅
let youtuber1 = {
    channelTitle : "십오야",
    sub : "593만명",
    videoNum : "993개"
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6.6천개"
}

let youtuber3 = {
    channelTitle : "테오",
    sub : "54.8만명",
    videoNum : "726개"
}

let db = new Map()

db.set(1, youtuber1) 
db.set(2, youtuber2)
db.set(3, youtuber3)

// REST API 설계
app.get('/youtuber/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if (youtuber == undefined){
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    } else {
            res.json(youtuber)
    }
  })

