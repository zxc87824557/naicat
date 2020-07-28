// 網頁伺服器
import express from 'express'
// 讓 express 可以讀取 post 資料
import bodyParser from 'body-parser'
// MD5 加密
import md5 from 'md5'
// 檔案上傳套件
import multer from 'multer'
// Nodejs 預設的路徑套件
import path from 'path'
// Nodejs 預設的檔案套件
import fs from 'fs'
// Express 處理跨網域要求
import cors from 'cors'
// 登入狀態
import session from 'express-session'
// 將登入狀態存入資料庫
import connectMongo from 'connect-mongo'
// 將檔案傳至FTP
import FTPStorage from 'multer-ftp'
// 環境套件
import dotenv from 'dotenv'

import db from './db.js'

// 啟動環境
dotenv.config()

// 啟動登入狀態 + 將登入狀態存入資料庫
const MongoStore = connectMongo(session)

// 使用套件
const app = express()
// 讓 express 使用 body-parser，並把收到的資料轉 json
app.use(bodyParser.json())

// 設定跨域的請求
app.use(cors({
  // origin 來源網域
  origin (origin, callback) {
    // 直接開網頁，不是 ajax 時，origin 是 undefined
    if (origin === undefined) {
      // callback(錯誤, 是否允許)
      callback(null, true)
    } else {
      if (process.env.ALLOW_CORS === 'true') {
        // 開發環境，允許
        callback(null, true)
      } else if (origin.includes('github')) {
        // 非開發環境，但是從 github 過來，允許
        callback(null, true)
      } else {
        // 不是開發也不是從 github 過來，拒絕
        callback(new Error('Not allowed'), false)
      }
    }
  },
  // 是否允許認證資訊
  credentials: true
}))

// 設定登陸狀態
app.use(session({
  // 密鑰，加密認證資料用(可隨便亂打)
  secret: 'naicat',
  // 將 session 存入 mongodb
  store: new MongoStore({
    // 使用 mongoose 的資料庫連接
    mongooseConnection: db.connection,
    // 設定存入的 collection
    collection: process.env.COLLECTION_SESSION
  }),
  // session 登入狀態有效毫秒
  cookie: {
    // 1000 毫秒 = 一秒鐘
    // 1000 毫秒 * 60 = 一分鐘
    // 1000 毫秒 * 60 * 30 = 三十分鐘
    maxAge: 1000 * 60 * 30
  },
  // 是否保存未修改的 session
  saveUninitialized: false,
  // 是否每次重設過期時間
  rolling: true,
  resave: true
}))

let storage
if (process.env.FTP === 'false') {
  // 開發環境將上傳檔案放本機
  storage = multer.diskStorage({
    destination (req, file, cb) {
      cb(null, 'images/')
    },
    filename (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
} else {
  // heroku 將上傳檔案放伺服器
  storage = new FTPStorage({
    // 上傳伺服器的路徑
    basepath: '/',
    // FTP 設定
    ftp: {
      host: process.env.FTP_HOST,
      secure: false,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD
    },
    destination (req, file, options, cb) {
      cb(null, options.basepath + Date.now() + path.extname(file.originalname))
    }
  })
}

const upload = multer({
  storage,
  // 篩選文件
  fileFilter (req, file, cb) {
    // cb(錯誤訊息, 是否接受檔案)
    // 檔案類型有沒有包含 image 文字
    // mimetype 檔案類型
    // includes() 判断一个数组是否包含一个指定的值，如果是返回 true，否则false
    if (!file.mimetype.includes('image')) {
      // 觸發 multer 錯誤，不接受檔案
      // LIMIT_FORMAT 是自訂的錯誤 CODE，跟內建的錯誤 CODE 格式統一
      cb(new multer.MulterError('LIMIT_FORMAT'), false)
    } else {
      cb(null, true)
    }
  },
  limits: {
    // 上傳上限 1mb
    fileSize: 1024 * 1024
  }
})

// 監聽
app.listen(process.env.PORT, () => {
  console.log('已啟動')
  console.log('http://localhost:3000')
})

// 註冊
app.post('/users', async (req, res) => {
  // 判斷是否為json格式
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '格式不符' })
    return
  }

  try {
    // 新增資料
    await db.users.create({
      account: req.body.account,
      password: md5(req.body.password),
      email: req.body.email
    })
    res.status(200)
    res.send({ success: true, message: '註冊成功' })
  } catch (error) {
    if (error.name === 'ValidationError') {
      // 資料格式錯誤
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      // 伺服器錯誤
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
})

// 登入驗證
app.post('/login', async (req, res) => {
  // 判斷是否為json格式
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '格式不符' })
    return
  }

  try {
    // 尋找資料
    const result = await db.users.find(
      {
        account: req.body.account,
        password: md5(req.body.password)
      }
    )

    if (result.length > 0) {
      req.session.user = result[0].account
      res.status(200)
      res.send({ success: true, message: '登入成功', result: result[0] })
    } else {
      res.status(404)
      res.send({ success: false, message: '帳號密碼錯誤' })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      // 資料格式錯誤
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      // 伺服器錯誤
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
})

// 登出
app.delete('/logout', async (req, res) => {
  req.session.destroy(error => {
    if (error) {
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    } else {
      res.clearCookie()
      res.status(200)
      res.send({ success: true, message: '登出成功' })
    }
  })
})

app.get('/heartbeat', async (req, res) => {
  let isLogin = false
  if (req.session.user !== undefined) {
    isLogin = true
  }
  res.status(200)
  res.send(isLogin)
})

// 商品檔案上傳
app.post('/product', async (req, res) => {
  // multipart 有包含檔案
  // form-data form 傳出的資料
  if (!req.headers['content-type'].includes('multipart/form-data')) {
    res.status(400)
    res.send({ success: false, message: '格式不符' })
    return
  }

  // 有一個上傳進來的檔案，欄位是 image
  // req，進來的東西
  // res，要出去的東西
  // err，檔案上傳的錯誤
  // upload.single(欄位)(req, res, 上傳完畢的 function)
  upload.single('image')(req, res, async error => {
    if (error instanceof multer.MulterError) {
      // 上傳錯誤
      let message = ''
      if (error.code === 'LIMIT_FILE_SIZE') {
        message = '檔案太大'
      } else {
        message = '格式不符'
      }
      res.status(400)
      res.send({ success: false, message })
    } else if (error) {
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    } else {
      try {
        let image = ''
        if (process.env.FTP === 'true') {
          image = path.basename(req.file.path)
        } else {
          image = req.file.filename
        }
        const result = await db.product.create(
          {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            count: req.body.count,
            image
          }
        )
        res.status(200)
        res.send({ success: true, message: '商品上傳成功', image, _id: result._id })
      } catch (error) {
        if (error.name === 'ValidationError') {
          // 資料格式錯誤
          const key = Object.keys(error.errors)[0]
          const message = error.errors[key].message
          res.status(400)
          res.send({ success: false, message })
        } else {
          // 伺服器錯誤
          res.status(500)
          res.send({ success: false, message: '伺服器錯誤' })
        }
      }
    }
  })
})