import express from 'express'
import bodyParser from 'body-parser'
// 檔案上傳套件
import multer from 'multer'
// node.js內建路徑套件 不用npm
import path from 'path'
// node.js內建檔案套件 不用npm
import fs from 'fs'
// express 處理跨域的請求
import cors from 'cors'
// 登入狀態
import session from 'express-session'
// 將登入狀態存入資料庫
import connectMongo from 'connect-mongo'

import db from './db.js'
const MongoStore = connectMongo(session)
const app = express()

app.use(session({
  // 密鑰，加密認證資料用
  secret: 'zxc87824557',
  cookie: {
    maxAge: 1000 * 60 * 30
  },
  // 是否保存沒有被修改過的連線狀態
  saveUninitialized: false,
  // 是否每次重新計算過期時間
  rolling: true,
  // 存入 mongodb
  store: new MongoStore({
    mongooseConnection: db.connection
  })
}))

app.use(cors({
  // origin 來源網域
  // callback(錯誤, 是否允許)
  origin (origin, callback) {
    callback(null, true)
  },
  // 是否允許認證資訊
  credentials: true
}))

app.use(bodyParser.json())

// 檔案上傳設定
const upload = multer({
  // 檔案儲存
  // multer.diskStorage 代表存在電腦上
  storage: multer.diskStorage({
    // 儲存路徑
    // req 代表使用者丟進來的資料
    // file 代表使用者上傳的檔案
    // cb 代表回應
    destination (req, file, cb) {
      // cb(錯誤訊息，沒有就是 null, 路徑)
      cb(null, 'images/')
    },
    // 檔名
    filename (req, file, cb) {
      // 目前時間
      const now = Date.now()
      // 副檔名
      // 使用 path 套件取得上傳檔案原始檔名的副檔名
      const ext = path.extname(file.originalname)
      // cb(錯誤訊息，沒有就是 null, 檔名)
      cb(null, now + ext)
    }
  }),
  limits: {
    // 檔案大小限制 1MB
    fileSize: 1024 * 1024
  },
  fileFilter (req, file, cb) {
    // cb(錯誤訊息, 是否接受檔案)
    // 檔案類型有沒有包含 image 文字
    if (file.mimetype.includes('image')) {
      // 沒有錯誤，接受檔案
      cb(null, true)
    } else {
      // 觸發 multer 錯誤，不接受檔案
      // LIMIT_FORMAT 是自訂的錯誤 CODE，跟內建的錯誤 CODE 格式統一
      cb(new multer.MulterError('LIMIT_FORMAT'), false)
    }
  }
})

app.post('/new', async (req, res) => {
  if (!req.headers['content-type'].includes('multipart/form-data')) {
    res.status(400)
    res.send({ success: false, message: '資料格式錯誤' })
    return
  }
  // 有一個上傳進來的檔案，欄位是 image
  // req，進來的東西
  // res，要出去的東西
  // err，檔案上傳的錯誤
  // upload.single(欄位)(req, res, 上傳完畢的 function)
  upload.single('image')(req, res, async err => {
    // 如果是上傳發生錯誤
    if (err instanceof multer.MulterError) {
      const message = (err.code === 'LIMIT_FILE_SIZE') ? '檔案太大' : '格式不符'
      res.status(400)
      res.send({ success: false, message })
    } else if (err) {
      // 不是上傳的錯誤
      res.send(500)
      res.send({ success: false, message: '伺服器發生錯誤' })
    } else {
      // 成功，寫入資料庫
      try {
        const result = await db.shop.create(
          {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            count: req.body.count,
            image: req.file.filename
          }
        )
        res.status(200)
        res.send({ success: true, message: '', id: result._id })
      } catch (error) {
        console.log(error)
        const key = Object.keys(error.errors)[0]
        const message = error.errors[key].message
        res.status(400)
        res.send({ success: false, message })
      }
    }
  })
})
// 修改
app.patch('/update/:type', async (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400)
    res.send({ sucess: false, message: '請回傳 json 格式' })
    return
  }

  if (
    req.params.type !== 'name' &&
    req.params.type !== 'price' &&
    req.params.type !== 'description' &&
    req.params.type !== 'count'
  ) {
    res.status(400)
    res.send({ sucess: false, message: '更新欄位不符' })
    return
  }

  try {
    const type = req.params.type
    await db.findByIdAndUpdate(req.body.id, {
      [type]: req.body.data
    }, { new: true })
    res.send({ success: true, message: '' })
  } catch (error) {
    console.log(error.msg)
    res.status(500)
    res.send({ success: false, message: '發生錯誤' })
  }
})
// 刪除
app.delete('/delete', async (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400)
    res.send({ sucess: false, message: '請回傳 json 格式' })
    return
  }

  try {
    const result = await db.findOneAndDelete(req.body.id)
    if (result === null) {
      res.status(404)
      res.send({ success: false, message: '找不到資料' })
    } else {
      res.send({ success: true, message: '' })
    }
  } catch (error) {
    res.status(200)
    res.status(500)
    res.send({ success: false, message: '發生錯誤' })
  }
})
// 查詢商品
app.get('/product', async (req, res) => {
  if (req.session.user) {
    let products = await db.product.find()
    products = products.map(product => {
      product.image = 'http://localhost:3000/image/' + product.image
      return product
    })
    res.status(200)
    res.send({ success: true, message: '', products })
  } else {
    res.status(401)
    res.send({ success: false, message: '請登入' })
  }
})

app.get('/image/:file', async (req, res) => {
  // fs.existsSync() 可以檢查檔案在不在，只能用絕對路徑
  // process.cwd() 可以知道目前運作的 js 檔在哪裡
  const path = process.cwd() + '/images/' + req.params.file
  const exists = fs.existsSync(path)
  if (exists) {
    res.status(200)
    // res.sendFile(路徑)
    // 路徑只能放絕對路徑，不然就是要設定 root 為 process.cwd()
    // res.sendFile(路徑, {root: process.cwd()})
    res.sendFile(path)
  } else {
    res.status(404)
    res.send({ success: false, message: '檔案不存在' })
  }
})

// 查詢所有商品
app.get('/all', async (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400)
    res.send({ sucess: false, message: '請回傳 json 格式' })
    return
  }
  try {
    const result = await db.find().select({ _id: 0, __v: 0 })
    console.log(result)
    res.send({ sucess: true, message: '', products: result })
  } catch (error) {
    console.log(error)
    res.status(404)
    res.send({ success: false, message: '目前無任何資料' })
  }
})
// 查詢庫存商品
app.get('/instock', async (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400)
    res.send({ sucess: false, message: '請回傳 json 格式' })
    return
  }
  try {
    // (>=) 大于等于 - $gte  _id: 0, __v: 0 0 = false  1 = true
    const result = await db.find({ count: { $gte: 10 } }).select({ _id: 0, __v: 0 })
    res.send({ sucess: true, message: '', products: result })
  } catch (error) {
    res.status(404)
    res.send({ success: false, message: '目前無任何資料' })
  }
})

// 帳號登入
app.post('/login', async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '格式錯誤' })
    return
  }
  try {
    console.log(req.body)
    const result = await db.user.find(
      {
        account: req.body.account,
        password: req.body.password
      }
    )
    console.log(result)
    if (result.length > 0) {
      const account = result[0].account
      req.session.user = result[0]
      res.status(200)
      res.send({ success: true, message: '', account })
    } else {
      res.status(200)
      res.send({ success: false, message: '帳號密碼錯誤' })
    }
  } catch (error) {
    res.status(400)
    res.send({ success: false, message: '帳號密碼錯誤' })
  }
})

app.get('/checksession', async (req, res) => {
  res.status(200)
  res.send({ success: true, message: '', user: req.session.user })
})

app.get('/logout', async (req, res) => {
  // 刪除狀態
  req.session.destroy((error) => {
    // 刪除時出錯
    if (error) {
      res.status(500)
      res.send({ success: false, message: '伺服器發生錯誤' })
    } else {
      // 清除瀏覽器的認證資訊
      res.clearCookie()
      res.send({ success: true, message: '' })
    }
  })
})

app.listen(3000, () => {
  console.log('網頁伺服器已啟動')
  console.log('http://localhost:3000')
})
