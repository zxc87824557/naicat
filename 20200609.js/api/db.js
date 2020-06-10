// 資料庫套件
import mongoose from 'mongoose'
// 讓 mongoose 支援 unique 錯誤訊息
import beautifyUnique from 'mongoose-beautiful-unique-validation'
// 驗證
import validator from 'validator'

const Schema = mongoose.Schema

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
// 連線到本機的 mongodb 的 user 資料庫
mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true, useUnifiedTopology: true })
// 使用插件
mongoose.plugin(beautifyUnique)

// 定義資料表的架構
const userSchema = new Schema({
  // 欄位名稱
  name: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '使用者名稱必填'],
    // 最小長度，自訂錯誤訊息
    minlength: [2, '使用者名稱最少 2 個字'],
    // 最大長度，自訂錯誤訊息
    maxlength: [20, '使用者名稱最多 20 個字']
  },
  account: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '帳號必填'],
    // 最小長度，自訂錯誤訊息
    minlength: [8, '帳號最少 8 個字'],
    // 最大長度，自訂錯誤訊息
    maxlength: [20, '帳號最多 20 個字'],
    // 避免重複，只能設定 true，無法自訂錯誤訊息，除非使用套件
    unique: '帳號重複'
  },
  password: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '密碼必填']
  },
  email: {
    // 資料類型是文字
    type: String,
    // 必填欄位，自訂錯誤訊息
    require: [true, '信箱必填'],
    // 自訂驗證規則
    validate: {
      // 驗證 function
      validator (value) {
        // 使用驗證套件檢查是不是 email
        return validator.isEmail(value)
      },
      // 錯誤訊息
      message: '信箱格式錯誤'
    }
  }
}, {
  // 不要紀錄資料修改次數
  versionKey: false
})

// 資料表變數 = mongoose.model(資料表名稱, 對應的 Schema)
const user = mongoose.model('users', userSchema)

export default {
  user
}
