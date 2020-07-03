import mongoose from 'mongoose'
import dotenv from 'dotenv'
import beautifyUnique from 'mongoose-beautiful-unique-validation'

dotenv.config()

const Schema = mongoose.Schema
mongoose.connect(process.env.DBURL)

const userSchema = new Schema({
  account: {
    type: String,
    minlength: [4, '帳號必須4個字以上'],
    maxlength: [20, '帳號必須20個字以下'],
    required: [true, '帳號必填'],
    unique: '帳號已使用'
  },
  password: {
    type: String,
    required: [true, '密碼必填']
  }
}, {
  versionKey: false
})

const fileSchema = new Schema({
  user: {
    type: String,
    required: [true, '沒有使用者名稱']
  },
  description: {
    type: String,
    maxlength: [200, '帳號必須200個字以下']
  },
  name: {
    type: String,
    required: [true, '沒有檔案名稱']
  }
}, {
  versionKey: false
})

const users = mongoose.model(process.env.COLLECTION_USER, userSchema)
const files = mongoose.model(process.env.COLLECTION_FILE, fileSchema)

export default {
  users,
  files
}
