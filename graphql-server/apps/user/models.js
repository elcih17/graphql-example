import mongoose = from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  age: {
    type: Number,
    default: 0,
  },
})

mongoose.createConnection('mongodb://localhost:27017/local')
export default mongoose.model('User', UserSchema)
