const express = require('express')
const app = express()

// 서버 세팅 : 포트 번호(번호) 1234로 세팅한다
app.listen(1234)

app.get('/products/:n', (req, res) => {
    // : => 어? 나한테 URL로 매개변수를 전달해줄 건가보다
    // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘 
    // console.log(req.params)
    // console.log(req.params.n)

    let number = parseInt(req.params.n) - 10
    console.log(number) // 숫자 "숫자"

    res.json({
        num : number
    })

})

// 채널주소 : https://www.youtube.com/@ChimChakMan_Official
// app.get('/:nickname', (req, res) => {

//     const param = req.params

//     res.json({
//         channel : param.nickname
//     })
// })

// 영상 클릭 주소 : https://www.youtube.com/watch?v=wBLsojzEpRA&t=13s
// 영상 타임라인 주소 : https://www.youtube.com/watch?v=MUWGJjcJelQ&t=4660s
app.get('/watch', (req, res) => {
    const q = req.query  // q = {v:___, t:___}
    // console.log(q.v)
    // console.log(q.t)

    const {v, t1} = req.query
    console.log(v)
    console.log(t1)

    res.json({
        video : v,
        timeline : t1
    })
})