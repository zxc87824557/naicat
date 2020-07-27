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
  item: {
    type: String,
    required: [true, '沒有商品item']
  },
  img: {
    // 例如: /images/xxx.jpg 或 /miniattic/assets/img/xxx.jpg
    type: String,
    default: '/1594090312145.jpg'
  },
  name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  show: {
    type: Boolean,
    default: false
  }
}, {
  versionKey: false
})

const CartSchema = new mongoose.Schema({
  customerID: {
      type: String,
      required: true
  },
  cartContents: {
      type: [Object]
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
