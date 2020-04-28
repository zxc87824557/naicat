// 從http套件引用變數，取名http
// require 是 CommonJS 語法
// const http = require('http')

// 必須要node.js>13.0且在package.json 加入 "type": "module",
import http from 'http'

const server = http.createServer((req, res) => {
    // 回應狀態碼200成功
    res.writeHead(200)
    // 回應內容
    res.write('Hello')
    // 回應結束
    res.end()
})
// 在port 1234 啟動，啟動後再console顯示訊息
server.listen(1234, () => {
    console.log('網頁伺服器已啟動: http://localhost:1234');
})