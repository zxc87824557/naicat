// 資料庫套件
import mongoose from 'mongoose'
// 環境套件
import dotenv from 'dotenv'
// 讓 mongoose 支援 unique 錯誤訊息
import beautifyUnique from 'mongoose-beautiful-unique-validation'
// 啟動環境
dotenv.config()

const Schema = mongoose.Schema

// (因警告而新增)
mongoose.set('useCreateIndex', true)
// (因警告而新增)
mongoose.set('useFindAndModify', false)
mongoose.connect(process.env.DBURL)
mongoose.plugin(beautifyUnique)
// 會員資料
const userSchema = new Schema({
  account: {
    type: String,
    minlength: [4, '帳號必須4個字以上'],
    maxlength: [20, '帳號必須20個字以下'],
    required: [true, '請輸入帳號'],
    unique: '帳號已使用'
  },
  password: {
    type: String,
    required: [true, '請輸入密碼']
  }
}, {
  // 不要紀錄資料修改次數
  versionKey: false
})
//商品
const productSchema = new Schema({
  // 商品名稱
  name: {
    type: String,
    minlength: [2, '商品名稱至少兩個字'],
    // required 才是正確的，須改
    required: [true, '商品名稱必填']
  },
  // 價格
  price: {
    type: Number,
    min: [0, '商品價格最小 0 元'],
    required: [true, '商品價格必填']
  },
  // 商品說明
  description: {
    type: String,
    minlength: [2, '商品說明至少兩個字'],
    required: [true, '商品說明必填']
  },
  // 庫存
  count: {
    type: Number,
    min: [0, '商品庫存最少 0 個'],
    required: [true, '商品庫存必填']
  },
  // 圖片
  image: {
    type: String,
    required: [true, '商品圖片必需要有']
  }
}, {
  versionKey: false
})

const CartSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true
  },
  cartContents: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
})

const users = mongoose.model(process.env.COLLECTION_USER, userSchema)
const product = mongoose.model(process.env.COLLECTION_PRODUCT, productSchema)
const cart = mongoose.model(process.env.COLLECTION_CART, CartSchema)
const connection = mongoose.connection

export default {
  users,
  product,
  cart,
  connection
}
