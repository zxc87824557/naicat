import mongoose from 'mongoose'
import beautifyUnique from 'mongoose-beautiful-unique-validation'

const Schema = mongoose.Schema

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

mongoose.connect('mongodb://127.0.0.1:27017/shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.plugin(beautifyUnique)

const shopSchema = new Schema({
  name: {
    type: String,
    required: [true, '名稱必填'],
    minlength: [1, '最少1個字'],
    maxlength: [20, '最多20個字'],
    unique: '名稱重複'
  },
  price: {
    type: Number,
    required: [true, '價格必填'],
    min: [0, '最小0元']
  },
  description: {
    type: String,
    required: [true, '說明必填'],
    minlength: [1, '最少1個字'],
    maxlength: [50, '最多50個字']
  },
  count: {
    type: Number,
    required: [true, '數量必填'],
    min: [0, '最少0個']
  },
  image: {
    type: String,
    required: [true, '圖片必填']
  }
})

const userSchema = new Schema(
  {
    account: {
      type: String
    },
    password: {
      type: String
    }
  }
)

const shop = mongoose.model('shops', shopSchema)
const user = mongoose.model('users', userSchema)
const connection = mongoose.connection
export default {
  shop,
  user,
  connection
}
